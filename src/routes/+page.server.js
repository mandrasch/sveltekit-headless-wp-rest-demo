
// https://rodneylab.com/using-fetch-sveltekit/
/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
    try {
        /*const variables: QueryLatestArgs = {
            baseCurrency: 'EUR',
            quoteCurrencies: ['CAD', 'GBP', 'IDR', 'INR', 'USD']
        };*/

        const response = await fetch('https://sveltekit-pico-headless-wp.ddev.site/wp-json/wp/v2/posts?_embed', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            /*body: JSON.stringify({
                query,
                variables
            })*/
        });

        const posts = await response.json();
        return { posts };
    } catch (error) {
        console.error(`Error in load function for /: ${error}`);
    }
};