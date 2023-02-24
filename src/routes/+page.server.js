import { PUBLIC_WP_REST_API_DOMAIN } from '$env/static/public'

// TODO: Better error handling!

// https://rodneylab.com/using-fetch-sveltekit/
/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    try {
        /*const variables: QueryLatestArgs = {
            baseCurrency: 'EUR',
            quoteCurrencies: ['CAD', 'GBP', 'IDR', 'INR', 'USD']
        };*/
        console.log('Requesting: ', `${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/posts?_embed`);
        const response = await fetch(`${PUBLIC_WP_REST_API_DOMAIN}/wp-json/wp/v2/posts?_embed`);
        const posts = await response.json();
        return { posts };
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }
};