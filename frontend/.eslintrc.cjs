module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off'
  }
}
