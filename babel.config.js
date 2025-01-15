module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel", "react-native-reanimated/plugin"],
    plugins: ['expo-router/babel'],
    plugins: ['@babel/plugin-transform-runtime']
  };
};

