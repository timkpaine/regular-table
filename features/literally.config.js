const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json").toString());

module.exports = {
    files: ["features/*.md"],
    output: "dist/features",
    format: "html",
    retarget: [
        {rule: /\/node_modules\//gm, value: "https://cdn.jsdelivr.net/npm/"},
        {
            rule: /\.\/.+?\"/gm,
            value: `./index.js"`,
        },
        {
            rule: /\/dist\//gm,
            value: `https://cdn.jsdelivr.net/npm/regular-table@${pkg.version}/dist/`,
        },
    ],
};
