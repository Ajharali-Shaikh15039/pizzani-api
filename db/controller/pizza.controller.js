const db = require('../models');
const pizza = db.pizza;
//select * from people;
exports.findAll = (req, resp) => {
    pizza.findAll()
        .then((data) => { resp.json(data); })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving People data"
            })
        })

}
//select * from people where id=?
exports.findOne = (req, resp) => {
    const id=req.params.id;

    pizza.findByPk(id)
        .then(data=>{resp.send(data)})
        .catch((err) => {
            resp.status(500).send({
                message: err.message || ` Some error retriving Person data with id ${id}`
            })
        })
}