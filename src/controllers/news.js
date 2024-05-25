const News = require('../models/news');
const Tour = require('../models/tour');
const Match = require('../models/match');


const addNews = async body => {

    let {title, description, matchId, tourId} = body;

    if (!title) {
        throw new Error('Missing required parameter: title');
    }

    if (!description) {
        throw new Error('Missing required parameter: description');
    }

    if (!matchId && !tourId) {
        throw new Error('Missing required parameter: matchId or tourId');
    }

    let sportId = null;
    
    if(matchId){
        tourId = await Match.getTourId(matchId);
        sportId = await Tour.getSportId(tourId);
        tourId = tourId[0]["tourId"];
        sportId = sportId[0]["sportId"];
    }
    else if(tourId){
        sportId  = await Tour.getSportId(tourId);
        sportId = sportId[0]["sportId"];
    }

    return await News.addNews(title, description, tourId, sportId, matchId);
}

const getNews = async params => {

    const {tourId, matchId, sportId} = params;
    
    if(tourId)
        return await News.getNewsByTourId(tourId);
    else if(matchId)
        return await News.getNewsByMatchId(matchId);
    else if(sportId)
        return await News.getNewsBySportId(sportId);
    else
        throw new Error("'Missing required parameter: tourId, sportId or matchId");
}
module.exports = {
    addNews: addNews,
    getNews: getNews
}