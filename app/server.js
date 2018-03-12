require('dotenv').config(),
app = require('./index')
app.listen(process.env.PORT, (error) => {
    if(error){
console.log('Unable to Zappy listen to port' + process.env.PORT + ' !');
    }
    console.log('Zappy app listening on port ' + process.env.PORT + '!')
});
