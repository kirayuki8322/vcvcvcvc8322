const fs = require('fs');
const path = require('path');

// 現在のディレクトリの名前を取得
const directory = path.basename(process.cwd());

// package.json の内容
const packageJsonContent = {
  name: directory,
  version: "1.0.0",
  main: "index.js",
  scripts: {
    dev: "parcel ./src/index.html",
    test: "echo \"Error: no test specified\" && exit 1"
  },
  author: "",
  license: "ISC",
  dependencies: {
    "@skyway-sdk/room": "^1.9.2"
  },
  devDependencies: {
    "parcel": "^2.12.0"
  },
  description: ""
};

// package.json を書き込む
fs.writeFileSync(path.join(process.cwd(), 'package.json'), JSON.stringify(packageJsonContent, null, 2));

console.log('package.json が生成されました');
