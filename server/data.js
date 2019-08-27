const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const portfolio1Id = mongoose.Types.ObjectId();
const portfolio2Id = mongoose.Types.ObjectId();
const portfolio3Id = mongoose.Types.ObjectId();
const portfolio4Id = mongoose.Types.ObjectId();
const portfolio5Id = mongoose.Types.ObjectId();
const portfolio6Id = mongoose.Types.ObjectId();

const thread1Id = mongoose.Types.ObjectId();
const thread2Id = mongoose.Types.ObjectId();
const thread3Id = mongoose.Types.ObjectId();
const thread4Id = mongoose.Types.ObjectId();
const thread5Id = mongoose.Types.ObjectId();

const post1Id = mongoose.Types.ObjectId();
const post2Id = mongoose.Types.ObjectId();
const post3Id = mongoose.Types.ObjectId();
const post4Id = mongoose.Types.ObjectId();
const post5Id = mongoose.Types.ObjectId();
const post6Id = mongoose.Types.ObjectId();
const post7Id = mongoose.Types.ObjectId();
const post8Id = mongoose.Types.ObjectId();
const post9Id = mongoose.Types.ObjectId();
const post10Id = mongoose.Types.ObjectId();
const post11Id = mongoose.Types.ObjectId();
const post12Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();
const category3Id = mongoose.Types.ObjectId();
const category4Id = mongoose.Types.ObjectId();
const category5Id = mongoose.Types.ObjectId();
const category6Id = mongoose.Types.ObjectId();

