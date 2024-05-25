const mysql = require('../lib/mysql');

const getAllMatches = async () => {
    const statement = 'select * from matches;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getTourId = async matchId => {
    const statment = 'select tourId from matches where matches.id = ?';
    const parameters = [matchId];
    return await mysql.query(statment, parameters);
}

module.exports = {
    getAllMatches: getAllMatches,
    getTourId: getTourId
}