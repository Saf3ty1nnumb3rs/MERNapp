![Anime!!!!](http://www.planwallpaper.com/static/images/1444014275-106dee95104209bb9436d6df2b6d5145.jpeg)

# iCON - WDI 14 Project 3
#### This project will be my first project utilizing a MERN stack deployed with Heroku! iCON is an app that will provide a platform for users to check out some of their favorite Cons around the country and add themselves to the attendee list of the conventions that they are attending! On each convention is a shout out page for people to share information, talk about what they are excited about, or just make some noise in anticipation of going to their favorite convention. Check out the users going to each con and see what your fellow con goers are all about.Making the rounds at DragonCon this year? Sign up on iCON and see who all is going to be marching down the streets as a Stormtrooper with you!!!!!

### App on Heroku

https://agile-fortress-58020.herokuapp.com/

### Data Models

![ERDs](https://github.com/Saf3ty1nnumb3rs/MERNapp/blob/master/ProjectMaterials/erd.JPG)


### Wireframes

![Wireframe](https://github.com/Saf3ty1nnumb3rs/MERNapp/blob/master/ProjectMaterials/wireframe.JPG)

### Trello Workflow

https://trello.com/b/JJ23EuGJ/wdi-project-3

### gitHub

https://github.com/Saf3ty1nnumb3rs/MERNapp

## Desired additions:

* ### An increase in the complexity of relationships and tackling accessing objects through objectID's will aid in a more rich user experience.

* ### I will be adding if statements to help populate lack of profile pictures on user profile additions. Thanks for the tip Marco!

* ### Need to create dropdowns for certain form fields to make some items more uniform - i.e. Country of origin for users. I would also like to increase the database size to include more whisky producing countries and whiskies.

* ### I would like to utilize user authentification in order to create an actual login to the site and restrict manipulation of other user's data.

* ### Styles need to be more fluid and need a great deal of work.


## Technologies Used for the Development of This App

* MongoDB
* ExpressJS
* ReactJS
* NodeJS
* Heroku
* Full MERN stack

### Favorite Bug - When editing Country object, the list of whiskies would remain on return to page as expected. While editing User object, the list of whiskies associated would be removed on return to the page which was not the desired result.
### All processes were identical on view pages. Checking the database on Mongo revealed that the whisky objects had been deleted. This led to observing the routes - this revealed that the `favoriteWhisky` was being called when patching the User when no value was being entered for `favoriteWhisky`. This effectively eliminated all objects in the array. Simply removing the req for favorites meant the original data would persist unless being manipulated through it's proper route.

### Overall, this process was fairly smooth. I prepared for this project by setting up a database and project folder for practice before the start date. That put my mind in a place where I was familiar with the task and ready to go deep into organizing and defining my requirements and workflow.

## Takeaways

### I found that spending more time on user stories, data objects, and wireframes set me up for success. Where previously I would do minimal planning and dive in, this go around I spent more time setting up and polishing. Very little time was required coding the project due to a much improved planning process. I truly recognize the value of user stories and thorough planning and design - it's changed the entire experience and given me a great appreciation for the ENTIRE process.

### Routing is making sense. Although the interactions on this app are simple, it has opened the door for limitless possibilites as we add on more techniques and tools to add multiple nuances and layers to object relationships. I've learned quite a bit, but I am much more aware of how much there is to learn.

##### Hamburger button (hamburgers.css) is the work of Jon Suh and used with permission. The MIT License (MIT) Copyright (c) 2016 Jonathan Suh <hello@jonsuh.com> (jonsuh.com) 
##### All additional styling and associated javascript is the work of the author (Josh Sample) 