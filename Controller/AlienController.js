const Alien = require('../models/Alien')

const getAliens = async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (err) {
        res.send('Error' + err)
    }
}

const postAliens = async (req, res) => {

    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const alienData = await alien.save()
        res.json(alienData)
    } catch (err) {
        res.send(err)
    }

}

const deleteAlien = async (req, res) => {
    const id = req.params.id
    try {
        await Alien.deleteOne({ _id: id })
        res.send("File Deleted Successfully")
    } catch (err) {
        console.log(err);
    }
}

const updateAlien = async (req, res) => {
    const id = req.params.id
    const { tech, name, sub } = req.body
    try {
        const alien = await Alien.findById(id)
        alien.name = name
        alien.tech = tech
        alien.sub = sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAliens,
    postAliens,
    deleteAlien,
    updateAlien
}