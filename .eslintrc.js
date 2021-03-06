module.exports = {
   root: true,
   extends: [
      '@react-native-community',
      'airbnb',
      'prettier',
      'prettier/react-native',
   ],

   plugins: [
      'react',
      'react-native',
      'jsx-a11y',
      'import',
      'react-hooks',
      'prettier',
   ],
   rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
         'error',
         { extensions: ['.js', '.jsx'] },
      ],
      'import/prefer-default-export': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/jsx-one-expression-per-line': 'off',
      'global-require': 'off',
      'react-native/no-raw-text': 'off',
      'no-param-reassign': 'off',
      'no-underscore-dangle': 'off',
      camelcase: 'off',
      'no-console': ['error', { allow: ['tron'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-props-no-spreading': ['off'],
   },
   settings: {
      'import/resolver': {
         'babel-plugin-root-import': {
            rootPathSuffix: 'src',
         },
      },
   },
};
