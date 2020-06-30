---
title: "More Sagas"
date: "2020-06-27"
snippetImageName: "62720snippetAndFull"
fullImageName: "62720snippetAndFull"
fullImageAlt: "Function"
tags: ["React", "Redux", "redux-saga"]
subtitle: "A Work In Promise"
snippetText: "Much of my work done today was exploring more in redux-saga, and refactoring code to take advantage of that for all functionality.  I think I'm getting a somewhat better hang of it.  One thing I do wonder, is how to recreate listener code within the stream of a Saga.  In the course, we've basically rewritten it so that the listener is immediately unsubscribed after the initial call.  This is definitely something I want to revisit.
"
---

<br>
<br>
Much of my work done today was exploring more in redux-saga, and refactoring code to take advantage of that for all functionality.  I think I'm getting a somewhat better hang of it.  One thing I do wonder, is how to recreate listener code within the stream of a Saga.  In the course, we've basically rewritten it so that the listener is immediately unsubscribed after the initial call.  This is definitely something I want to revisit.
<br>
<br>
Of course, it's not like using Saga is mandatory.  I do beleive it'll be challenging, and help me to think of the code more clearly.  As I mentioned in yesterday's post, I need to get better at async calls and Promises, so best to just dive in.
<br>
<br>

####The Work
<br>
<br>
I was able to complete a bit of refactoring on my own, so I think I'm getting a bit more of a hang of redux-saga.  The course I'm doing has the general design of calling actions with "start" calls, which you put into the saga stream, and then handle the appropriate response in the callback generator function.  
<br>
<br>
I think I'll be able to comment on it in a more sophisticated manor once I've finished, and done more code with it, but it makes me wonder why Sagas, rather than other types of handles, thunk, etc.  The instructor has said multiple times the benefit of this section is really for 'if you're in a project/environment' that uses it, which tends to make me think it's a little outdated, but maybe I'm just not grasping it's full use case yet. 

####What I Learned
<br>
<br>
One thing I love, though, is how dumb my components are becoming.  <em>Everything</em> that can be removed, has been.  All API calls, all store business, all HOC logic, if it can be removed from the componentDidMount, if it can be injected into a container component instead, has been done.  I think it's an approach I will need to adopt for myself going forward.
<br>
<br>
I think by just forcing yourself at each and every step to consider what needs to be where, and why, makes everything so much better in the long run.  This is definitely a weakness of mine.  Since I'm not so confident, I just code and hope it works, and then don't want to break things by moving something in a fashion that I might not be able to figure out at my current skill level.
<br>
<br>
Really, though, by making your practices pristine, you're doing yourself the favor of makign debugging all the easier. 
<br>
<br>