const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            // "@primary-color": "#00FFFFFF",
            "@border-color-base": "#fff",
            "@link-color": "#1DA57A",
            "@border-radius-base": "3px",
            // "@btn-primary-color": "#fff",
            // "@btn-primary-bg": "#0CF574",
            // "@btn-default-color": "rgba(117, 117, 116)",
            "@btn-default-color": "rgb(68, 142, 248)",
            "@btn-default-bg": "#fff",
            "@btn-default-border": "rgb(68, 142, 248)",
            // "@btn-default-border": "#8AC926",
            // "@input-border-color":  "#fff",
          },
          javascriptEnabled: true
        }
      }
    }
  ]
};