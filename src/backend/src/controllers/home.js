var request = require('request');
var homeService = require("../services/home")
var summonerService = require("../services/summoner")
var matchService = require("../services/match")
var spectatorService = require("../services/spectator")
var championService = require("../services/champion")
const fs = require('fs').promises
const axios = require('axios');



const home = async (req, res) => {
    try{

    var summonerProfile = await summonerService.getSummonerByName(req.body.summonerName)
    // res.writeHead(200, {
    //     'Content-Type': 'image/png',
    //     'Content-Length': icon.length
    //   });
    // res.end(icon); 
    var summonerRanks = await summonerService.getSummonerRanks(summonerProfile.id)

    // var defaultMatchOptions = {
    //     puuid: summonerAccount.puuid,
    //     options :{
    //         start: 0,
    //         count: 20,
    //         api_key: process.env.RIOT_KEY
    //     }
    // } 
    // var summonerMatchIds = await matchService.getMatchIds(defaultMatchOptions)
    // var summonerMatch = await matchService.getMatch(summonerMatchIds[0])
    // var matchTimeline = await matchService.getMatchTimeline(summonerMatchIds[0])
    // var championImage = await championService.getChampionImage(36)

    //var liveMatch = await spectatorService.getLiveGame(summonerAccount.id)
    res.send({
        summonerProfile,
        summonerRanks,
        success: true
    })
}
catch{
    res.send({
        success: false,
        error: "error"
    })
}
}

module.exports = {
    home
}