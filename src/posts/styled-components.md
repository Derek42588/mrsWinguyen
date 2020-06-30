---
title: "Styled Components, Etc"
date: "2020-06-25"
snippetImageName: "62520snippetAndFull"
fullImageName: "62520snippetAndFull"
fullImageAlt: "Function"
tags: ["React", "Redux", "styled-components"]
subtitle: "Continued Study"
snippetText: "Had my introduction to styled-components today.  It's interesting, and I do think I like certain functionality.  Functionally applying styling, leveraging props, that's all great.  It's also solid practice to avoid the global namespace of CSS.  The downside currently (to me) is that it can't use Sass variables without refactoring.  That isn't too big of a hurdle -- but worst of all, the mixins I use for responsive design won't be included, either.
"
---

<br>
<br>
Had my introduction to styled-components today.  It's interesting, and I do think I like certain functionality.  Functionally applying styling, leveraging props, that's all great.  It's also solid practice to avoid the global namespace of CSS.  The downside currently (to me) is that it can't use Sass variables without refactoring.  That isn't too big of a hurdle -- but worst of all, the mixins I use for responsive design won't be included, either.
<br>
<br>
I'm sure I could refactor.  I probably should make a boilerplate to use it and get it set up with my current global resets that I like.  I think for me, currently working on my own, it doesn't offer much payoff in return for the work of refactoring.  My own practice of a naming convention that makes sense to me and then using Sass + BEM, I'm not going to run across namespace problems.    
<br>
<br>
But I definitely see the benefits when working as part of a team, and how this would really be the way to go.  As of right now, I want to play around with it more, but a refactor of my usual Sass setup and spinnin up a boilerplate using styled-components instead might be my next mini-project.

####Firestore
<br>
<br>
Continued on with the full React course mentioned in the past few posts.  Enjoying it immensely and feel like I'm learning a lot.  It's not so much new material, but more that it's a fairly deep dive into the topics -- and, most likely, I have the added benefit of a lot more experience and understanding.
<br>
<br>
Another mini-project I might come back to soon (I've mentioned it before) is refactoring my firebase boilerplate to use the firestore rather than the realtime database.  I don't think I know enough about firestore to know <em>why</em> (or I guess, even <em>if</em>) it's superior, but it is newer!
<br>
<br>
I don't know why, but setting the initial listener that I put in my componentDidMount to a function that I then call in my componentWillUnmount didn't click for me until I did more setup in the codealong project today.  The basic structure was used in the root App component for listening to the user, using the firestore provided onAuthStateChange.  Then, though, when setting up a listener for a different collection, deeper down in the component tree, we used the same syntax.  It made me reference the documentation and lo and behold, it was right there in firebase's own example psuedocode.
<br>
<br> 

####What I Learned
<br>
<br>
I learned to think more about my data structure.  Firebase, for example, recommends against using arrays.  Since I personally am more fluent and confident with my grasp of array methods, I tend to default to that.  But, I'm growing more confident in my Object methods, and I definitely see the benefit in the map structure, especially when dealing with database objects.  I will try and be more mindful of this when I'm going forward.
<br>
<br>
It's funny to say, but all the talk about styled-components today made me think more about my components.  I LOVE react -- I've said that so many times, I know, but I still tend to default to too-big components.  I think its because I need to do so much trial and error, and then when it comes to finishing up, instead of refactoring -- why bother?
<br>
<br>
Then, the <em>main</em> benefit of making components small is that they'll be reusable.  So, in personal projects where they're either small or reusability isn't much of a factor, the benefits don't seem all that worthwhile.  However, I didn't really reflect on one of the other, smaller benefits until today -- limiting your data and thus, your potential issues.  I think about the problem I had in moving my game project to production, which came from -- something -- in transferring data down a component chain.  But, I am almost sure I wasn't instantiating my data correctly, and also, I used the fairly bad practice of basically switching my returns on a piece of database data (a game mode, essentially).  This definitely broke my data flow.
<br>
<br>
By forcing myself to be as compartmentalized as possible, I know I'll clean up some of these future problems.