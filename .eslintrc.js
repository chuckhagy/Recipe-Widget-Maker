module.exports = {
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: true,
    mocha: true
  },
  rules: {
    'no-console': 'off'
    // 'no-debugger': 'off'
  }
};
