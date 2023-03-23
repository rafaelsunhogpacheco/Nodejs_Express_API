const getAll = (req,res) => {
    return res.status(200).json({message:'controller esta tudo certo'})

}

module.exports = {
    getAll
}