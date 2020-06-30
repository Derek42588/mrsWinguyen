---
title: "Success!"
date: "2020-06-21"
snippetImageName: "62120snippetAndFull"
fullImageName: "62120snippetAndFull"
fullImageAlt: "Celebration"
tags: ["React", "Firebase", "Game Project", "Redux"]
subtitle: "Celebration"
snippetText: "Wooo!  Not going to lie, feeling pretty good that I was able to get the v1 production version of this game app up and running.  Took a lot of tinkering, and pretty much just trial and error, but it's up, it's done, and it works !!  Live version here and github here"
---

<br>
<br>
Wooo!  Not going to lie, feeling pretty good that I was able to get the v1 production version of this game app up and running.  Took a lot of tinkering, and pretty much just trial and error, but it's up, it's done, and it works !!  Live version <a href="https://swolebox-e2710.web.app/">here</a> and github <a href="https://github.com/Derek42588/swolebox">here</a>
<br>
<br>
Don't get me wrong, it definitely did not go perfect.  Nor is it really "done".  It could use some polishing, and I am sure there are bugs that I didn't catch yet and won't until I am able to get some real live games going (rather than my girlfriend on her phone and me on a few incognito windows).
<br>
<br>
Man it feels good though.  I was expecting that it would take at least a few days to figure out, but after about 6 hours today, I was able to hammer it out.

####The Method
<br>
<br>
I wish I could say I learned more from how I fixed it, except it was pretty much just trial and error.
<br>
<br>
First, I went back and spent time refactoring a few of my methods to use transactions instead of extraneous (and probably callback-hell inducing) listeners. Unfortunately, that wasn't the fix -- but I am glad I did it. I feel like I learned a bit more about what's going underneath the hood, and understand more about the read/write flow of firebase.
<br>
<br>
The main thing that ended up working was just inserting breakpoints in different spots until I narrowed down the culprit. It ended up being a component I was using to render the messages. It eventually worked when I removed it as a nested component and just rendered it within the base component itself. I'm not totally sure what was going on there. The props it relied on shouldn't have been passed down until the data was correct, and I changed nothing about the data itself when I brought it back to my main component. But hey, if it works, it works right?
<br>
<br>

####What I Learned
<br>
<br>
I desperately need better methods for debugging production vs. development. I am fairly confident in using jest, but as I mentioned in a previous blog, I feel like there's a missing step for imitating production to reproduce the correct issues.
<br>
<br>
Up next: polishing, possibly expanding, and the next project!
<br>
<br>
