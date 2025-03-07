const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const webpack = require('@cypress/webpack-preprocessor');

module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config);

  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/loader',
              },
            ],
          },
        ],
      },
    },
  };

  on('file:preprocessor', webpack(options));

  return config;
};