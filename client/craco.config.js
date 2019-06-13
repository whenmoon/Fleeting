const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            "@border-color-base": "#fff",
            "@link-color": "#1DA57A",
            "@border-radius-base": "3px",
            "@btn-default-color": "rgb(68, 142, 248)",
            "@btn-default-bg": "#fff",
            "@btn-default-border": "rgb(68, 142, 248)",
          },
          javascriptEnabled: true
        }
      }
    }
  ]
};