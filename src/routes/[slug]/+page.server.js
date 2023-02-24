import { PUBLIC_WP_REST_API_DOMAIN } from '$env/static/public'
import { error } from '@sveltejs/kit';


// TODO: Better (and general) error handling! 

// https://rodneylab.com/using-fetch-sveltekit/
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
    try {

        console.log('[slug/+page.server.js] Requesting pages and posts for slug:', params.slug);

        // https://scottspence.com/posts/fetch-data-from-two-or-more-endpoints-in-svelte
        console.log('[slug/+page.server.js] Requesting:', `${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/pages?slug=${params.slug}`);
        console.log('[slug/+page.server.js] Requesting:', `${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/posts?slug=${params.slug}`);
        const [pagesReq, postsReq] = await Promise.all([
            fetch(`${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/pages?slug=${params.slug}`),
            fetch(`${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/posts?slug=${params.slug}`),
        ]);

        console.log('Received', { pagesReqStatus: pagesReq.status, postsReqStatus: postsReq.status });


        if (!pagesReq.ok || !postsReq.ok) {
            // TODO: error handling needed? or covered by try/catch?
            // https://kit.svelte.dev/docs/errors
            console.error("Error in fetches, at least one fetch returned other status code than 200!");
            [pagesReq, postsReq].forEach(async (req) => {
                if (!req.ok) {
                    const errorMessageText = await req.json(); // TODO: always json?!
                    console.error('Request failed:', { req, errorMessageText });
                }
            });
            // TODO: return / throw error here?
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
        let pages, posts = [];
        if (pagesReq.ok) {
            pages = await pagesReq.json();
        }
        if (postsReq.ok) {
            posts = await postsReq.json();
        }
        // console.log({ pages, posts })

        if (pages.length > 0) {
            return { entries: pages };
        } else if (posts.length > 0) {
            return { entries: posts };
        } else {
            console.log('No entries (post/pages) found...');
            return { entries: [] }  // TODO: what is the best way to cover this case (not found)?
        }
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }
};