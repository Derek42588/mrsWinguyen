---
title: "Context API and More"
date: "2020-06-29"
snippetImageName: "62920snippetAndFull"
fullImageName: "62920snippetAndFull"
fullImageAlt: "Moon Landing"
tags: ["React", "Context API", "GraphQL"]
subtitle: "Refactoring is Fun"
snippetText: "Today, I learned about Context API for the first time.  I had seen it in other code before, in both projects I've cloned and StackOverflow solutions to some problems I have googled in the past, but never had it gone over in a course I had done.  Nor had I stumbled across the documentation for it.  It's interesting, but I'm not sure anything about it makes me want to jump out and use it in my own projects."
---

<br>
<br>
Today, I learned about Context API.  I had seen it in other code before, in both projects I've cloned and StackOverflow solutions to some problems I have googled in the past, but never had it gone over in a course I had done.  Nor had I stumbled across the documentation for it.  It's interesting, but I'm not sure anything about it makes me want to jump out and use it in my own projects.
<br>
<br>
It is elegant and "simpler" - at least in the sense of reusability.  Refactoring to use it rather than redux wasn't all that challenging.  Of course, it lacks a few of the biggest benefits of redux.  You can't use thunk or sagas, or apply your middlewares for asynchronous actions on your state data.  You don't have access to the libraries of Redux which are myriad and tried and true.  Now, I certainly haven't explored Context API enough to say anything about the helper libraries it boasts, so that would take further experimentation.  
<br>
<br>
As of right now, I think I'd prefer keeping with Redux for my state management.  For one, asynchronous actions are my next "big" thing I want to master, and handling it through redux is the most logical (and documented) way currently available for me.  I am glad, though, that I am able to write context and have a project using it to reference in the future.
<br>
<br>

####GraphQL
<br>
<br>
My course has now entered a section on GraphQL and Apollo, and I am very excited to get back to it.  I haven't written anything using GraphQL since my big project in March, and am very glad to get to practice more of it.
<br>
<br>
The last time I used it, I was able to handle instant, cross-browser updates via WebSocket listeners.  At the time, though, I was pretty much just hacking away at documentation examples until I found one that would work in my personal project.  Now, I'm fairly confident that my base understanding has grown to the point that I would be using it more effectively, and with a better underlying understanding.
<br>
<br>
I would like to use it again in a new showcase project.  After this section of my current course, I might go on to complete it (there aren't very many sections left, and most of them are bonus sections), or I might go onto a different, GraphQL only course I haven't started yet.
<br>
<br>
I'm hoping for some inspiration.  I wish there were more hours in the day.  There's just so much I want to do.  I need to keep making projects, <em>and</em> keep learning, <em>and</em> keep applying to jobs, and, and, and...
<br>
<br>

####What I Learned
<br>
<br>
I was pretty proud that I quickly figured out a refactoring problem by using useEffect on a state property to handle updates.  Small victory, but just got to keep picking up these small pieces.
<br>
<br>