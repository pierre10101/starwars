# Star Wars Movie / SWAPI API

This project was bootstrapped with [Create Nuxt App](https://nuxt.com/docs/getting-started/installation). Using API from [SWAPI](https://swapi.co).<br>
To see this project in action, go to [Demo Star Wars](https://victorious-bush-0120f5203.4.azurestaticapps.net/)

## Getting Started

Clone this repo :
`git clone https://github.com/pierre10101/starwars.git`

Navigate to the root folder and install all dependencies :

- `yarn` or `npm install`

Start Development Mode :

- `yarn run dev` or `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Visit http://localhost:3000/\_tailwind/ for tailwind
- Press press `Shift + Alt + D` in the browser for Nuxt dev tools
- Happy Hacking!

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build` or `yarn run build`

Builds the app for production to the `.ouput` folder.<br>
It correctly bundles Nuxt in production mode and optimizes the build for the best performance.
Build creates a SSR rendered app <br>

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run generate` or `yarn run generate`

Builds the app for production to the `.ouput` folder.<br>
It correctly bundles Nuxt in production mode and optimizes the build for the best performance.
Build creates a static rendered app <br>

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://nuxt.com/docs/getting-started/deployment) for more information.

### `npm run lint` or `yarn run lint`

To check javascript linting rules based on eslint and prettier.

### `npm run lintfix` or `yarn run lintfix`

To format using eslint

## Folder Structure

```
|-- assets/
    |-- img/
    |-- sound/
|-- components/
    |-- hero/
    |-- loader/
    |-- modal/
    |-- select/
    |-- table/
|-- composables/
|-- layouts/
|-- pages/
    |-- admin/
|-- plugins/
|-- server/
|-- app.vue
|-- nuxt.config.ts
|-- tailwind.config.js
|-- tsconfig.json
```

- `components` : Folder to put all components shared and not
- `composables` : Folder to manage central state and other hooks
- `layouts`: Folder to manage layout
- `pages`: Folder to manage all pages (file based routing)
- `plugins : Folder to manage any framework extension based on plugins i.e., error handling

## Style Utilities

### This project implements `Tailwindcss`.

Most defaults are used. See the [Documentation](https://tailwindcss.com/docs/configuration).
Any custom additions like images and colours can be found in the `tailwind.config.js` file.
