---
title: "Thunks, Sagas and HOCs"
date: "2020-06-26"
snippetImageName: "62620snippetAndFull"
fullImageName: "62620snippetAndFull"
fullImageAlt: "Function"
tags: ["React", "Redux", "redux-thunk", "redux-saga"]
subtitle: "Oh My"
snippetText: "Definitely came across some new information today, which is exciting.  The majority of the day was done in refactoring, really -- moving state out of component state and into redux when necessary, applying some HOCs (I've still never written one of my own from scratch, that's on the todo list)."
---

<br>
<br>
Definitely came across some new information today, which is exciting.  The majority of the day was done in refactoring, really -- moving state out of component state and into redux when necessary, applying some HOCs (I've still never written one of my own from scratch, that's on the todo list).
<br>
<br>
Another new concept to me was the Container model, which I definitely like.  If the goal is to make things as "dumb" as possible, and lifting state and HOCs only so far as they needs to go, this model definitely makes sense to me.  I also anticipate it will help with debugging.
<br>
<br>

####Redux-Saga
<br>
<br>
Excited to be working with Redux-Saga for the first time.  I've never even heard of generator functions before (though, apparently, I've used them before in prettier wrappers).  After an introduction, the course I'm taking is having us go back and refactor all thunk actions to make use of sagas instead.
<br>
<br>
I know I'll have to spend some time with this before it sinks in.  I'm getting the beginner syntax, I think, but the underlying logic is a little dense, to say the least.
<br>
<br>
I do like a few things about it -- one, it's giving me more practice in a Promise based system.  Two, overall, I need to get asynchronous code down pat.  I'm okay, but I'd like to have it come naturally to me -- when and what exactly is async, how should I be leveraging that, where am I handling all this and so on.
<br>
<br> 

####What I Learned
<br>
<br>
Lifecycle methods...man, one other thing I never knew (or forgot that I knew) until today was that the first render call fires (and the subsequent children component renders) PRIOR to componentDidMount().  
<br>
<br>
That was definitely my main issue with the rendering problem of my game app.  I had loading setStates that worked fine, my data was coming in right, etc etc... only, it just wasn't properly being handled.  The trial and error method yielded me success because I finally just brough the child component back into the parent.
<br>
<br>
Definitely thrilled to learn some new best practices for these cases.  Irrespective of the jumble that I know Saga + Thunk + all things asynchronous, having this be clear to me definitely makes me feel more confident about using live data in future projects.
<br>
<br>
On that note -- I do have an idea for a trivia game, using an open DB of trivia questions.  I figure it'd be a decent chance to first refactor some boilerplate to use firestore, and then maybe apply some basic saga/redux architecture to get in the habit.  I'm not sure if that's the way I'll go, given that it's so similar to my last project, but its on my mind.
<br>
<br>
Unfortunately, nothing but rejections from my applications still.  Not even calls for interviews.  I'm not sure if my timing just sucks, or if my portfolio isn't impressive enough.  I mean, I know it's not dazzling.  But I do think I could absolutely work as a junior part of a team, with my knowledge as it is now.  All I need is for someone to let me prove it.