module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components/*': './src/components/*',
          '@api/*': './src/api/*',
          '@navigations/*': './src/navigations/*',
          '@screens/*': './src/screens/*',
          '@store/*': './src/store/*',
          '@types/*': './src/types/*',
          '@utils/*': './src/utils/*',
          '@constants/*': './src/constants/*',
        },
      },
    ],
  ],
}
