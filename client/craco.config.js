const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@assets": resolvePath("./src/assets"),
      "@values": resolvePath("./src/values"),
      "@pages": resolvePath("./src/pages"),
      "@layout": resolvePath("./src/Layout"),
      "@hooks": resolvePath("./src/hooks"),
      "@redux": resolvePath("./src/redux"),
    },
  },
};
