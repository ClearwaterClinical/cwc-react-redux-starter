# cwc-react-redux-starter
A complete React.js with Redux starter, complete with bootstrap styling.

This is the core stack we use at Clearwater Clinical for our web applications.
Out of the box, there are a few things that this stack comes with that you might
not get in other, more bare boilerplates. Here's what we offer:

- Working build and development modes for our webpack configuration.
  + You also get the ability to define a prefix, in case you aren't storing your
    single page application at the root of your web server (most people aren't.)
- Bootstrap Sass already set up and building a separate CSS file with consistent
  nesting.
- Linting with an `.eslintrc` already defined that closely follows
  npm-coding-style with few exceptions.
- Comes with react 0.14, redux, react transform, and babel 6.
- i18next is included for translation/internationalization

## Getting Started

You can clone or fork in repository and start building on it. Right now there is
a demo on authentication and some page navigation.

Get all the dependencies: `npm install`

Start in development mode: `npm start`

Create a `/build`: `npm run build`
