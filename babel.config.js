module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {},
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.es', '.es6', '.mjs']
      },
    ],
    ["module:react-native-dotenv"],
  ],
};
