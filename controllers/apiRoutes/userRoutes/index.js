const router = require("express").Router();

router.post("/", async (req, res) => {
try {
    console.log(req.body);
    res.json({message: "success"});
} catch (error) {
    res.status(500).json(error);
}
});
module.exports = router;
