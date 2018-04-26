require('dotenv').config();
const mongoose = require('mongoose');

const Con = require('../models/con')
const Shout = require('../models/shout')
const User = require('../models/user')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;

db.on("open", () => {
  console.log("Connected to mongoDB");
});

db.on('error', (err) => {
    console.log(err)
})

//Users ---------------------------------

const murph = new User ({
    name: 'Murph \'Meat\' Potts',
    img: 'https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/10262225_10203299008983399_8057057938438041305_n.jpg?oh=a3e8a20695536c3b5a5a64b51c653f9b&oe=5B091856',
    userSince: 2017,
    favCon: 'MeatCon',
    about: 'I\'m Meat! I mean Murph. Give me chickens and steak and stuff. No room for sides!'
})

const cam = new User ({
    name: 'Cameron',
    img: 'https://a3-images.myspacecdn.com/images03/30/23f28f8e26a94e5886b7e2ad11945b85/300x300.jpg',
    userSince: 2017,
    favCon: 'EA VillageCON',
    about: 'I\'m Cameron. I like EAV Con cause I can walk home from it.'
})
const sara = new User ({
    name: 'Sara',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Hl-yCukZ2fPRXrNMZfFeEM5-lrcX30D-1natdtWPTf4m0kzqMg',
    userSince: 2018,
    favCon: 'MomoCon',
    about: 'I love Cons. Like all of them. You\'ll be there? I\'ll be there too! OMG 😄'
})
const pikachu = new User ({
    name: 'Pikachu',
    img: 'https://ambrahealth.com/wp-content/uploads/2016/07/025Pikachu_XY_anime_3.png',
    userSince: 2018,
    favCon: 'Pika!!!\(Translation: DragonCon\)',
    about: 'Pika. PIK-AH-CHUUUUUUUUUUUUUUUUUUUUUUU!!!!! 🌩️'
})

//Shouts-------------------------------------------------

const shout1 = new Shout ({
    subject: 'Holla',
    msg: 'Mandalorian Raiders from the Outer Rim represent!!!!!',
    date: { type : Date, default: Date.now }
})
const shout2 = new Shout ({
    subject: 'Shout I WIll',
    msg: 'Get down do you?',
    date: { type : Date, default: Date.now }
})
const shout3 = new Shout ({
    subject: 'Missed CONnection',
    msg: 'Looking for the redhead dressed as LiLoo at DragonCon 2017, I was Darth Maul! Gimme a shout.',
    date: { type : Date, default: Date.now }
})
const shout4 = new Shout ({
    subject: 'Goodtimes',
    msg: 'For a good time call 555-543-1234',
    date: { type : Date, default: Date.now }
})
const shout5 = new Shout ({
    subject: 'Will there be snacks?',
    msg: 'Last time there weren\'t any snacks. Will there be snacks?',
    date: { type : Date, default: Date.now }
})
const shout6 = new Shout ({
    subject: 'Ideas',
    msg: 'Maybe I could go as a chair and everyone could sit on me. Furniture Con? Who\'s with me?',
    date: { type : Date, default: Date.now }
})
const shout7 = new Shout ({
    subject: 'Furry Con Rulez',
    msg: 'I\'ll be dressed as a wombat. Room 304 at the Hilton. Come partay!!!',
    date: { type : Date, default: Date.now }
})
const shout8 = new Shout ({
    subject: 'ATLiens',
    msg: 'Who\s down for a D-Con meetUp? Let\'s do this.',
    date: { type : Date, default: Date.now }
})

//CONS!!!!!!!!!!!!!!!!!

const dragon = new Con ({
    name: 'Dragon Con',
    theme: 'Cosplay, Comic, and Sci-Fi Convention',
    location: 'Atlanta, GA',
    date: 'March 14, 2018',
    img: 'http://cdn.atlantamagazine.com/wp-content/uploads/sites/12/2015/09/DragonCon.2015.Costumes_MattWalljasper_OneUseOnly_007.jpg',
    users:[sara, murph, cam],
    shouts:[shout3, shout8]
})
const momo = new Con ({
    name: 'MomoCon',
    theme: 'ANIME, GAMING, COMICS + ANIMATION',
    location: 'Atlanta, GA',
    date: 'May 24, 2018',
    img: 'https://19qvmv3zk6hd3q6e0f17ikwm-wpengine.netdna-ssl.com/wp-content/uploads/2013/12/momoconb-picture-1-1024x767.png',
    users:[sara],
    shouts:[shout1, shout2]
})
const furry = new Con ({
    name: 'Furry Weekend Atlanta',
    theme: 'Anthropomorphics',
    location: 'Atlanta, GA',
    date: 'April 5, 2018',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Furry_Weekend_Atlanta_fursuiters.jpg',
    users:[sara, pikachu],
    shouts:[shout7, shout2]
})
const meat = new Con ({
    name: 'MeatCon',
    theme: 'Meat',
    location: 'Murph\'s House',
    date: 'Every Day 2018',
    img: 'https://www.seriouseats.com/images/20111108-beef-texas-chili-con-carne-04.jpg',
    users:[murph, pikachu, sara],
    shouts:[shout4, shout5]
})
const tech = new Con ({
    name: 'Collision',
    theme: 'America\'s fastest growing tech conference',
    location: 'New Orleans, LA',
    date: 'April 30, 2018',
    img: 'https://collisionconf.com/wp-content/uploads/2016/04/collision-scholarship.jpg',
    users:[cam, murph, sara],
    shouts:[shout6]
})
//CONS!!!!!!!!!!!!!!!!!

User.remove().then(() => {
    return Shout.remove()
}).then(() => {
    return Con.remove()
}).then(() => {
    return Con.insertMany([dragon, momo, furry, meat, tech])
}).then(() => {
    console.log('Saved successfully')
    db.close()
}).catch((err) => {
        console.log(err)
        db.close()
    })
