const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/UserRegistrationData",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex : true
}).then(() => {
    console.log(`Conn Successful`);
}).catch((e) => {
    console.log('Not connected');
})
