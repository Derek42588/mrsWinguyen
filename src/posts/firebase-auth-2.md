---
title: "Firebase Auth (Part 2)"
date: "2020-06-12"
snippetImageName: "firebaseTwoSnippetAndFull"
fullImageName: "firebaseTwoSnippetAndFull"
fullImageAlt: "Firebase Auth Splash"
tags: ['firebase', 'react', 'authentication', 'redux']
subtitle: "A Nice Diversion"
snippetText: "As described in Part One, I've been working on some boilerplate for authentication with Firebase this week.  I had gotten something definitely useable after not much time at all, but I wanted to include a few more features that required a bit of a deeper dive into Firebase."

---
####More Boilerplate
<br>
<br>
Part One <a href = "/posts/firebase-auth-1/">here</a>
<br>
<br>
As described in Part One, I've been working on some boilerplate for authentication with Firebase this week.  I had gotten something definitely useable after not much time at all, but I wanted to include a few more features that required a bit of a deeper dive into Firebase.  
<br>
<br>
To recap: First, I wanted to refactor what I had written to use Redux.  Second, I wanted the ability to link social accounts so that someone who signs in and therefore is a user in our database is able to later sign in with a different social account and link their local DB user to those separate logins.  Lastly, I wanted to inject some basic layout as well, since I've been reusing a few of my own components on multiple projects (scrolling sticky header and a "shelf" sidebar for mobile views)

####Robin Wieruch - Firebase Tutorial
<br>
<br>
While working on the boilerplate I had already written a bit of skeleton for, I was googling a few concepts and going back and forth between that and the Firebase documentation.  One of the things I stumbled upon was Robin Wieruch's truly excellent <a href = "https://www.robinwieruch.de/react-firebase-redux-tutorial">ten part series</a> on the subject.  Wow -- truly can't speak higher of it.  From start to finish, it puts together every aspect of an authentication loop with React, Firebase and Redux.  
<br>
<br>
I had meant for this to be a short detour of coding, but I had a blast coding through this series.  I learned a lot about Firebase, used more HOCs than I think I have in any other project, and learned more than a few things that I'm going to use going forward in my future projects.
<br>
<br>
If I weren't trying to save money, I'd be buying every one of his books right now.  It was that good.  Browsing his website, I saw a few different React/Redux courses/books, and one on GraphQL as well.  I imagine the projects in those are just as excellent as this one.
<br>
<br>
The github for my boilerplate is <a href = "https://github.com/Derek42588/boilerplateFirebaseAuthReactRedux">here</a>, and a live version of the app is <a href = "https://crown-db-5fabc.firebaseapp.com/">here</a>
<br>
<br>

####What I Learned
<br>
<br>
First and foremost, I'm incredibly glad I revisted Firebase.  I haven't used it since some of my first apps, having spent the majority of time since using Mongo for my database needs.  It was a blast to use and learn from, google's documentation is (of course) pristine, and I am definitely going to apply a lot of what I wrote in this boilerplate to my next app.
<br>
<br>
The thing that sticks out the most is probably Firebase's baked in listeners.  The live app linked above even has a (very basic) "chat" function, fully live.  Comparing it to my solution for similar functionality in previous apps (a mess of websocket configs and GraphQL queries), this is definitely simpler.  
<br>
<br>
Next -- and I've probably had this thought before -- but <em>starting</em> my projects with Redux already wired in is definitely what I want to use going forward.  First, I think it's way simpler to start with Redux rather than trying to go back later and refactor tons of components.  Also, I think it's valuable to start with the idea of where does this data belong -- in your Redux store, or in local state?  
<br>
<br>

####To Do
<br>
<br>
I wanted to launch this repo and live site today, but there's a few pieces of maintenence I'll be going back to later.  I'd like to go back and write better styling + layout skeletons -- it's just quick and dirty at the moment.
<br>
<br>
From Wieruch's series, the use is all in Firebase's Realtime Database, rather than the newer Firestore.  I'd like to go back and refactor to use this instead.