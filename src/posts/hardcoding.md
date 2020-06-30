---
title: "Pseudocode"
date: "2020-06-14"
snippetImageName: "61420snippetAndFull"
fullImageName: "61420snippetAndFull"
fullImageAlt: "Random Code"
tags: ['React', 'Game Project']
subtitle: "Laying a Foundation"
snippetText: "Unfortunately, I did have to spend a lot of time on work around the house today.  Otherwise, though, I worked on the game project I mentioned in yesterday's post.  I hit some stumbling blocks, but I feel pretty good about the progress I made."

---
####Skeleton Code
<br>
<br>
Unfortunately, I did have to spend a lot of time on work around the house today.  Otherwise, though, I worked on the game project I mentioned in <a href = "/posts/new-project/">yesterday's post</a>.  I hit some stumbling blocks, but I feel pretty good about the progress I made.
<br>
<br>
I definitely feel like I learned some good practices for myself, and also honed a bit of my workflow.   
<br>
<br>

####The Work Itself
<br>
<br>
I focused on the game logic only today, not worrying about the database or store logic.  The main, current goals: get the game working with some default values.
<br>
<br>
Define X amount of players.  Give an array of "paper slips" that players will submit.  Define the logic of when players can and cannot do certain actions.  Define how to get certain pieces of data, like randomizing which player's turn it is, picking a "slip" out of the "hat", and then removing that slip from the state.
<br>
<br>
Ensure that a player does not pick a slip that they themselves wrote.  Allow players to submit slips.  Allow players to "guess".  Check a guess, and move on to the next round when the player guesses right.  Display incorrect guesses.  
<br>
<br>
These parts are almost finished, and I feel good about what I was able to get done.
<br>
<br>

####What I Learned
<br>
<br>
I noticed something while writing this skeleton code -- how I was wasting time.  I was fiddling with some conditional rendering on something that didn't matter at all.  Then I caught myself -- why bother?  This won't be the end product, and this conditional rendering won't be used then either.  
<br>
<br>
Why bother writing something like that, or worrying about the styling, when it's not necessary at this point?  It's a pretty obvious concept, but a bit of a revelation to me.  If you get bogged down in little details that don't matter, you're just making more work for yourself.
<br>
<br>
I think in the bigger projects I've made before, I was so focused on just completing them, that I didn't pay attention to <em>how</em> I was writing code -- and the thing is, that's as important as anything else.
<br>
<br>
Ensuring that I'm focusing on the right things, not worrying about unimportant details until it's time for them to be implemented, writing the scaffolding before working on the rest -- these are all critical for writing good code quickly.
<br>
<br>
I might not have accomplished <em>as much</em> as I wanted to today, but I definitely feel good about where I'm at.