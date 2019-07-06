module.exports = {
  hasher: require("./Functions/hash"),
  validator: require("./Functions/validator"),
  author: "MrAugu#9016",
  version: require("./package.json").version,
  hash: require("./Functions/hash").hash,
  validate: require("./Functions/validator").validate
};
