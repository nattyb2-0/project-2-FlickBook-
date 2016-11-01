The idea behind this application is a photosharing app for friends and families of those 
that are incarcerated.

The app is called flickbook and it basically allows users to search a database to find inmates 
that they wish to share photos and life moments with(for now the database is a random search api
,as i could not get a department of corrections database to query). Once a user has found
an inmate that they know, they can then create a story board for each individual inmate, on
which they can tag photos, artivles, thoughts, and whatever else that they want to share with the inmate(videos and audios not allowed).

As a non member user i should be able to visit the site and browse public books created by the community, as well as, be able to sign up to become a member.

As a member I should be able to browse the community boards, searc for inmates, create and save board. Browse my desktop and other place(ie wb, social media)to find and tag content i want to share. Be able to tag and save my boards. As well as be able to edit each poster, and like, comment and share to others as well


I am using node and express js for the backend, saving the user information into a mongo database. I am using a random image api that users can query for random pictures of simulated inmates.
For the design, i am using flex box technique of css to make the site responsive . I also plan to add media query for each device and link them to different style sheets

technologies to be used:
HTML
NODE JS
EXPRESS JS
CSS

code example:
`    
bookRoute.get('/',searchInmates, authenticate ,favorites.getFavorites, authenticate,  (req, res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],
    user: res.user ,
  });
});

bookRoute.post('/', searchInmates, favorites.getFavorites, authenticate,  (req, res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],
  });

});`

inpiration for the app:
having spent over 10yrs incarcerated in several New Jersey State Prisons for crimes commited at the age of of 18, the devloper (Natty B. Davis) witnessed first hand the difficulties family and loved ones were having trying to share their photos and life events with himself and other prisoners.

Seeing that the technology/solution existed, but were not being utilized for the benifits of those incarcerated or their family and friends, Mr.Davis embarked on a mission to create FLICKBOOK. His vision was that there should be no barriers to communications between the two groups, and that it should not cost anything to communicate and share with your loved ones.

Immediately upon release 15 months ago, Mr.Davis began self teaching himself how to code. Realizing that he needed an all or nothing approach to fully grasp the concepts of coding, he enrolled in General Assembly web development immersive bootcamp, where he is currently pursuing his dreams and working on the full implementations of this app


Blockers:
*could not get any inmate information from doc...ie name, photo and number
*could not get posts to render in the right place due to no relational database
*had a hard time understanding how the models relate to one another.
*time constaint...spent too much time trying to get features to work and not enough 
time on other aspects of the project

API used:
        https://randomuser.me/api/?results=20'

Going Forward:
I plan to continue to work on this project as this project is something i whole heartly relate to and believe in. I need to learn sql and relational database to be able to add the social media like functionalities. Hopfully I will be given permission to polish this app as a final project, adding more functionalities and depths to it

contributions:
relied on a variety of you tube videos, as well as, my classmates and teachers for guidance and help with this project.
