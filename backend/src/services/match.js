const axios = require('axios');

const getMatchIds = async (options) => {
    //to build url create loop
    var url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${options.puuid}/ids?`
    Object.entries(options.options).forEach(([key, value], index) =>{
        if(index != 0)
        {
            url+="&"
        }
        url += `${key}=${value}`
        
    })
    var response = await axios.get(url)
    console.log(response.data)
    return response.data
}
const getMatch = async (matchID) => {
    var url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${process.env.RIOT_KEY}`
    var response = await axios.get(url)
    console.log(response.data)
    return response.data
}
const getMatchTimeline = async (matchId) => {
    var url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}/timeline?api_key=${process.env.RIOT_KEY}`
    var response = await axios.get(url)
    console.log(response.data)
    return response.data
}


module.exports = {
    getMatchIds, getMatch, getMatchTimeline
}