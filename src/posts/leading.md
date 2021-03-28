---
title: "Reflections on leading my first major project"
date: "2021-03-28"
---

I just finished leading my first major project at [OpenTable](https://opentable.com). The project has been in progress since January, and is still in an A/B test right now. I'm not sure how much I can disclose about the details of the project because of this, but let's just say that it's a fundamental change to the user flow. 

Overall, I'd say the project was a success. Because my large team is always rotating project leads, I was able to learn from several other projects that we had completed beforehand. My #1 priority was to avoid repeating a mistake that the team had already learned from before.

I'm proud to say I accomplished that feat, but of course, whenever you solve some problems, more spring up. I might write a post sometime later about what went right in this project, but for now, I'd just like to write about some lessons I've learned with hindsight.

## Check your assumptions

This project was a cross-team effort. Really, it was a cross-company project. We were the last team to work on it, so I had assumed everyone else's work was basically completely done and I could just borrow from them. 

This did not turn out to be true. I only found this out once development had started, despite having over a sprint to prepare to lead this project.

It didn't cross my mind to actually check where all the other components of this project were. I didn't really even know how to do that. (The how is simple. Just ask.)

It's important for a project lead to know what their dependencies are -- and know the status of those dependencies before planning development. Because I didn't do this, we ended up with tickets being flagged as blockers for 2-3 weeks, only being added right before launch.

## Timezones are hard

When I signed up to be a project lead, I knew most of my job would now involve coordinating -- meetings, Slack rooms, emails, but I didn’t anticipate how difficult timezones would be.

Being dependent on folks whose workday only has 1 overlapping hour with yours leads to a lot of waiting. I'm not sure how fully distributed teams do it. I'm so used to the idea that I can ping anyone within the hours of 8:30AM and 5:30PM, I never planned for the idea that I could message someone to do something and it'd take over 2 days for them to unblock me.

In hindsight, there was nothing I could’ve done better except for checking my assumptions. If we had known we were going to be dependent on each other, we would've planned it much further in advance. Instead, we ended up reacting in the moment. We had spur in the moment meetings and Slack threads, PRs that required each others' approval, and a lot of accidentally overlapping work.

The codebase is still a mess of our different styles of coding meshing together into a confused, inconsistent mess, left to haunt a future developer who didn't understand that we were in a bind -- trying to compromise as best we could.

I think we did the best we could here given how fast we had to react to this, but the situation should've been avoided in the first place by planning better.

## Micromanaging is bad & delegation is important

I kept two main adages while leading this project:

1. Delegate the hardest technical work to my team.
2. Don't micromanage.

I successfully completed #1. This was a major priority for me because I think it's one of the easiest traps to fall into as any kind of leader. You have the most context, so you can do it faster if you do it yourself. But, that's not your job. Your job is to unblock the rest of your team to do their best work and make their lives easier.

I had more mixed results with #2. I tried my hardest, and although I didn't ask anyone how long they worked, I believed I estimated well enough that there were no late days. I personally never worked more than 8, maybe once or twice 9 hours a day. But, I still ended up having to DM my team members, "Hey, when will this be done?" and "Hey, the UK team needs this in the morning, do you think you could get this out today?"

I hated to do it, and maybe I'll learn a way around it in the future. It just seemed inevitable sometimes, despite the fact that I believed in my team and trusted they would deliver on time. I wasn't trying to micromanage, but we had some hard deadlines on tickets. I often felt like I overexplained ticket priorities when the team asked for assignments.

I don't know how they felt about my performance, though. We currently don't do any sort of project lead feedback, mostly because there's no way it could be anonymous if there was a grievance. No one wants to tell a team member they did a bad job or annoyed them a lot. I can only measure based on objective measurements like whether the project was planned well and delivered on time. It’s much harder to measure the day-to-day interactions and burdens I placed on my team.

## This is exhausting work

I'm still tired. It's been about 2 weeks since we officially launched. I took some vacation, but I'm still just so tired. I desperately miss not thinking so much about context and just being able to code at my own pace -- not constantly having to check Slack and shuffling from meeting to meeting.

However, the more senior an engineer gets, the more these kinds of responsibilities become inevitable. People from other teams will see you as a trusted point of contact and message you first, your own team members know you have a lot of context on this so they ask you to pair, and you start to get more involved in project planning.

I'm not sure if it ever gets less exhausting. I'm not in any rush to take on all of this responsibility too fast. I am thoroughly enjoying being a mid-level and slowly ramping up my workload with this sort of work.

One of my growth priorities for this year is to be a more supportive team member to project leads. During this project, I had a ton of great help from my team members who asked for a lot of context on things I didn't think about. Their probing is a huge reason why the project was a success. I would’ve missed a ton more edge cases and tickets without their questions.

I realized I’d never put in that much effort into a project I wasn’t leading before. I actually think leading a project well is easier (although, more exhausting) than being a great project member. It's easy to know your responsibility is to handle all the context, it's hard to ask for more context when you don't actually need it to get work done. It's going the extra mile, and it shows.

## Projects never end

I'm still working on bugfixes and watching the A/B test. We're yet to launch the project on another flow in our system. The project is technically done, I've moved on, but I will always be the easiest maintenance person for this project. I will always be the point of contact as not just A project expert, but THE project expert.

Since this project will be put into the flow, this sets a precedent that will be around for years to come. By choosing to be a leader of this project, I didn't just make a 2-month commitment. I made a commitment for the rest of my tenure at OpenTable. In 10 years, someone might ask about v01 of this project, and I may be the only original team member still around to give context on it.

I can't fathom remembering it in 10 years. I've been forgetting projects I completed even a year ago. But, being an expert in this project is an official job responsibility of mine now. I hope that by writing this all down, I remember it better.

...

That's it. This post is a little different from my usual fare. It’s written in the style of my usual posts, but I wrote it for myself first. I hope you found this helpful, or at least mildly entertaining.

As always, feedback is welcome in the comments below. Share your own mistakes with me, or just give me advice for the future.
