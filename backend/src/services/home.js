const axios = require('axios');

const getSummonerByName = async (summonerName) => {
    //https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Ieesan?api_key=RGAPI-c8e2b341-ee72-410e-9df8-42d151b0e7e9
    //TODO - Add region and dynamic url  
    var url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + process.env.RIOT_KEY
    var response = await axios.get(url)
    console.log(response.data)
    return response.data

}
module.exports = {
    getSummonerByName
}