const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            // "@normal-color": "#d9d9d9",
            "@primary-color": "#00FFFFFF",
            "@link-color": "#1DA57A",
            "@border-radius-base": "3px",
            "@btn-primary-color": "#fff",
"@btn-primary-bg": "#0CF574",
"@btn-default-color": "#2F97C1",
"@btn-default-bg": "rgba(201, 201, 189, 0.311)",
"@btn-default-border": "#2F97C1",
          },
          javascriptEnabled: true
        }
      }
    }
  ]
};