const axios = require('axios');

const iconUrl = "http://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/"
const naUrl = "https://na1.api.riotgames.com/"
var fs = require('fs').promises;


const getProfileIcon = async (profileIconId) => {
    //assets/dragontail-13.17.1/13.17.1/img/profileicon/0.png
    //`${profileIconId}.png`
    var buffer = await fs.readFile(`assets/dragontail-13.17.1/13.17.1/img/profileicon/${profileIconId}.png`)
    var encodedImage = buffer.toString('base64')
    return encodedImage

}
const getSummonerRanks = async (encryptedSummonerId) => {
    //https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/u9dFAQm0wpgG6CMNekmM2oKk40ukFbdj83SA5PVXIFIBgrs?api_key=RGAPI-67ecb78e-49db-4123-9a15-ea77790a4c94
    var url = naUrl + `lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${process.env.RIOT_KEY}`
    var response = await axios.get(url)
    // console.log(response.data)
    return response.data

}
const getSummonerByName = async (summonerName) => {
    //https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Ieesan?api_key=RGAPI-c8e2b341-ee72-410e-9df8-42d151b0e7e9
    //TODO - Add region and dynamic url  

    try{
    var url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + process.env.RIOT_KEY
    var response = await axios.get(url)
    console.log(response.data)
    return response.data
    }
    catch{
        return {error: "Summoner not found"}
    }

}
const getSummonerProfile = async (summonerName) => {
    // {
    //     id: 'FgbhSnxMTZUzzgvOM7ICVLswPmWUOCFiNxZHyIMdfOhMbTgYp3NKR7Uc0Q',
    //     accountId: 'e_LJD2WpCjzpV9CP0mygDQtxguYOgDubT97B8swjKaUFGPGmnFYG5AWB',
    //     puuid: 'ZncGYHpQbDUsbL8zOASvo6OjYB3OidC955A72IE1sP8JX81thuPQ1rhW1Y1-gxqMPTq19TXTvEVfig',
    //     name: 'Undefined',
    //     profileIconId: 5812,
    //     revisionDate: 1694412549000,
    //     summonerLevel: 640
    //   }
    try{
        var summonerObj = await getSummonerByName(summonerName)
        var profileIcon = await getProfileIcon(summonerObj.profileIconId)
        summonerObj.profileIcon = profileIcon
        return summonerObj
    }
    catch{
        return {error: "Summoner not found"}
    }


    

}
module.exports = {
    getProfileIcon, getSummonerRanks, getSummonerByName, getSummonerProfile
}