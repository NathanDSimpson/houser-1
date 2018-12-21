module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_all_houses()
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    },
    addNewHouse: (req, res) => {
        const db = req.app.get('db')
        let { name, address, city, state, zip, img, mortgage, rent } = req.body
        db.add_new_house({ name, address, city, state, zip })
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                console.log(err.message)
                res.sendStatus(500)
            })
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house({id})
            .then(response => {
                res.status(200).send(response)
            }) 
    }
}