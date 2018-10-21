## Lightweight React WebApp Skeleton

A slim boilerplate for React projects. Features [express](https://github.com/expressjs/express), [jest](https://github.com/facebook/jest), [eslint](https://github.com/eslint/eslint), and [Docker](https://github.com/docker) integration.

## Features

#### Build and Serve (Express.js)

Build to `build/` directory with `yarn run build` command, or build and serve with `yarn run serve`.

#### Docker

Build Docker with `yarn run docker:build` command, or build and run with `yarn run docker:run`

#### Testing

Test with jest using `yarn run jest`.

#### Webpack Dev Server

Start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with `yarn run start:dev`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

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

## Deployment

...

## Built With

- [React](https://github.com/facebook/react) - JavaScript library for building user interfaces 
- [Express.js](https://github.com/expressjs/express) - Web application framework for Node.js
- [yarn](https://github.com/yarn/yarn) - Dependency Management

## Authors

- **Brandon Rush** - _Initial work_ - [BrandonRush](https://github.com/BrandonRush)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Features parts from https://www.reactstarterkit.com
