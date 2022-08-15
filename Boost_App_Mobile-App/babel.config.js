module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '~components': './src/components',
          '~screens': './src/screens',
          '~redux': './src/redux',
          '~utils': './src/utils',
          '~hooks': './src/hooks',
          '~assets': './src/assets',
          '~dummyData': './src/dummyData',
          '~context': './src/context',
          '~navigation': './src/navigation',
          '~api': './src/api',
          '~constants': './src/constants',
        },
      },
    ],
  ],
};
