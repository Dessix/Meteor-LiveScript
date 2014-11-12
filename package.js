Package.describe({
  name: 'dessix:livescript-compiler',
  summary: "LiveScript, a CoffeeScript descendant with improvements and new features.",
  version: "0.1.3",
  git: "https://github.com/Dessix/Meteor-LiveScript.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileLiveScript",
  use: [],
  sources: [
    'plugin/compileLiveScript.js'
  ],
  npmDependencies: {
    "LiveScript": "1.3.1"
  }
});
