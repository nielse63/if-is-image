
module.exports = {
  env: {
    mocha: true,
  },
  globals: {
    expect: true,
  },
  rules: {
    'no-unused-expressions': 'off',
    'import/no-unresolved': ['error', { ignore: ['lib/'] }],
  },
};
