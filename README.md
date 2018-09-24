This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## The Graphql and JS example app

The graphql js example app teaches the very basics of how to work with Contentful:

- consume content from the Contentful Delivery and Preview APIs
- model content
- edit content through the Contentful web app

The app demonstrates how decoupling content from its presentation enables greater flexibility and facilitates shipping higher quality software more quickly.

<a href="https://the-example-app-nodejs.herokuapp.com/" target="_blank"><img src="https://images.contentful.com/qz0n5cdakyl9/4GZmvrdodGM6CksMCkkAEq/700a527b8203d4d3ccd3c303c5b3e2aa/the-example-app.png" alt="Screenshot of the example app"/></a>

## What is Contentful?

[Contentful](https://www.contentful.com) provides a content infrastructure for digital teams to power content in websites, apps, and devices. Unlike a CMS, Contentful was built to integrate with the modern software stack. It offers a central hub for structured content, powerful management and delivery APIs, and a customizable web app that enable developers and content creators to ship digital products faster.

## Requirements

* Node 8
* Git

Without any changes, this app is connected to a Contentful space with read-only access. To experience the full end-to-end Contentful experience, you need to connect the app to a Contentful space with read _and_ write access. This enables you to see how content editing in the Contentful web app works and how content changes propagate to this app.

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/contentful/the-example-app.graphql.js.git
cd the-example-app.graphql.js
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm start
```

[http://localhost:3000](http://localhost:3000) should open automatically; take a look around.


## Deploy to Heroku
You can also deploy this app to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Setup for Introspection Fragment Matcher

Because we create fragments over union types in this project, we need to use an IntrospectionFragmentMatcher. This fragment matcher needs to understand a bit more about our schema in order to
function properly. We use a script to extract the schema and store it in a JSON file. This file is imported when the fragment matcher is constructed. The schema json is included in the project, but may need to be re-exported if the schema changes. You can do this with `npm run fragmentTypesScript`. More information about this script and fragment matchers can be found in the Apollo Client documentation [here](https://www.apollographql.com/docs/react/advanced/fragments.html).
