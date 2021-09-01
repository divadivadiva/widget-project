const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/widget/main-es2015.js",
    "./dist/widget/polyfills-es2015.js",
    "./dist/widget/scripts.js",
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/elements.js");
})();
