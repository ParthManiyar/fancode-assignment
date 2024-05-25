const Sport = require('../controllers/sport');
const News = require('../controllers/news')


module.exports = function(app) {
    app.route('/sport/tour/match').get(async (req, res, next) => {
        try {
            return res.json(await Sport.getAllSportsToursAndMatches());
        } catch (err) {
            return next(err);
        }
    });
    app.route('/sport/news').get(async (req, res, next) => {
        try {
            return res.json(await News.getNews(req.query));
        } catch (err) {
            return next(err);
        }
    });
}