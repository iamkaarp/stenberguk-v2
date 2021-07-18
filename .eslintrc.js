module.exports = {
  'env': {
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  'rules': {
    'no-console' : 'off',
    'indent': [
      'error',
      2,
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        'closeBracket': 0,
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'always',
      },
    ],
    'semi': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'no-trailing-spaces': [
      'error',
    ],
    'valid-jsdoc': [
      'error',
      {
        'requireReturnDescription': false,
        'requireParamDescription': false,
      },
    ],
    'eqeqeq': [
      'error',
    ],
    'curly': [
      'error',
    ],
    'no-param-reassign': [
      'error',
    ],
    'no-useless-concat': [
      'error',
    ],
    'yoda': [
      'error',
    ],
    'max-depth': [
      'warn',
    ],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'always',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always',
    }],
  },
};