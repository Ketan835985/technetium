const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const {default : mongoose}=require("mongoose")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Ketan_technetium_functionUp:iDikLHzqHJQQP656@clusterketantechnetium.pexlgni.mongodb.net/KetanGupta835985-db?retryWrites=true&w=majority",{
    useNewUrlParser : true
})
.then( ()=> console.log("MongoDb is connected"))
.catch(err=> console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
