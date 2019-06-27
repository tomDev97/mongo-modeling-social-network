const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social-network', { useNewUrlParser: true })
    .then(console.log("Connected to MongoDB"))
    .catch(console.log)

