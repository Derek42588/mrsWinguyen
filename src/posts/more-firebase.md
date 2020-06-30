---
title: "More Firebase"
date: "2020-06-16"
snippetImageName: "61620snippetAndFull"
fullImageName: "61620snippetAndFull"
fullImageAlt: "Progress"
tags: ['React', 'Firebase', 'Game Project']
subtitle: "Eurekas"
snippetText: "I wanted more expertise with Firebase, so I decided to buy Robin Wieruch's book, The Road to React with Firebase.  I've mentioned in past posts how much I enjoyed his 11 part series on Authentication with Firebase, so I decided it would be good to support him and try out one of his full books.  Also, I'm looking to do a deeper dive into GraphQL next, and he has a book on that, so this will be a good trial, I think."

---
####Robin Wieruch - The Road to React with Firebase
<br>
<br>
I wanted more expertise with Firebase, so I decided to buy <a href ="https://courses.robinwieruch.de/">Robin Wieruch's book</a>, The Road to React with Firebase.  I've mentioned in past posts how much I enjoyed his 11 part series on Authentication with Firebase, so I decided it would be good to support him and try out one of his full books.  Also, I'm looking to do a deeper dive into GraphQL next, and he has a book on that, so this will be a good trial, I think.  
<br>
<br>
In the interest of forcing myself to take better notes, I think I'll try out sharing them here in my blog post.  Lately, I've been more serious about the notes that I take and I keep course-separated ones in my Evernote account.  There are a few things I absolutely can improve on, though, and hopefully this will be a good exercise in it.
<br>
<br>
First, I need to comment my code more.  Second, I need to write READMEs.  I think it's hard to force yourself to when you don't expect anyone to use your code, but it's a good practice and probably one that's important to get in the habit of.  Lastly, I tend to speed throguh tutorials and courses.  I want to get to the good stuff, fast, and I get frustrated with myself on the pace of my progress.  The side-effect should be no surprise, I don't fully absorb the material.  So maybe by documenting my read through this book, I can avoid that.
<br>
<br>
So far, the book is very similar to the walkthrough, so this was probably a bad example to start with for the above ideas.  However, I'm happy to support the author, given how great that free tutorial was.
<br>
<br>

####Listeners!!!
<br>
<br>
After reading a few bits from Wieruch's books, and going back to the Firebase <a href ="https://firebase.google.com/docs/database/admin/retrieve-data">documentation</a>, I think I figured out a problem I had been having.  Or at least, figured out the start of the problem I was having...
<br>
<br>
I was having issues figuring out how to have my game rooms live list the players who were connected.  I decided to make this aspect of the game code be the first I focused on with regards to the realtime database data, because it represented the type of implementation I would need to reuse often (i.e., live updating of data in a specific game instance).  
<br>
<br>
My first attempt at implementation placed a listener on my specific room document.  Then, it extracted the snapshot value (Promise returned from the firebase .on() function) and placed it in the Redux state.  So far, so good.  But I ran into stumbling blocks when I tried to apply the logic for checking if a user is already in a specific game room instance's player list inside the callback function of the listener.  Obviously, this is not the place for it, but I just wasn't thinking about the logic of the listener correctly. 
<br>
<br>
Something I completely forgot to do yesterday but tested today was adding data to the room instance's player list inside the firebase dashboard itself (it worked).  Probably would have saved myself some time and gotten to this realization a bit faster if I had thought to do that yesterday.
<br>
<br>
Definitely think I'm more on the right track now.  Next goal is to finish the implementation of this, and the.n try and brainstorm some problems.  One of the first ones that comes to mind: how to track when a player closes a browser window.  But!  I think I found a way to handle that already: you can add an event listener on the window, and then put the function of removing a user from the game instance player list there.  Awesome.
<br>
<br>

####What I Learned
<br>
<br>
Man, yesterday I felt like an idiot and that I wasn't really getting much work done at all.  Now, just by happening on the right piece of documentation, I feel recharged and way better about this apps prospects.  Just keep coding, always.
<br>
<br>

####Code for Boston
<br>
<br>
After not finding much that appealed to me in the way of networking opportunities on Meetup.com, I joined a really great one today.  It was for  <a href ="https://www.codeforboston.org/">Code for Boston</a>, which is <a href ="https://www.codeforamerica.org/">Code for America's</a> local brigade.
<br>
<br>
It seems to be volunteer coding projects, pairing volunteers with an idea for something within the public/non-profit sector.  If you're at all interested, I can't speak to any of the other brigades besides Boston's, but their orientation Zoom meeting was great, and I definitely want to volunteer and hopefully work on a project.
<br>
<br>

####Random Thoughts
<br>
<br>
Got rejected by a few more places today.  It's okay !  Just got to keep applying and keep going.  I will not stop until I get a job in this industry.  
<br>
<br>