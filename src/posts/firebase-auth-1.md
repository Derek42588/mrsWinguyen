---
title: "Firebase Auth (Part 1)"
date: "2020-06-09"
snippetImageName: "authPartOneSnippet"
fullImageName: "authPartOneFull"
fullImageAlt: "Database"
tags: ['firebase', 'react', 'authentication']
subtitle: "Boilerplate!"
snippetText: "For today's exercise, I've decided to work on some boilerplate for web-app authentication.  I've found it extremely helpful to have reusable components (of course), and code-snippets I can refer to when making new projects.  I've been trying to get better with making more and more boilerplate skeletons and repos on github I can re-use, rather than miring myself in redoing the same thing from scratch over and over again."

---
####Authentication Boilerplate
<br>
<br>
Part Two <a href = "/posts/firebase-auth-2/">here</a>
<br>
<br>
For today's exercise, I've decided to work on some boilerplate for web-app authentication.  I've found it extremely helpful to have reusable components (of course), and code-snippets I can refer to when making new projects.  I've been trying to get better with making more and more boilerplate skeletons and repos on github I can re-use, rather than miring myself in redoing the same thing from scratch over and over again.
<br>
<br>
I can tell this will be a few different posts, so today's will be part one.
<br>
<br>
####The Goals
<br>
<br>
I have a few different goals with this exercise.  One, I haven't used firebase in a while, using Mongo instead for my database needs.  I think it would be good to practice with another platforms.  Two, I'd like to integrate logging in with OAuth using any of the common social IDs (Google, Facebook, Github, Twitter or an optional, simple e-mail + password).   
<br>
<br>
Next, and this is something I've never attempted before, is I want my authentication to link your social accounts, if you're already registered as a user -- e.g., you've logged in using Facebook and therefor have a user account in my DB, but the next time you sign in, you attempt to use Google to sign in.  Like me, and probably many users, I have the same e-mail registered to pretty much all my primary social accounts.  In default behaviour, firebase OAuth flow will give you an error, as there is already a user with that e-mail account.  You can optionally set it up so that the same email can have multiple accounts, but this isn't ideal behavior in my opinion.  If there was specific user information that we needed to store to one account, what if a user forgets what they've used to sign in with before and clicks a different option the next time?  We want it to be centralized on one account, if the user so chooses. 
<br>
<br>
For most uses, I think all you really need to do is hook up one form of authentication.  Using either an optional, user-provided e-mail/account name + password and offering just ONE OAuth in the form of the above social platforms is just fine.  But this is for educational purposes, and as such, I want to be a completionist.
<br>
<br>
Finally, since I intend to use this a boilerplate, I want to hook it all up with Redux and HOCs, so as to make it easily applicable and transferrable.  A little daunting, but I have confidence!
<br>
<br>

####The Work - The Beginning
<br>
<br>I've made a simple landing and auth pages, and spun up the usual create-react-app and react-router-dom, etc.  Now, I'll have to dive into the firebase documentation to see what, exactly, I need to accomplish.
<br>
<br>
One thing I definitely want to use is to follow their best practices for mobile use.  They mention: "redirect is preferable on mobile devices" <a href = "https://firebase.google.com/docs/auth/web/google-signin#redirect-mode">here</a>, and it seems to me that it's good practice to use that as a default.  The concept of mobile-first developing is something I've only applied to CSS design, but I think for functionality, that's important too.  Signing in with a redirect on desktop doesn't seem all like bad practice, and since it's better for mobile, it makes sense to me to use that in the auth flow.  
<br>
<br>
An optional thought is to provide different auth flows depending on our user's browser environment, but that seems like something to come back to at the end to fine-tune only if necessary.
<br>
<br>
Firebase's documentation is pretty clear at first look to me.  Hooking up different options for OAuth is simply a matter of a few different points of configuration, enabling it on your app's firebase console, and entering some platform specific keys/secrets.  The goal of linking different social accounts seems to be the trickier point.  I will start getting into the code itself in tomorrow's post.
<br>
<br>
