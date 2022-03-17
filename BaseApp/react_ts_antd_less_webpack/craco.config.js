const CracoAntDesignPlugin = require("craco-antd");
const CracoAlias = require("craco-alias");

module.exports = {
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#1DA57A",
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
};
