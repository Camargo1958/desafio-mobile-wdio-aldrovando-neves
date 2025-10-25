import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        // WebDriverIO globals
        $: 'readonly',
        $$: 'readonly',
        browser: 'readonly',
        driver: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      // Add custom rules here
    },
  },
];