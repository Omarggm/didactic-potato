const router = require("express").Router();
const { User } = require("../../../models");

router.post("/", async (req, res) => {
try {
    console.log(req.body);
    const userData = await User.create(req.body);
    res.json({userData, message: "User created!"});
} catch (error) {
    res.status(500).json(error);
}
});
module.exports = router;
