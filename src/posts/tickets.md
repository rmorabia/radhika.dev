---
title: "How to Think Through Tickets You Don't Understand"
date: '2021-06-04'
---

When I first joined my current company, I felt like I was being thrown into a world of overwhelming vocabulary and a flood of repositories to jump between on a day-to-day basis. It was really overwhelming. I did three things to overcome how overwhelming this all was:

1) I set up an internal wiki just for myself to keep track of vocabulary and where things were.
2) I would reason through tickets on paper.
3) I'd ask my teammates lots of questions that I hope came across as educated.

By doing all three of these, I quickly became an expert on the team and this led to a quick promotion. I'll be covering all of these things in future posts, but for now, let's just talk about #2: how do you parse through tickets you really, really don't understand?

I still walk through this process all the time whenever there's a hard or complicated ticket. Planning and thinking things through before writing down a single line of code is the easiest way to solve a ticket very thoughtfully and increase the quality of your pull requests.

First, I'd like to say that this post assumes your company uses a Scrum/Kanban/JIRA style of tickets with numbers, titles, descriptions, and some kind of sizing. If it doesn't, I've never worked in an environment like that, so I can't speak to that experience.

Second, **keep a notebook and a nice pen on your desk at all times.**

This is pretty self-explanatory. Paper allows you to think non-linearly and also just to slow down and figure out what's important. I can type almost as fast as I think, but I can never write as fast as I think. This forces clarity of thought.

## The template for reasoning tickets out

Fresh sheet of paper, of course.

**First line/title**: Ticket Number: Ticket Title

**What is this ticket asking me to do?** Generally a one or two line summary of the actual work involved in this ticket.

**Non-linear vocab check**: Draw lines from the internal names in the title of the ticket and define them. Can you define them all? If not, ask someone what they mean.

**What are the reference materials?** Any spreadsheets, example PRs, internal wiki pages, or design sheets that you need to keep in mind?

**What is the work involved?** This is when it starts getting longer and more thoughtful. Step-by-step, what exactly do you need to do?

**Any gotchas?** This is the last part of this template. This is where I note down any initial questions I have before I can get started on the work.

...

This is all before you start to write down any code. You can read code during this process, but you shouldn't even have my git branch made at this point. 

In theory, by the end of this, you will either have a clear idea of what you need to do (and can estimate better within your own schedule) or you have an idea of exactly where your gaps are and you can go ask someone to help you reason through those. Then, you can come back and clearly write down the work involved.

Of course, things can change from here forward. Continue writing down notes as you go. This isn't a spec, it's not that rigid. It's just a way to force yourself to think critically before you jump into code.

## An example from my own work

I want to use a real ticket that I have on my board right now, but I have to use a simple one in case something else is too revealing. Hopefully it works for illustration purposes, but keep in mind you don't need to write in full sentences or anything like I do here. Do what is readable to you.

The title of the ticket is "[CFE & R3] Add GA Metrics for waitlist flows"

How would I reason this out using my template?

**First line/title**: BUX-1716: [CFE & R3] Add GA Metrics for waitlist flows

**What is this ticket asking me to do?** I need to add the new Google Analytics tracking events to the CFE and R3 for waitlist flows.

**Non-linear vocab check**: GA metrics are Google Analytics events. Waitlist is an internal flow we have that allows users to join a waitlist at restaurants. CFE and R3 are two different code repositories that represent two different flows.

**What are the reference materials?** We have a Google Analytics spreadsheet that houses all of our events. There's also dozens of previous PRs that show other engineers adding these events that I can find by searching GitHub.

**What is the work involved?** 

* Figure out exactly which events there are from PM, cross-check with spreadsheet.
* Figure out which events go in each repo.
* Check example PRs of how to add an event in R3 and CFE.
* Add events in R3 first, it's simpler, get at least one approval from PM/team lead before going to CFE just to confirm I'm doing things right.
* Test R3 using the Google Analytics plug-in and our logging system.
* Add events in CFE.
* Test events using Google Analytics plug-in and our logging system.
* Confirm with PM that these are all working/QA looks good. 

**Any gotchas?** CFE repo has a ton of user flows -- which one houses waitlist? What if multiple of them do? Do we add these metrics for all of them?

...

This is something I'm revisiting a lot more lately. Because I am now a mid-level, I am expected to not just get a ticket done, but to get it done with a higher caliber of quality. I'm past the skill level where just writing more code would lead to a higher quality here. I need to spend more time _not_ writing code and actually planning things out so that my solutions are clearer and involve less code, actually.

Hopefully this was helpful to someone else in a similar situation. As always, happy to hear about your methods for trying to ensure the quality of your work is high.