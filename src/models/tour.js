const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.name = ? limit ? offset ?';
    const parameters = [ params.name, parseInt(params.pageSize), parseInt(params.pageNumber) * parseInt(params.pageSize) ];
    return await mysql.query(statement, parameters);
}

const getSportId = async tourId => {
    const statement = 'select sportId from tours where tours.id = ?;';
    const parameters = [tourId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    getSportId: getSportId
}

