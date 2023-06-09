import {
    saveToy as saveToyService, 
    getToys as getToysService
} from '../services/toys.service.js'

const saveToy = async (req, res) => {
    const toy = req.body;
    await saveToyService(toy);
    res.send(toy);
};

const getToys = async (req, res) => {
    const toy = await getToysService();
    res.send(toy);
};

export {
    saveToy,
    getToys
}