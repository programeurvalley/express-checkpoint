const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let dayNumber = d.getDay()
let day = weekday[d.getDay()];
let hour = d.getHours()

if((hour>= 9 && hour<=17) && ( dayNumber >= 1 && dayNumber <= 5)){
    var serviceUp = true;
}else{
    var serviceUp = false;
} 

    router.get('/',function(req,res){ 
        if(serviceUp == true){
            res.sendFile(path.join(__dirname + '/view/index.html'));
        }else{
            res.sendFile(path.join(__dirname + '/view/error.html'));
        }
    });

    router.get('/about.html',function(req,res){
        if(serviceUp == true){
            res.sendFile(path.join(__dirname + '/view/about.html'));
        }else{
            res.sendFile(path.join(__dirname + '/view/error.html'));
        }
    });

    router.get('/contact.html',function(req,res){
        if(serviceUp == true){
            res.sendFile(path.join(__dirname + '/view/contact.html'));
        }else{
            res.sendFile(path.join(__dirname + '/view/error.html'));
        }
    });

//add the router
app.use('/', router);
app.listen(process.env.port || 4000);
console.log(serviceUp)