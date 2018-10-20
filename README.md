## Lightweight React WebApp Skeleton

A slim boilerplate for React projects. Features [express](https://github.com/expressjs/express), [jest](https://github.com/facebook/jest), [eslint](https://github.com/eslint/eslint), and [Docker](https://github.com/docker) integration.

### Features

#### Build and Serve (Express.js)

Build to `build/` directory with `yarn run build` command, or build and serve with `yarn run serve`.

### Docker

Build Docker with `yarn run docker:build` command, or build and run with `yarn run docker:build`

### Jest

Test with jest using `yarn run jest`.

### Webpack Dev Server

Start `[webpack-dev-server]( https://github.com/webpack/webpack-dev-server )` with `yarn run start:dev`.

## Project Structure

```bash
/
├── assets/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── build/
├── node_modules/
├── server/
│   └── components/
│       └── Html.js
├── src/
│   ├── app/
│   │   ├── actions/
│   │   ├── components/
│   │   │  ├── App.js
│   │   │  └── App.test.js
│   │   ├── containers/
│   │   │  └── index.js
│   │   ├── reducers/
│   │   │  └── index.js
│   │   └── index.js
│   └── models/
│       └── index.js
├── .babelrc
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .travis.yml
├── Dockerfile
├── jest.config.js
├── package.json
├── README.md
├── server.js
├── webpack.config.js
└── yarn.lock
```

#### Features parts from https://www.reactstarterkit.com

#### License

This source code is licensed under the MIT license.

...
