---
title: "A Fully Formed App"
date: "2020-06-06"
snippetImageName: "bssc"
fullImageName: "bssc"
fullImageAlt: "BSSC App"
tags: ['learning']
subtitle: "A Full, Robust Project"
snippetText: "I had finished the University of Helsinki's Full Stack Open and had a few other courses under my belt.  I had done a few web apps and projects, and made a few aborted attempts at a larger, cohesive project with lots of functionality.  Now I was determined to finish a full, robust project, beginning to end."

---
####Dec 2019 - Feb 2020
<br>
<br>
I had finished the University of Helsinki's <a href = "https://fullstackopen.com/en/">Full Stack Open</a> and had a few other courses under my belt.  I had done a few web apps and projects, and made a few aborted attempts at a larger, cohesive project with lots of functionality.  Now I was determined to finish a full, robust project, beginning to end.
<br>
<br>
I've always had a better time visualizing projects when it's something that I know well, solving problems that are tangible to me rather than hypothetical.  At the time, I was working full time for an orthopedic surgery practice.  To give a little bit of background, they used a fairly powerful practice-management program called athenaNet.  Anyone who has worked in the healthcare field will have heard of it, as it's one of the most common platforms.  
<br>
<br>
As far as my specific workplace, there were still some rather large gaps in our day-to-day that I thought could be better served, and perhaps fixed with the right web app.

####Identifying Problems
<br>
<br>
To give a bit of understanding, the main crux of my job was administration -- booking appointments for patients with one of our 18+ providers.  I was one of a dozen or so people doing these duties (and more).  Every one of these provider had different guidelines.  One deals with feet, the other with shoulders.  One has certain guidelines for a patient presenting with x issue, and another something completely different.  So on, and so on.  This is over simplifying, but I think it gives a good enough overview to understand.
<br>
<br>
As far as the workflow went, we had printed binders going over these different rules and guidelines.  Right when I started working there around October of 2019, I saw right away that this could be improved upon.  Right away I started making my own cloud based notes, so that I could quickly search for specifics, rather than have to struggle through a binder hundreds of pages trying to remember what is referenced where.
<br>
<br>
So, huge room for improvement appeared to me nearly right away.  If I could make a web app that would centralize all of these references, workflows and best practices, all organized in a logical way and searchable -- it could improve our job function immensely. 
<br>
<br>

####Challenges and Completion
<br>
<br>
You can see the live web app <a href = "http://bssc-dcp.herokuapp.com/">here</a>, and the github repo <a href = "https://github.com/Derek42588/bssc">here</a>.  It has fully functioning authentication, with different levels of access.  To view at an admin level, you can use the login dpyle with password: admin
<br>
<br>
More than anything else, I was excited to use every facet of what I had learned so far in this app.  I wrote the backend myself, using Express and Node for the API, MongoDB for the database, and GraphQL for fetching info.  The front end used React and Redux.  
<br>
<br>
I suppose from a feature point of view, there are three main ones:  A live, searchable booking guideline for each of our individual providers.  This portion of the app would update via state depending on the info you are trying to access.  Furthermore, it would display live, up to the minute "alerts" for each individual provider, fetched via GraphQL.
<br>
<br>
Next, we would often change practices on a daily basis, given a provider being out of the office, not having surgery times, their administrator being away, and so on.  AthenaNet was how we disemminated this info, but its presentation was ugly, hard to read, and unclear.  Similar to how I would show provider alerts, I made a separate area of practice-wide alerts, also up to date.
<br>
<br>
Editing either of these things or adding messages was walled behind authentication.  An admin level login could edit anything, an administrator could edit for their specific provider/s, and an employee could simply view.
<br>
<br>
Lastly, I would upload all our individual documentation, and make it searchable.  This was done using React/Redux, given that the info did not need to be fetched but simply presented.
<br>
<br>
My struggles mostly came from the GraphQL portions.  At this point in my learning, that was definitely what I was least familiar with.  I referenced a few GraphQL courses I had taken and its documentation, and while it took me a while, I was able to implement everything I had conceptualized!
<br>
<br>
Other challenges arose from some simple CSS/React issues.  They aren't anything spectacular or even anything particularly intricate, but given that I wanted to complete a full project wholly on my own, I wanted to implement everything on my own.  So things like making a dropdown header component -- while relatively simple and something I had done at least in part in video course code-alongs, I was going to do it completely on my own just to prove to myself I could.
<br>
<br>
I also struggled a little bit with deployment, which frustrated me to no end -- many courses simply gloss over this aspect, but in the end I think you just need to learn it for yourself.  What kind of project are you doing (SPA, Static, etc), what do you need from hosting, and so forth.  There are many, many hosting and deployment options nowadays, and all of them feature very well put together documentation.
<br>
<br>

####What I Learned
<br>
<br>
Without a doubt, I gained the most in my career so far by completing this project.  I finally saw something through from conception to end.  Moreover, it didn't only have one or a few simple features -- it contained many, many features and uses, all put together in one package.
<br>
<br>
I was still struggling with CSS to a certain degree -- I knew enough, but really fine tuning it was a bit beyond me at this point.  I would definitely identify that as something to improve upon afterwards.
<br>
<br>
It took me months and months of early mornings and working weekends, between the project and the study, but in the end, I finally felt like I had something that would truly deserve to be in my personal portfolio.  Unfortunately, due to COVID I was furloughed from this job right as I completed the project.  That was a hardship and a struggle, but I decided at that point I would use my time to focus completely on development as a career.  Studying and trying to obtain a position would now be my full time job.