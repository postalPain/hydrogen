module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {},
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.es', '.es6', '.mjs']
      },
    ],
  ],
};
