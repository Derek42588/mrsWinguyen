---
title: "Chugging Along"
date: "2020-06-18"
snippetImageName: "61820snippetAndFull"
fullImageName: "61820snippetAndFull"
fullImageAlt: "Game Props"
tags: ['React','Game Project', 'Redux', 'Firebase']
subtitle: "Whole Lotta Game Logic"
snippetText: "I absolutely love the feeling of when a project is finally clicking.  I spent all day with my new game project, and got a ton done.  By far, the biggest step forward was having the listeners (and how to update the db itself properly) finally click for me."

---
<br>
<br>
I absolutely love the feeling of when a project is finally clicking.  I spent all day with my new game project, and got a ton done.  By far, the biggest step forward was having the listeners (and how to update the db itself properly) finally click for me.    
<br>
<br>
Pretty much all my work was done in game logic, and verifying live updates.  It's a bit of an arduous process testing the way I currently am.  It makes me wonder if there are better testing practices, but the only real kind of testing I'm familiar with is jest.  I definitely really enjoyed using jest, and want to apply it more, but I'm unsure how well it can be applied to an integrated situation like this (live game rooms, multiplayer, needing live updates, etc).  
<br>
<br>

####Things I Need To Improve On
<br>
<br>
My main Game Instance file is definitely getting ... unwieldy.  I should go back and refactor, but it's difficult when you're writing it out for the first time.  I wonder if that's a typical practice -- just get the code down, and then go back and refactor later.  Might be why sometimes people <em>don't</em> do that -- when somethings done, we have a tendency to just let it be.
<br>
<br>
Something else I noticed is my difficulty in conditionally rendering data.  I've got it working fine, but there has to be a better way of doing things.  I mostly just apply the typical ternary expression conditional rendering of JSX, but I run into problems when I'm working with data thats a nested part of something that is loaded asynchronously.  
<br>
<br>
Unfortunately, it's all live database data, so I'm unsure of a better method than my current application, where I have a listener on my specific game instance document and then go from there. 
<br>
<br>

####Next Steps
<br>
<br>
I'm feeling confident that I can get a minimal version of the game going, along with styling, by tomorrow night or Saturday at the latest.  I have a few game logic features to finish, and then I want to go back and take the first pass of styling it all.
<br>
<br>
There are a few features I've thought of that I think I better save for v2.  One -- a live timer, integrated with the game state.  The use in my game would be a "round" lasting, say, 30 seconds, and then if player X doesn't guess within that time frame, they're docked a guess, point, etc.  
<br>
<br>
I've never used anything like this before, but some googling recommended having it as a timestamp kept in my DB, where the TimeToGo is noted, and then the live rendering is done on the client side.  That seems doable, my only problem is trying to figure out how to update the database when time hits 0.  Especially since this would be a common timer across multiple clients.
<br>
<br>
My very sketchy first ideas would be doing the above, then trying to look into Firebase Transactions, which I believe will limit an update call to only the first person who does it.  Definitely need to figure out more about it, though.
<br>
<br>

####Data Structure
<br>
<br>
Something I know I'm weak on is structuring the objects that I put into my databases.  I doubt I do it efficiently, and I'm always going back and changing after realizing I need to change something to make the idea work after the fact.
<br>
<br>
How do you get better at this, though?  I'm having a hard time thinking of anything other than practice.  Or, possibly, modeling after a structure that is already in use, and that you know is similar to what you want to do.  Unfortunately, this is the problem of coding alone.
<br>
<br>
I definitely want to start cloning more projects on GitHub.  If you can think of it, there's a public GitHub project for it.  Some of my issues with trying that in the past are that I'm not comfortable outside of the languages and libraries I use extensively.  So if, say, someone achieved what I want to do but uses python and some sort of back-end I've never heard of, I have a hard time figuring out how to apply that to what I'm trying to do.
<br>
<br>


####To Do
<br>
<br>
I keep getting hung while doing various gatsby scripts -- build, sometimes develop.  I'm sure this is an easy fix and probably has to do with package versions.