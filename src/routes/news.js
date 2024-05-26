const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news').post(async (req, res, next) => {
        try {
            const data = req.body
            return res.status(201).json(await News.addNews(data));
        } catch (err) {
            return next(err);
        }
    });
}