module.exports = {
  "portfolios": [
     {
      "_id": portfolio1Id,
      // "location": "Bratislava, SK",
      // "processedLocation": "bratislavask",
      "title": "Night in the City",
      "image": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2452&q=80",
      "description": "Some description of this event. I dont know what to talk about",
      "shortInfo": "Just some short info, I don't kow just be yourself.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(2, 'days').toISOString(),
      // "timeFrom": "14:00",
      // "timeTo": "18:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user2Id],
      "portfolioCreator": user1Id
    },
    {
      "_id": portfolio2Id,
      // "location": "New York, US",
      // "processedLocation": "newyorkus",
      "title": "Batman Screening",
      "image": "https://images.unsplash.com/photo-1526906004573-b4a4fcd642fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "description": "Lets watch new batman together",
      "shortInfo": "Just write here some short info.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      // "timeFrom": "08:00",
      // "timeTo": "10:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category2Id,
      "joinedPeople": [user3Id],
      "portfolioCreator": user2Id
    },
    {
      "_id": portfolio3Id,
      // "location": "Lisbon, PT",
      // "processedLocation": "lisbonpt",
      "title": "Cycling in Almada",
      "image": "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
      "description": "Lets go outside!",
      "shortInfo": "Just some short info",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      // "timeFrom": "08:00",
      // "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user1Id, user3Id],
      "portfolioCreator": user2Id
    },
    {
      "_id": portfolio4Id,
      // "location": "Los Angeles, US",
      // "processedLocation": "losangelesus",
      "title": "New Aquaman",
      "image": "https://images.unsplash.com/photo-1512136146408-dab5f2ba8ebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
      "description": "Lets watch new aquaman together",
      "shortInfo": "Just some short info",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      // "timeFrom": "08:00",
      // "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user1Id, user3Id],
      "portfolioCreator": user2Id
    },
    {
      "_id": portfolio5Id,
      // "location": "Berlin, GE",
      // "processedLocation": "berlinge",
      "title": "Burger Festival",
      "image": "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1671&q=80",
      "description": "Lets go eat some burgers!",
      "shortInfo": "Just some short info.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      // "timeFrom": "08:00",
      // "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category6Id,
      "joinedPeople": [user1Id, user3Id],
      "portfolioCreator": user2Id
    },
    {
      "_id": portfolio6Id,
      // "location": "London, UK",
      // "processedLocation": "londonuk",
      "title": "London Marathon",
      "image": "https://images.unsplash.com/photo-1513276193780-64b881470da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      "description": "Prepare for marathon run",
      "shortInfo": "Just some short info.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(7, 'days').toISOString(),
      // "timeFrom": "08:00",
      // "timeTo": "10:00",
      "joinedPeopleCount": 2,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user1Id, user3Id],
      "portfolioCreator": user2Id
    }
  ],
  "users": [
    {
      "_id": user1Id,
      "avatar": "https://b.kisscc0.com/20180718/urw/kisscc0-ninja-computer-icons-samurai-youtube-avatar-ninja-5b4ed903c2dd20.4931332915318940197982.jpg",
      "email": "filip@gmail.com",
      "name": "Filip Jerga",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Rhonyn99",
      "password": "testtest",
      likedPortfolios: [portfolio3Id, portfolio4Id, portfolio5Id, portfolio6Id]
    },
    {
      "_id": user2Id,
      "avatar": "https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png",
      "email": "peter@gmail.com",
      "name": "Peter Green",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Petergreen",
      "password": "testtest1",
      likedPortfolios: [portfolio1Id]
    },
    {
      "_id": user3Id,
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU",
      "email": "kevin@gmail.com",
      "name": "Kevin Rock",
      "info": "I have a famous name",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Kevin21",
      "password": "testtest2",
      likedPortfolios: [portfolio2Id, portfolio3Id, portfolio4Id, portfolio5Id, portfolio6Id]
    }
  ],
  "threads": [
    {
      "_id": thread1Id,
      "title": "Should I take some food?",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "portfolio": portfolio1Id,
      "user": user1Id,
      "posts": [post1Id, post2Id]
    },
    {
      "_id": thread2Id,
      "title": "I dont know what to think about this.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "portfolio": portfolio2Id,
      "user": user2Id,
      "posts": [post3Id, post4Id]
    },
    {
      "_id": thread3Id,
      "title": "Here should be something about thread 3",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "portfolio": portfolio2Id,
      "user": user2Id,
      "posts": [post5Id, post8Id, post9Id]
    },
    {
      "_id": thread4Id,
      "title": "Some Very nice Thread!",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "portfolio": portfolio3Id,
      "user": user3Id,
      "posts": [post6Id, post7Id]
    },
    {
      "_id": thread5Id,
      "title": "Today is very nice weather let's go out!",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "portfolio": portfolio6Id,
      "user": user2Id,
      "posts": [post10Id, post11Id, post12Id]
    }
  ],
  "posts": [
    {
      "_id": post1Id,
      "text": "I will be late",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread1Id,
      "user": user1Id
    },
    {
      "_id": post2Id,
      "text": "I like turtles",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread1Id,
      "user": user1Id
    },
    {
      "_id": post3Id,
      "text": "I will be late",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread2Id,
      "user": user2Id,
    },
    {
      "_id": post4Id,
      "text": "I like turtles",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread2Id,
      "user": user2Id,
    },
    {
      "_id": post5Id,
      "text": "I like writing about nothing",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread3Id,
      "user": user2Id,
    },
    {
      "_id": post6Id,
      "text": "Very nice portfolio, isn't it ?",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread4Id,
      "user": user2Id,
    },
    {
      "_id": post7Id,
      "text": "Yea it is.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread4Id,
      "user": user1Id,
    },
    {
      "_id": post8Id,
      "text": "I am not sure what to write.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread3Id,
      "user": user1Id,
    },
    {
      "_id": post9Id,
      "text": "hmm i don't know.",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread5Id,
      "user": user2Id,
    },
    {
      "_id": post10Id,
      "text": "Let's go running!",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread5Id,
      "user": user2Id,
    },
    {
      "_id": post11Id,
      "text": "Really Today?",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread5Id,
      "user": user2Id,
    },
    {
      "_id": post12Id,
      "text": "Yea for sure!",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "thread": thread5Id,
      "user": user3Id,
    }
  ],
  "categories": [
    {
      "_id": category1Id,
      "name": "React JS",
      "image": "https://images.unsplash.com/photo-1508355991726-ebd81e4802f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
    },{
      "_id": category2Id,
      "name": "Vue JS",
      "image": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "image2": "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "image3": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      "_id": category3Id,
      "name": "React Native",
      "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
    },
    {
      "_id": category4Id,
      "name": "Flutter",
      "image": "https://images.unsplash.com/photo-1509670811615-bb8b07cb3caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
    },
    {
      "_id": category5Id,
      "name": "Vue Native",
      "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "Python",
      "image": "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
      "_id": category6Id,
      "name": "Java",
      "image": "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80"
    },
    {
      "_id": mongoose.Types.ObjectId(),
      "name": "Blockchain",
      "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    }
  ]
};
