module.exports = {
    'extends': 'standard',
    'plugins': [
      'standard',
      'promise',
      'react'
    ],
    'env': {
      'node': true
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