---
title: "New Project"
date: "2020-06-13"
snippetImageName: "61320snippetAndFull"
fullImageName: "61320snippetAndFull"
fullImageAlt: "Planning"
tags: ['firebase', 'react', 'redux']
subtitle: "Struggles and Brainstorming"
snippetText: "Today I primarily worked on adding some more styling to the boilerplate I mentioned in yesterday's post.  Secondarily, I decided to do my next big showcase project, and will try to focus on that mainly from now on."

---
####Groundwork
<br>
<br>
Today I primarily worked on adding some more styling to the boilerplate I mentioned in <a href = "/posts/firebase-auth-2/">yesterday's post</a>.  Secondarily, I decided to do my next big showcase project, and will try to focus on that mainly from now on.
<br>
<br>
Basically, it will just be a live version of a simple party game.  My friends and I have been doing regular game nights via Zoom during the COVID outbreak, and have been having a blast, so that's my inspiration.  Back when we were younger, we would play what we called the Forehead Game all the time -- the game that I think is called Heads Up on mobile apps.
<br>
<br>
I didn't accomplish much on that end today.  I think two things are working against me -- I haven't fully grasped some of the ideas in firebase's methods yet, and I'm trying to start too big.  Hopefully, writing this blog will keep me on target and happy with small, incremental improvements.
<br>
<br>

####The Next Steps
<br>
<br>
A lot of what I did in between just staring at lines of code today was scribbling down in my notebook ideas on where to start.  Game logic, the data structures for what would be needed to be kept in firebase rather than in the app's Redux store, what new components I'll need to implement on top of my brand new boilerplate, and things along those lines.
<br>
<br>
Tomorrow, my goal (in between prepping my apartment for bedbug treatment, ugh), will be to finish one piece of the game logic.  I think, starting there and then expanding will give me the best idea of how to form it into a cohesive whole, and without having to rewrite more later on once I realize more of what the app needs.
<br>
<br>
One piece of game logic at a time, and then add on the database/firebase pieces as necessary.  
<br>
<br>

####What I Learned
<br>
<br>
It is a good opportunity to improve my own personal workflow when starting with projects.  Often, I get frustrated I'm not improving, or writing, or doing more, FASTER.  Perfecting the approach itself, I think, will be helpful for this and all future projects.
<br>
<br>
So lets list what I need to accomplish:
<br>
<br>
First and foremost, the game logic itself.  How I envision it functioning is that game's start by players entering a "game room" or instance, identified by a game ID number.  On a landing, a player could either create a new game -- generate a new "instance"/ID number (data I imagine would need to be in my database), or enter the ID number to connect to a game another player started.
<br>
<br>
On the game page itself, it will need to keep track of the players who are connected.  I'm a little fuzzy on this, but my first thought is to keep a collection of game room instances, update it on componentDidMount of a player entering a specific instance, and then having the game instance itself store the IDs of the users who are in it.
<br>
<br>
For simpler logic that needs writing, I'd like a game to be unable to start unless 3 players are connected.  There will be a button on the game page to indicate all players have entered (similar to JackBox games if anyone's played those).  Next, all players must submit five "slips of paper".  Once all have, the game begins.  I'll enforce that player's can't receive a slip of paper they themselves have entered (or maybe give the players themselves the option of if they want to enforce that via a boolean flag button)
<br>
<br>
Player's will enter guesses on a chat mechanic, and all incorrect guesses will be stored and displayed.  I assume I'll limit it to 20 guesses, or something like that.  I've thought about implementing a timed feature, where players must guess within X amounts of seconds or that "guess turn" has been forfeited, but I've never implemented a time function before.  I'll definitely have to look into those first.
<br>
<br>
I banged my head against the wall a bit today just writing random thoughts in my notebook, but I think I have a decent plan of attack ready.  Now, to just start coding it, one small piece at a time.