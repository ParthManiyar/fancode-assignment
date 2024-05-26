const Tour = require('../models/tour');
const MAX_PAGE_SIZE = 100
const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name, pageSize, pageNumber } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }

    if (pageSize === undefined || pageSize == null) {
        throw new Error('Missing required parameter: page_size');
    }

    if (pageSize === undefined || pageNumber == null ) {
        throw new Error('Missing required parameter: page_number');
    }

    if(parseInt(pageSize) <= 0) {
        throw new Error('page_size must be positive');
    }

    if(parseInt(pageNumber) < 0) {
        throw new Error('page_number must be positive');
    }

    if (parseInt(pageSize) > MAX_PAGE_SIZE) {
        throw new Error('page_size must be less than 100');
    }


    return await Tour.getMatchesByTourName(params);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}