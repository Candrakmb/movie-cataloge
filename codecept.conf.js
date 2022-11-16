exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://127.0.0.1:9000',
      show: true,
      windowSize: '1200x900',
    },
  },
  include: {
    I: '.steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'movie-catalogue-next',
};
