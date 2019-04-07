module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          rootPathPrefix: "~",
          rootPathSuffix: "src"
        }
      ]
    ],
    env: {
      // For React Native
      production: {
        plugins: [
          [
            "babel-plugin-root-import",
            {
              rootPathPrefix: "~",
              rootPathSuffix: "src"
            }
          ]
        ]
      }
    }
  };
};
// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };
