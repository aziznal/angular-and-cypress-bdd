import cucumber from 'cypress-cucumber-preprocessor';
import browserify from '@cypress/browserify-preprocessor';
import cypress from 'cypress';

export default cypress.defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      };

      on('file:preprocessor', cucumber(options));
    },
    specPattern: '**/*.feature',
  },
});
