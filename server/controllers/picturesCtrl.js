const picturesStore = require('../store/picturesStore');

const getPictures = async (req, res) => {
  const pictures = await picturesStore.getPictures();

  res.json(pictures);
};

module.exports = { getPictures };
