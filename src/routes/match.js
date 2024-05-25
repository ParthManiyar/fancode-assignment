const Match = require('../controllers/match');
const News = require('../controllers/news')

module.exports = function(app) {
    app.route('/matches').get(async (req, res, next) => {
        try {
            return res.json(await Match.getAllMatches());
        } catch (err) {
            return next(err);
        }
    });
    app.route('/matches/news').get(async (req, res, next) => {
        try {
            return res.json(await News.getNews(req.query));
        } catch (err) {
            return next(err);
        }
    });
    
}