const confirmHealth = require("../confirmHealth.js");

const defaultImgUrl =
  "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";

const appendHealthyValue = (req, res, next) => {
  req.body = { ...req.body, is_healthy: confirmHealth(req.body) };
  next();
};

const defaultImage = (req, res, next) => {
  req.body.image_url ? null : (req.body.image_url = defaultImgUrl);
  next();
};

const formatter = (req, res, next) => {
  if (req.body.name) {
    req.body.name = req.body.name
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        word.length > 2
          ? (word = word[0].toUpperCase() + word.substr(1))
          : null;
        return word;
      })
      .join(" ");
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

module.exports = { formatter, defaultImage, appendHealthyValue };
