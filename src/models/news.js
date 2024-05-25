const mysql = require('../lib/mysql');

const addNews = async (title, description, tourId, sportId, matchId) => {
    const statement = "insert into news (title, description, tourId, sportId, matchId) values (?, ?, ?, ?, ?);"
    const parameters = [title, description, tourId, sportId, matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async tourId => {
    const statement = "select title, description from news where tourId = ?;"
    const parameters = [tourId];

    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async sportId => {
    const statement = "select title, description from news where sportId = ?;"
    const parameters = [sportId];

    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async matchId => {
    const statement = "select title, description from news where matchId = ?;"
    const parameters = [matchId];

    return await mysql.query(statement, parameters);
}
module.exports = {
    addNews: addNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsBySportId: getNewsBySportId,
    getNewsByTourId: getNewsByTourId
}