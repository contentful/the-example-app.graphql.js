const { resolve } = require('path')
const execa = require('execa')
const argv = require('yargs').argv

const {
  CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_PREVIEW_TOKEN,
  CONTENTFUL_QA_SPACE_ID, CONTENTFUL_QA_DELIVERY_TOKEN, CONTENTFUL_QA_PREVIEW_TOKEN,
  CONTENTFUL_QA_EMPTY_STATES_SPACE_ID, CONTENTFUL_QA_EMPTY_STATES_DELIVERY_TOKEN, CONTENTFUL_QA_EMPTY_STATES_PREVIEW_TOKEN,
  PORT
} = process.env

const TEST_PORT = parseInt(PORT)

const cypressBin = resolve(__dirname, 'e2e', 'node_modules', '.bin', 'cypress')
const env = [
  `LANGUAGE=nodejs`,
  `CONTENTFUL_SPACE_ID=${CONTENTFUL_SPACE_ID}`,
  `CONTENTFUL_DELIVERY_TOKEN=${CONTENTFUL_DELIVERY_TOKEN}`,
  `CONTENTFUL_PREVIEW_TOKEN=${CONTENTFUL_PREVIEW_TOKEN}`,
  `CONTENTFUL_QA_SPACE_ID=${CONTENTFUL_QA_SPACE_ID}`,
  `CONTENTFUL_QA_DELIVERY_TOKEN=${CONTENTFUL_QA_DELIVERY_TOKEN}`,
  `CONTENTFUL_QA_PREVIEW_TOKEN=${CONTENTFUL_QA_PREVIEW_TOKEN}`,
  `CONTENTFUL_QA_EMPTY_STATES_SPACE_ID=${CONTENTFUL_QA_EMPTY_STATES_SPACE_ID}`,
  `CONTENTFUL_QA_EMPTY_STATES_DELIVERY_TOKEN=${CONTENTFUL_QA_EMPTY_STATES_DELIVERY_TOKEN}`,
  `CONTENTFUL_QA_EMPTY_STATES_PREVIEW_TOKEN=${CONTENTFUL_QA_EMPTY_STATES_PREVIEW_TOKEN}`
]
let command = [
  'run',
  !process.env.CI ? '--headed' : null
]
if (argv.dev) {
  command = [
    'open'
  ]
}
execa()
execa(cypressBin, [
  ...command,
  '--env',
  env.join(',')
].filter(Boolean))
.then((result) => {
  console.log('✔ e2e test succeeded:')
  console.log(result.stdout)
  process.exit(0)
})
.catch((error) => {
  console.log(`✖ e2e test failed with status code ${error.code}:`)
  console.error(error.stdout)
  console.error(error.stderr)
  process.exit(1)
})
