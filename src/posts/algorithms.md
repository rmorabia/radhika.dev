---
title: "The Algorithm Study Plan"
date: "2020-04-21"
---

2020 has been a ride.

I no longer think it’s satisfactory to go through my [2020 learning plan](https://radhika.dev/planning-2020/).  A lot of those priorities were with the expectation that I wouldn’t be worried about keeping my job this year. That is no longer the case.

The only priority for the near future is learning stuff for interviews. In my life of work, that involves 3 areas of study: Algorithms, System Design, and practical React/Node projects.

I do enough React and Node at work for now, and studying System Design is best done closer to actual interviewing. So, I’m going to be focusing on getting much better at algorithms for the near future.

I am constricted by two things: I only want to invest 1 hour after work each day, or less than 8 hours a week. I also only know JavaScript, and don’t want to work in a language I don’t feel great about yet (ie Java).

So, assuming you’ve done some practice problems, solved some easy Leetcode problems here and there, and have some familiarity with how to solve these problems, **how do you level up and get from Two Sum to Binary Search Trees assuming no scientific CS background**?

Here’s how I’m doing it:

## The Curriculum
There’s a few steps to learning algorithms. If you jump too quickly into a curriculum, you lose the context of how this actually relates to what you’ve already done. If you practice for too long without consulting outside sources, you won’t even know what the questions are actually asking of you. Balancing both at certain milestones is critical.

I am definitely at the point where I’ve done enough of the array and string manipulation problems and really need guidance and structure around what knowledge gaps I have. **I need the fundamentals.**

There’s a few different ways to go about this, but after failing to learn this enough times, I decided that I need a very specific feedback loop.

First, reading about the new concept. Reading could be actually reading or videos. This should be fairly practical and contain as little vocabulary as possible. Diagrams are good. Example problems are just going to be confusing at this point.

Then, I need to be thrown in. Give me a problem. Let me fail at it.  Let me hack my way through it and not understand it at all. 

Lastly, I need a review of the problem itself, not the concept again. I need to not only see the proper solution, but see the process of the proper solution.

Do this enough times, and the patterns start to match. Note that the reading shouldn’t happen for every new problem. The Practice-Review loops should be happening more often.

As far as I can tell, [InterviewCake](https://interviewcake.com) has the best kind of feedback loop for this. There’s some other services that handle Question -> Review, but the hardest part for me is getting that list of step-by-step curriculum that explains the fundamentals I’m lacking. Due to Covid19, it is currently $29, and although I can’t recommend truly recommend it yet, I’d at least recommend looking at it.

I’d say InterviewCake handles the Reading -> Question. It partially handles the Review part, but I think I’ll need supplementary materials.

Alongside InterviewCake, there are a few things I’ll be doing: 

 **Reading:**  [Easy to Advanced Data Structures by William Fiset](https://www.youtube.com/watch?v=Qmt0QwzEmh0&list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu). This was recommended to me by [Chris’s excellent blog post about his algorithm studying](https://chrisdoescoding.com/posts/5/). It’s nice to have readings on InterviewCake and video explanations on YouTube to look for.

**Questions:** [LeetCode](https://leetcode.com). What else is there to say? I’m not doing anything special with this yet, just practicing alongside what I’ve already covered on InterviewCake.

**Review:** The great thing about how popular LeetCode is is that I can look up solutions to the question on YouTube. This tends to require a basic-level competency with Java and Python. I believe spending a weekend on these two languages, enough to understand how to translate that to JavaScript, is worth it.

The review on YouTube is probably the most vital part. It’s all fun and games to solve Two Sum, but how do you really _do_ Two Sum? How do you optimize it? What are you missing? Pattern matching will build over time, but just solving problems isn’t enough. You have to know what the right answer is to get it next time. Mentors or looking at other people’s solutions and how they got there are the only way to do this better and better over time.

## The Process
I have a job. I can’t devote the entirety of my life to this. I’m going to be trying to do one question per day, which may encompass a reading beforehand, and definitely encompasses a review after.

I want to put these questions into some sort of a spaced repetition system to come back and do them better eventually, but I think there are enough questions on LeetCode that I don’t really need to repeat anything. 

So, for example — 

I’ll log into InterviewCake and see what’s next on my course list. If there’s a reading, I’ll go through it. I’ll also cross-check the Data Structures playlist to watch any videos related to that topic. 

Then, I’ll go through an accompanying problem. If I’m running out of accompanying problems in the course, I’ll head over to LeetCode and find something in that topic realm.

I’ll solve the problem, save that solution, and go to YouTube or the InterviewCake hints to review. I’ll mark down what I missed and what the optimized solution was.

Tomorrow, I’ll do the same thing again.

## How I’m Problem Solving
Algorithms aren’t just about spamming the LeetCode submit button. There’s a process. I’m stealing most of this process from [Chris’ excellent blog post about his study process](https://chrisdoescoding.com/posts/5/), but I really like it.

### Keep a Problem Log

I think this is what separates people who “get algorithms” from people who claim they’ll never be able to understand them. Write down every single problem you solved and take notes about it.

What comes in those notes will come naturally — the problem, the category, notes on patterns used to solve it, a list of solutions you have as you go through the problem more than once, notes from your review.

If you’re doing this on paper (I would), there should also be an accompanying e-log with your solutions easily accessible to be copy/pasted. LeetCode itself saves all of your submissions, but that’s a bit too messy for me.

This is a fairly formal book and not really a place for freeform thinking. This is different than a scratch pad.

### Solving the Problem

I’m just going to copy this from [Chris’ article](https://chrisdoescoding.com/posts/5/)

> Solving a problem took these steps:  
>   
> 1. Read the problem, understand the inputs and what you're expected to output.  
>   
> 2. Think about what "family" of questions this question falls under.  
>   
> 3. Think about what are the best data structures to use for the approach.  
>   
> 4. Think about my actual approach to the problem.  
>   
> 5. Determine whether there was a faster way to solve the problem (if so, go back to step 3).  
>   
> 6. Hand-write the solution into a dry erase board or in my notebook.  
>   
> 7. Re-read the solution I just wrote, see if it would compile and if it would actually solve the problem. Fix any bugs if so.  
>   
> 8. Copy the solution, word for word, into the LeetCode editor.  

I think this is great. I especially like the parts that tell me what to think about exactly. I often hear that advice, but I’m not sure what I’m looking for. I’m actually making prompts in my scratch pad for those questions.

This is important so that I’m actually documenting _this is an array manipulation problem_, _I should probably solve this using objects_, etc., etc.. before I even dive into the code.

Secondly, it’s important to write down the solution on paper or on a whiteboard before typing it into LeetCode. Don’t give into that convenience. Even if you have a code editor in an interview, you won’t be in an environment you’re comfortable in, so you should be able to write a solution by hand without any conveniences that editors allow (ie. `console.log`!)

If your first solutions fail, that’s okay. I’m giving myself leeway to debug it in LeetCode then to try and find my way to a solution. I expect the frequency at which that will occur will drop the more I practice.

It’s also important to time yourself (and to note that). It’s okay to take more time than needed at first, but over time, try to keep it under 30 minutes for your first solution.

Don’t try to do everything perfect at once. First, just solve the problem. Then, solve it on the first try. Then, solve it optimized. Then, solve it optimized, on the first try, and within 30 minutes.

You will get better and make breakthroughs.

### Reviewing

Remember, **it’s not enough to just solve the problem**. There are more optimal solutions. Hackiness isn’t the point here. 

Self-taught people will see Two Sum as the #1 question on LeetCode, solve it in O(n^2) and legitimately go through life thinking that they’re okay. Two Sum has an optimal solution. It’s just one of those things that you have to know to know.

I  think it’s important to do that frequently, and although there are courses that will teach you all of those tricks more upfront, I’m better at reflecting on tricks after I’ve already tried it. Watching competitive programmers on YouTube is the best way for me to review my work here.

…

That’s about it. I’m going to be going through one of these problems every day for 6 days a week.

With consistent practice and an understanding of where to get that knowledge that fills the gaps of “you don’t know what you don’t know,” I believe it’s possible for any self-taught engineer to become fairly competent in algorithms in a few months time. I’ll report back when I’m a pro.
