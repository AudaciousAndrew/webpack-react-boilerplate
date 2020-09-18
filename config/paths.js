const fs = require("fs");
const path = require("path");

const appPath = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appPath, relativePath);
}

module.exports = {
  appBuild: resolveApp("build"),
  appPublic: resolveApp("public"),
  appHTML: resolveApp("public/index.html"),
  appNodeModules: resolveApp("node_modules"),
  appEntryJS: resolveApp("src/index.js"),
  alias: {
    images: resolveApp("src/assets/images"),
  },
};
