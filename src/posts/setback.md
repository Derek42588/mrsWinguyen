---
title: "Setback"
date: "2020-06-20"
snippetImageName: "62020snippetAndFull"
fullImageName: "62020snippetAndFull"
fullImageAlt: "Stumped"
tags: ['React', 'Firebase', 'Game Project', 'Redux']
subtitle: "Temporarily Stumped"
snippetText: "Well, a minor setback.  The first half of my day was spent finishing up styling on the game app (very difficult to do in a testing environment, given all the variable data).  The second half was trying to work on deployment, which gave me major issues."

---
<br>
<br>
Well, a minor setback.  The first half of my day was spent finishing up styling on the game app (very difficult to do in a testing environment, given all the variable data).  The second half was trying to work on deployment, which gave me major issues.
<br>
<br>
The problem is, the error message isn't very verbose.  I believe it's giving me some errors within a callback, but I can't figure out what from.
<br>
<br>
Most of my googling lead to suggestions to switch my listeners from .on() (continuous) to .once() (once).  The problem is, of course, is that I need to continually update the data from the listener to the game state.
<br>
<br>

####Thoughts on Styling
<br>
<br>
One new problem I hadn't encountered before was styling my app, which contains variable data, on a single page -- and by that, I mean 100vh and no further.  I made the decision I didn't want any scrolling, because I wanted the game to be on just one page, without nasty scrolling as the component updated, changed state, etc.  It boils down to essentially 50% chatbox/lobby and 50% of game state.  
<br>
<br>
That presented some challenges, and it still needs polishing, but I think I landed on something workable for the moment.
<br>
<br>
It does make me want to (again) bone up on flexbox, because I think it'd be very useful in this scenario.  I think I should maybe consider something that has tons of variable elements for my next project, to practice the concept.  
<br>
<br>

####Debugging Production
<br>
<br>
So, the problem is figuring out how to debug the production version of my app, which of course is its own nightmare.
<br>
<br>
I made some progress, but not much.  The listener does work when I change the render to not display any of the necessary data (seen by inspecting the element).  I think I need to try to brainstorm other ways of inserting breakpoints, which is challenging in production, or otherwise try some major refactoring, which I'd like to keep as a last resort.
<br>
<br>
I do feel a little disappointed, but I think I just need to step back, take a breather, and try and come at it with fresh eyes.  I'd like to learn how to avoid this pitfall next time, but I'm unsure what I could have done differently in development.  Hopefully, once I figure out what the issue is, that will answer that question.
<br>
<br>

