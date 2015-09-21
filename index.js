'use strict';

module.exports = {
  'parser': 'babel-eslint',
  'ecmaFeatures': {
    'jsx': true
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'rules': {
    'brace-style': [2],
    'camelcase': [2],
    'comma-dangle': [2],
    'comma-spacing': [2],
    'comma-style': [2],
    'consistent-return': [2],
    'curly': [2, 'multi-line'],
    'eqeqeq': [2],
    'func-style': [2, 'declaration'],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'key-spacing': [2],
    'linebreak-style': [2],
    'new-cap': [2],
    'new-parens': [2],
    'no-cond-assign': [2],
    'no-delete-var': [2],
    'no-dupe-args': [2],
    'no-dupe-keys': [2],
    'no-duplicate-case': [2],
    'no-eval': [2],
    'no-ex-assign': [2],
    'no-extend-native': [2],
    'no-extra-bind': [2],
    'no-extra-boolean-cast': [2],
    'no-extra-semi': [2],
    'no-fallthrough': [2],
    'no-func-assign': [2],
    'no-inner-declarations': [2],
    'no-invalid-regexp': [2],
    'no-irregular-whitespace': [2],
    'no-lone-blocks': [2],
    'no-lonely-if': [2],
    'no-mixed-spaces-and-tabs': [2],
    'no-multi-spaces': [2],
    'no-multiple-empty-lines': [2],
    'no-native-reassign': [2],
    'no-negated-in-lhs': [2],
    'no-nested-ternary': [2],
    'no-new': [2],
    'no-obj-calls': [2],
    'no-octal': [2],
    'no-redeclare': [2],
    'no-regex-spaces': [2],
    'no-return-assign': [2],
    'no-sequences': [2],
    'no-shadow-restricted-names': [2],
    'no-spaced-func': [2],
    'no-sparse-arrays': [2],
    'no-undef': [2],
    'no-undef-init': [2],
    'no-unneeded-ternary': [2],
    'no-unreachable': [2],
    'no-unused-expressions': [2],
    'no-unused-vars': [2],
    'no-var': [2],
    'object-shorthand': [2],
    'operator-linebreak': [2],
    'quotes': [2, 'single'],
    'radix': [2],
    'semi': [2],
    'semi-spacing': [2],
    'space-after-keywords': [2],
    'space-before-blocks': [2],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2],
    'space-return-throw-case': [2],
    'space-unary-ops': [2],
    'spaced-comment': [2],
    'strict': [2, 'global'],
    'use-isnan': [2],
    'valid-typeof': [2],
    'yoda': [2, 'never']
  }
};
