const router = require('express').Router();
const { Posts, Users } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.findAll({
      include: [{ model: Users, attributes: ['username'] }],
      order: [['createdAt', 'DESC']],
    });

    res.render('home', { posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
