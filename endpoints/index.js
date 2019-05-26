const search = require('./search');

module.exports = {
  createEndpoints: app => {
    app.get('/search', search.getSearch)
  }
};
