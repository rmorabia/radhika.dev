---
title: "Learning Log Week 1: SSH, Gatsby, and Py"
date: "2019-05-19"
---

This week's post is actually a culmination of two weeks. I just moved to the Bay Area two weeks ago, so I gave myself the first week to settle in and set up my computers for development. This week also involved a lot of work on my learning routine. It's not perfect yet, so I haven't been as productive as I will be further on.

So, this post is actually my first two weeks of work. Let's get to it.

## Setting Up a Lo-Fi Dev Process

I have a 2GB Chromebook (Unix-based) that's super portable. I stole a 4GB ThinkPad from 2013 from my sister. 

I don't like throwing perfectly good hardware away. Maybe I'm just too stubborn, but I wanted to make this hardware work for my development process if it was the last thing I did. 4GB has to be enough to work on run of the mill JavaScript and Python stuff.

I tried WSL, but it ended up slowing my computer down a lot when I would run it as the integrated terminal in VS Code. It would also sometimes just start and never reach the terminal. I also had issues with download speeds -- It seemed to cap at 300 kbps. This would... work, but there's a lot of development friction here.

So, I decided to try developing on a remote server. Since AWS gives a free year, I don't think there's any harm in trying. (Afterwards, I'm going to be trying to optimize spending less than $1 a month on a server.) It worked perfectly. I just followed the official docs and had an Ubuntu instance up and going pretty quickly.

I have to wrap my brain around the concept that this is just like my local computer, but it only has access to my code stuff. I'm looking forward to diving further into servers and command line stuff soon. I used to run Linux as a hobby, so I think this'll be an easy transition.

The best part of this is that VS Code just came out with [some cool remote development extensions](https://code.visualstudio.com/docs/remote/remote-overview) that make developing on an SSH server almost seamless.

My dev process now works across computers and leaves me enough extra CPU to have Spotify + 17 Chrome tabs + all the VSC extensions I want open.

The only issue I've found is how do I access `localhost:8000` when localhost is no longer local? The solution is a tool called [ngrok](http://ngrok.com). Very cool, and moderately easy to set up.

I'm kinda happy with this setup now. I'm also pretty happy with the fact that I can open my Chromebook and achieve similar results with just 2GB of RAM. All I need is a wifi connection, which if I'm developing with JS anyway, is a pretty obvious prerequisite.

I've been having issues with overloading the RAM (running a local server on a server with 1GB of RAM will do that, it turns out). I'm still working around that. I think the solution is just to view changes on commit, but that feels very unsatisfying compared to watching on every change. I really don't want to spend more money on a bigger server, though. I just want to make it work with this. 

It's not a perfect setup yet, but I'll continue working on this (maybe using [Netlify Dev](https://www.netlify.com/products/dev/)) in the coming weeks. This is definitely better than a local setup.

## Personal Site with Gatsby

I've been going back and forth on the design of this website for months. I've set up confetti using three.js, gone fully bare-bones serif text, and had my backgrounds animate in rainbows.

I'm mixed between two design philosophies. I want a silly, colorful website. I also want a serious, well-designed website. I want to clearly come across as an expert who cares about performance, but also someone fun and friendly.

I think I've finally reached a conclusion. My website will generally follow the [Tufte CSS guidelines](https://edwardtufte.github.io/tufte-css/), except in these cases:

- Make my name an animated rainbow on the front page
- Add a mouse trail
- Have the blog entry page include randomized color backgrounds for each post (maybe, we'll see how this looks)
- Have some random colors in the cards on my Projects page
- Animated links on hover (fill animation, maybe?)

At the end of this week, I have the basics of the site done.

You can see my progress on the project [here](<https://github.com/rmorabia/rmorabia.github.io/projects/1>). Using GitHub Projects to track this project's requirements has been really nice. I'm going to be doing this with all of my projects now.

I'm done with 7 out of 18 total cards on the GitHub page. 

## Python Crash Course

I'm learning Python through [Python Crash Course, the 2nd Edition](https://nostarch.com/pythoncrashcourse2e). I could've learned faster through another method, but this is the first time I'm trying to learn through a book in a long time, and I want to do it properly. I'm reading every word despite the fact that I'm learning my second language.

This book is for people totally new to programming. If you've programmed before and want to learn Python, go for another book or be ready to skim a lot.

I haven't gotten far enough to really have much commentary on this yet. 

My only big takeaway is that Sublime Text is much better for non-web languages. It was clearly designed for languages like Python and it shows. I'm back to using Sublime for my Python study.

## Conclusion & Next Week

This week was very light on the studying. I had a lot of setting up left to do and had other priorities.

Starting this week, I will be streaming almost every day! I'm going to be doing algorithms 2 days a week, tiny practical projects 2 days a week, and then I'll be reading code one day a week. I bought a mic and everything. Follow along at [twitch.tv/rmorabia](http://twitch.tv/rmorabia).

Other than that, here's what I hope to get done next week:

- Finish [radhika.dev](http://radhika.dev).
- Continue working through Python Crash Course.
- Make progress with learning Node ([Andrew Mead Course](https://www.udemy.com/the-complete-nodejs-developer-course-2/))

I hope to continue making these updates each week, so stay tuned. Best way to keep up is just to sign up to the newsletter below. I'll be adding RSS functionality to the blog soon as well.