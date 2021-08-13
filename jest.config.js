module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  setupFiles: ['<rootDir>/setupTests.js'],
  transformIgnorePatterns: ['node_modules/(?!(react-native|redux-persist-sensitive-storage|react-native-sensitive-info)/)']
};
