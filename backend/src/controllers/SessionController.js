const User = require('../models/User');


// index, show, store, update, destroy


module.exports = {
    index(req, res){
        const user = User.find();

        return res.json(user);
    },

   async store(req, res){
        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create(req.body);
        }
        return res.json(user);
    }

}