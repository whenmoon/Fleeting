const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            "@primary-color": "#27b281",
            "@link-color": "#1DA57A",
            "@border-radius-base": "5px",
          },
          javascriptEnabled: true
        }
      }
    }
  ]
};