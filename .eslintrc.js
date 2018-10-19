module.exports = {
    'extends': 'standard',
    'plugins': [
      'standard',
      'promise',
      'react',
      'jest'
    ],
    'env': {
      'node': true,
      'jest/globals': true,
      'mocha': true
    },
    'globals': {
      'Cypress': true,
      'cy': true,
      'expect': true
    },
    'rules': {
      "capitalized-comments": [
        "error",
        "always"
      ],
      "spaced-comment": ["error", "always"],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    }
}
