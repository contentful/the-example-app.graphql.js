## The Example App end-to-end tests

These e2e tests are based on the (The Example App end-to-end Tests respository)[https://github.com/contentful/the-example-app-e2e-tests]. These tests exist to ensure that all web-based implementations of `The Example App` share the same functionality. This directory is using a subset of those tests, since the GraphQL Example App has a more limited scope than the other Example Apps.

## Setup

The CircleCI config, `.circleci/config.yml`, contains two jobs: `unit` and `e2e`. The e2e job installs dependencies in this directory, starts the project server locally, and then runs the e2e tests using Cypress. For more information, check the `run-e2e-test.js` script, and the documentation of (The Example App end-to-end Tests respository)[https://github.com/contentful/the-example-app-e2e-tests].
