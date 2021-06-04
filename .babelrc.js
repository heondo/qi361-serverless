module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@api': './src/api',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@store/': './src/store',
          '@types': './src/types',
          '@utils': './src/utils',
          '@constants': './src/constants',
        },
      },
    ],
  ],
}
