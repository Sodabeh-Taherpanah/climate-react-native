module.exports = {
  project: {
    ios: {},
    android: {},
  },
  // assets: ['./src/assets/fonts'],

  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
    'react-native-geolocation-service': {
      platforms: {
        android: null, // Disable autolinking for Android and link manually
      },
    },
  },
};
