const Tour = require('../models/tour');
const MAX_PAGE_SIZE = 100
const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name, page_size, page_number } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }

    if (page_size === undefined || page_size == null) {
        throw new Error('Missing required parameter: page_size');
    }

    if (page_number === undefined || page_number == null ) {
        throw new Error('Missing required parameter: page_number');
    }

    if(parseInt(page_size) <= 0) {
        throw new Error('page_size must be positive');
    }

    if(parseInt(page_number) < 0) {
        throw new Error('page_number must be positive');
    }

    if (parseInt(page_size) > MAX_PAGE_SIZE) {
        throw new Error('page_size must be less than 100');
    }


    return await Tour.getMatchesByTourName(params);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}