const express = require("express");
const snacks = express.Router();

const { getSnacks, createSnack, getOneSnack } = require("../queries/snacks");

const {
  formatter,
  defaultImage,
  appendHealthyValue,
} = require("../validations/validations");

snacks.get("/", async (req, res) => {
  const snacksObj = await getSnacks();
  if (snacksObj) {
    res.json({ success: true, payload: snacksObj });
  } else {
    res.status(404).json("ERROR!!");
  }
});

//POST
snacks.post(
  "/",
  formatter,
  defaultImage,
  appendHealthyValue,
  async (req, res) => {
    const newSnack = await createSnack(req.body);
    res.status(200).json({ success: true, payload: newSnack[0] });
  }
);

//GET Individual
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getOneSnack(id);
  if (snack[0]) {
    res.status(200).json({ success: true, payload: snack[0] });
  } else {
    res.status(404).json({ success: false, payload: `not found` });
  }
});

//DElETE

module.exports = snacks;
