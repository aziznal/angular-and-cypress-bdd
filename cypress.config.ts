import cucumber from 'cypress-cucumber-preprocessor';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // preprocess typescript
      const options = {
        typescript: require.resolve('typescript'),
      };

      on('file:preprocessor', cucumber(options));
    },
    specPattern: '**/*.feature',
  },
});
