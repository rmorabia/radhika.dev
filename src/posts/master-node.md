---
title: "How I'm Mastering Node"
date: '2020-01-24'
---

Node is weird.

If you've built any significant app with JavaScript, you've used Node. You've used npm or yarn, used `import` syntax and are familiar with `require` syntax.

But... does that really mean you know Node? 

I've built [plenty](https://github.com/rmorabia/timeline) [of](https://github.com/rmorabia/highestscores) [apps](https://github.com/rmorabia/conway) with Node. I still don't feel like I understand it, though. I just wrote browser-based JavaScript and didn't open a browser, basically.

I've been trying to find the missing links with Node (and back-end programming in general) and have been going through the extremely good [Node course from Andrew Mead](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/). I highly recommend it if you've never written Node before.

However, I'm at a weird middle ground with my knowledge where I am familiar with a lot of Node concepts, I just haven't put them together in a unified Node-first way yet.

Let's list what I consider myself familiar with:

- fs & the Node API in general
- how to make API endpoints (although not without Express)
- npm/yarn
- command line arguments
- promises & async/await (although I have never used this outside of an AJAX environment)
- event loop / callback queue

Here's what I'm not familiar with:

- streams
- buffers
- how to publish a package on npm and make it importable & usable
- callbacks without the context of AJAX, aka how to make a callback for callback's sake
- how http works in Node???
- testing Node
- connecting to databases???

So, I know a lot of individual concepts, I think I'm missing a lot of the connections, though.

I _could_ get those connections if I sit through the 30 hours of Node that Andrew is presenting in his excellent Udemy course, but I no longer want to. I know too much to feel satisfied with spending more time there. I have to force myself to go through it every day and I don't feel like I'm learning at a fast enough pace given my prior experience.

So, let's not.

I need to figure out a better way to learn this stuff.

This is how I know I'm getting to the level where Udemy isn't as appealing and faster-paced resources like [Egghead](https://egghead.io) & [PluralSight](https://pluralsight.com) are. Give me an overview of the concepts, structure, and vocabulary in less than 5 hours, so I can work on something myself. That might even be direct work tickets.

## But how do we know get that list of essential concepts to learn?

Especially if we're skipping large, comprehensive courses like Udemy's from now on.

My big issue with Node is that I don't know what I don't know. I have no idea what streams are and why I need them. So, if specific Googling about Node ([or an Egghead course](https://egghead.io/courses/introduction-to-node-the-fundamentals)) doesn't cover it, I'll still feel like I'm missing something.

Right now, the only answer I have is to ask folks. Twitter is good for this.

Otherwise, I'd say if Twitter didn't exist, I'd just find the top 10 books on the topic and summarize all the commonalities that show up again and again. Don't skip anything even if it sounds obscure.

## Resources

So, here's what I'm using for resources for Node, now that I have a good list of things I need to learn from Twitter and reading around.

- **[nodejs.dev](https://egghead.io/courses/introduction-to-node-the-fundamentals) is a great overview of most essential Node topics without getting into Express or testing.**
- [Andrew Mead's Node Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/) includes a 125-page PDF that covers the essential lesson of each video.
- [Introduction to Node: The Fundamentals](https://egghead.io/courses/introduction-to-node-the-fundamentals) on Egghead
- [Test Node Backends](https://egghead.io/courses/test-node-js-backends) on Egghead
- YouTubeing and reading wherever my gaps are

I'm also going to be attending [NodeSchool](https://nodeschool.io) tomorrow. Hopefully talking to folks who write more Node can help me separate my knowledge gaps from being a front-end developer who writes Node to thinking about it in a back-end first way.

## Projects

The most important way to make progress with this is to make projects that slowly but surely allow me to practice all of these concepts at least 3x. This was covered before in [How I Learn](https://radhika.dev/how-i-learn/).

[Shelley](https://twitter.com/codebytere) suggested I build an NPM CLI app. That's going to be project #1 -- I don't know how many of these topics it will touch, but it's a good start. I already published it on npm [here](https://www.npmjs.com/package/rashee), I'm going to actually code it soon.

From then on, I'll continue talking to people and building apps that touch other aspects of Node. Hopefully this helps me fill in this awkward gap I feel with Node.

I also think this is a good demo for how I want to learn Java. It's hard to imagine I'll be satisfied with an introduction for someone who has never programmed before, but I also hate 1-hour overviews that ignore all the Java-first concepts. Finding that balance between wanting to learn something deeply, but still feeling like I am learning something is really hard for me.
