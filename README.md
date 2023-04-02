# SvelteKit Headless WP REST API demo

Work in progress. 👨‍💻

Live: https://sveltekit-headless-wp-rest-demo.vercel.app/

Content is fetched from WordPress demo backend https://nature-blog.mandrasch.eu/. Please use your own backend if you run big tests. The backend API URL can be configured in `.env`-file.

![Screenshot of website](screenshot1.png?raw=true)

![Screenshot of website](screenshot2.png?raw=true)

## Local setup

```bash
npm install
# Copy .env.example to .env
npm run dev -- --open
```

## Local backend (optional)

See https://github.com/mandrasch/sveltekit-headless-wp-rest-demo-backend and switch in `.env`-file to the following:

```bash
# .env
PUBLIC_WP_REST_API_DOMAIN=https://sveltekit-headless-wp-rest-demo.ddev.site
```

## Deployment

- Vercel (SSR hosting)
  - Just add environment variable, see `.env.example` and deploy
- [adapter-static](https://kit.svelte.dev/docs/adapter-static) (static site)
  - TODO: Not yet implemented / how to deploy both simultaneously? See e.g. https://github.com/mandrasch/aktuelle-erderhitzung for example of static site generator
- [adapter-node](https://kit.svelte.dev/docs/adapter-node)
  - Not implemented here, see e.g. https://dev.to/mandrasch/host-sveltekit-apps-with-ssr-support-via-ploiio-on-hetzner-cloud-1cpa

## TODOs

- [ ] Add post list with pagination
- [ ] Add acf fields, custom post type + search filter for CPTs
  - https://www.youtube.com/watch?v=lrzHaTcpRh8
  - https://www.youtube.com/watch?v=6uNwXEyIGI4
  - https://www.youtube.com/watch?v=ErUPsA0TDLE
  - https://www.youtube.com/watch?v=aZZ6Cko4nKU
  - https://svelte.dev/repl/e67e1a90ef3945ec988bf39f6a10b6b3?version=3.32.3
  - use grid.js or AG-grid?
- [ ] Add cookie / 2 click privacy solution for embeds, see: https://github.com/mandrasch/wie-steht-es-um-das-klima-so, https://orestbida.com/demo-projects/cookieconsent/
- [ ] Add gmaps (or similiar) example, gdpr-compatible
- [ ] Add forms example - submit via REST API
- [ ] Add forms example (CF7) with captcha
- [ ] Add sitemap, https://www.npmjs.com/package/svelte-sitemap?
- [ ] Add search?
- [ ] Add loading animation - there a lib for that? https://dev.to/shajidhasan/add-a-youtube-like-page-loading-animation-in-sveltekit-58kp
- [ ] Follow trac ticket for "Sorry, you are not allowed to do that."
      " on some media files -> https://core.trac.wordpress.org/ticket/41445

## How was this created?

```bash
# Frontend - SvelteKit
npm create svelte@latest frontend
cd frontend
npm install

npm i @picocss/pico
# Add picocss - https://joyofcode.xyz/using-pico-css-with-svelte
npm i -D sass
npm i -D svelte-preprocess

# Gutenberg styles:
npm install @wordpress/block-library --save
```

## Resources used

- https://developers.wpengine.com/blog/gutenberg-in-headless-wordpress-render-blocks-as-html

## Credits

- https://kit.svelte.dev/
- https://picocss.com/
- https://www.npmjs.com/package/@wordpress/block-library
- https://codepen.io/HenrikFricke/pen/GRNYrXK

## License

My own work (mostly config stuff) is available as CC0 / Public Domain, no need for attribution. Due to compatibility to SvelteKit and other packages, I also licensed this as MIT license.

Please see `package.json` for a list of all used Open Source libraries and their respective licenses.
