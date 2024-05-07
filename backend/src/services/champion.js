var fs = require('fs').promises;



const getChampionObj = async (id) => {
    //assets/dragontail-13.17.1/13.17.1/data/en_US/challenges.json
    var data = JSON.parse(await fs.readFile('assets/dragontail-13.17.1/13.17.1/data/en_US/champion.json', 'utf8'));
    var json = Object.values(data.data)

    return json.find(champion => champion.key == id)
}

const getChampionImage = async (id) => {
    //assets/dragontail-13.17.1/13.17.1/data/en_US/challenges.json
    var championObj = await getChampionObj(id)
    var imageName = championObj.image.full
    var buffer = await fs.readFile(`assets/dragontail-13.17.1/13.17.1/img/champion/${imageName}`)
    var encodedImage = buffer.toString('base64')

    return {image: encodedImage}
}

module.exports = {
    getChampionObj, getChampionImage
}