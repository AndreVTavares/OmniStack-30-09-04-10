


// index, show, store, update, destroy

module.exports = {
    index(req, res){
        return res.send('Hello World!')
    },

   store(req, res){
       return res.json({'message' : 'hello world from store'})
    }

}