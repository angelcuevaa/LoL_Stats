const axios = require('axios');


const getLiveGame = async (summonerId) => {
    var url = `https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${process.env.RIOT_KEY}`
    var response = await axios.get(url)
    console.log(response.data)
    return response.data

}

module.exports = {
    getLiveGame
}