## The Example App end-to-end tests

These e2e tests are used to ensure that all web-based implementations of `The Example App` share the same functionality. You may use this repository as a reference for implementing end-to-end tests with [cypress](https://www.cypress.io/). It is not necessary to use this repository to get `The Example App` running on your machine.

## What is Contentful?

[Contentful](https://www.contentful.com) provides a content infrastructure for digital teams to power content in websites, apps, and devices. Unlike a CMS, Contentful was built to integrate with the modern software stack. It offers a central hub for structured content, powerful management and delivery APIs, and a customizable web app that enable developers and content creators to ship digital products faster.

## Setup

### Circle-CI configuration file

These instructions are for Circle CI 1.0 config files. If you are using 2.0 config files, see here: https://github.com/contentful/the-example-app.csharp/blob/master/.circleci/config.yml#L24-L31

#### 1. Add the node runtime to your CI run:

```
machine:
  node:
    version: "8"
```

#### 2. Download and install the tests:

```
dependencies:
  pre:
    - git clone https://github.com/contentful/the-example-app-e2e-tests.git ./test/e2e
    - cd ./test/e2e && npm install
```

Adjust the git clone destination directory to match your needs.

#### 3. Make sure the test results are uploaded as build artifacts:

This will help a lot later on in case the tests fail one day.

```
test:
  post:
    - tar -czf $CIRCLE_ARTIFACTS/cypress-result_`date +%Y-%m-%d_%H-%M-%S`.tar.gz ./cypress
```

### Cypress configuration file

Create a `cypress.json` in your root directory, containing the following config:

```
{
  "baseUrl": "http://localhost:3007",
  "fixturesFolder": false,
  "integrationFolder": "./test/e2e/specs",
  "supportFile": false
}
```

Adjust the `baseUrl` to match your web servers url & port. You might also need to adjust the `integrationFolder` depending on where you clone the repository into.

### The actual test script

#### 1. Write a script, that does the following:

* Open a web server with your app
* Execute the cypress binary with the correct parameters (see below)
* Close the web server when the tests completed. In case the binary exited with an error code, also exit your script with an error code to fail the CI run.

A proper call of the binary would be the following:

(Assuming the repo is cloned into ./test/e2e)

```sh
./test/e2e/node_modules/.bin/cypress run --env LANGUAGE=<your_language_code>,CONTENTFUL_SPACE_ID=<space_id>,CONTENTFUL_DELIVERY_TOKEN=<delivery_token>,CONTENTFUL_PREVIEW_TOKEN=<preview_token>,CONTENTFUL_QA_SPACE_ID=<qa_space_space_id>,CONTENTFUL_QA_DELIVERY_TOKEN=<qa_space_delivery_token>,CONTENTFUL_QA_PREVIEW_TOKEN=<qa_space_preview_token>
```

Valid language codes are:
* dotnet
* ruby
* python
* nodejs
* php
* swift
* android
* java

You may pass `--headed` when the test is **not** running on CI, this will open the web browser so you can watch it testing your app.

**Important note**: Cypress seems to be pretty flaky with command line arguments parsing. Avoid extra spaces and unnecessary other stuff. An indicator that you did something wrong with the parameters would be, if the settings test fail which checks if the space id is actually displayed in the space id field.

#### 2. Add this script to your tests

Either with your internal language features which automatically get invoked by Circle CI or by adding that script to the `test: > override:` section. (https://circleci.com/docs/1.0/configuration/#test)

Done :tada:
