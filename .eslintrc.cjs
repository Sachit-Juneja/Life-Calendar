/* eslint-env node */

module.exports = {
    root: true, 
    env: { 
      browser: true, 
      es2020: true 
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      project: './tsconfig.json', // Directly reference the tsconfig.json
    },
    plugins: [
      'react-refresh'
    ],
    rules: {
      // React Refresh Plugin: Only warn when non-component exports are found, with constant exports allowed
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  
      // Turn off TypeScript-specific rules that might be too strict
      '@typescript-eslint/no-non-null-assertion': 'off',
  
      // Example of additional rules for better code quality
      '@typescript-eslint/explicit-function-return-type': 'off', // Avoid enforcing function return types
      '@typescript-eslint/no-explicit-any': 'warn', // Warn when 'any' type is used
    }
  }
  