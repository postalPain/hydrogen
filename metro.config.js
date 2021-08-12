/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')
const extraNodeModules = {
  "store": path.resolve(__dirname,  "src/store"),
  "components": path.resolve(__dirname,  "src/components"),
  "screens": path.resolve(__dirname,  "src/screens"),
  "navigation": path.resolve(__dirname,  "src/navigation"),
  "i18n": path.resolve(__dirname,  "src/i18n"),
  "services": path.resolve(__dirname,  "src/services"),
  "config": path.resolve(__dirname,  "src/config"),
  "utilities": path.resolve(__dirname,  "src/utilities"),
  "styles": path.resolve(__dirname+"/src/styles"),
  "assets": path.resolve(__dirname,  "src/assets"),
  "icons": path.resolve(__dirname,  "src/components/Icons"),
  "theme": path.resolve(__dirname,  "src/styles/theme"),
  "types": path.resolve(__dirname,  "src/types"),
};

module.exports = {
  resolver: {
    extraNodeModules
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
