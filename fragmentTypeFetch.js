// https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher

const fetch = require('node-fetch')
const fs = require('fs')
const SPACE_ID = 'qz0n5cdakyl9'
const ACCESS_TOKEN = '580d5944194846b690dd89b630a1cb98a0eef6a19b860ef71efc37ee8076ddb8'
const localeCode = 'en-US'
const host = `https://cdn.contentful.com/spaces/${SPACE_ID}/graphql/alpha?locale=${localeCode}`

fetch(`${host}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ACCESS_TOKEN}`},
  body: JSON.stringify({
    variables: {},
    operationName: '',
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
  })
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    )
    result.data.__schema.types = filteredData
    fs.writeFile('./src/fragmentTypes.json', JSON.stringify(result.data), err => {
      if (err) {
        console.error('Error writing fragmentTypes file', err)
      } else {
        console.log('Fragment types successfully extracted!')
      }
    })
  })
