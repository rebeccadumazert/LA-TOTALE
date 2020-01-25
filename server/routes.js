const picturesRouter = require('./routes/picturesRouter');

const routes = app => {
  app.use('/api/v1/pictures', picturesRouter);
};

module.exports = routes;
