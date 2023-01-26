Work in progress. 👨‍💻

## Local setup 

### WordPress backend

```
ddev start && ddev composer install
ddev exec cp .env.example .env
ddev composer install
# import example database
ddev snapshot restore --latest

# for prettier-php support in vscode
ddev npm install
```

https://sveltekit-pico-headless-wp.ddev.site/wp-admin/
User: admin
PW: !jIO*D^^XtAF9N4x9Z

### SvelteKit frontend

Currently via local (host computer) npm, could be maybe added to DDEV as well:

```bash
cd frontend/
npm install
npm run dev -- --open
```

## How was this created?

```
# Backend - WordPress with bedrock
# https://ddev.readthedocs.io/en/stable/users/quickstart/#wordpress -> bedrock
mkdir wp-backend
cd wp-backend
ddev config --project-type=wordpress --docroot=web --create-docroot
ddev start
ddev composer create roots/bedrock
# create .env
# install via browser 
ddev launch
# Copy ACF pro into /web/app/plugins/, activate
ddev wp plugin activate advanced-custom-fields-pro
# Headless Mode plugin https://wordpress.org/plugins/headless-mode/
ddev composer require "wpackagist-plugin/headless-mode":"0.4.0"

# save database snapshot for easy demo setup
ddev snapshot
```

```bash
# Frontend - SvelteKit
npm create svelte@latest frontend
cd frontend
npm install

npm i @picocss/pico
# Add picocss - https://joyofcode.xyz/using-pico-css-with-svelte
npm i -D sass
npm i -D svelte-preprocess
```

## License

My own work (mostly config stuff) is availabe as CC0 / Public Domain.

In this repository ACF pro is included for demo purposes. ACF pro is licensed as License: GPLv2 (https://www.gnu.org/licenses/gpl-2.0.html). Please support the developers by purchasing a license.