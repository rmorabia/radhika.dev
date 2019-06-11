---
title: "Learning Log Week 3: Linux, Horoscopes, and Py"
date: "2019-06-10"
---

So uh... I broke my computer this week.

As I've mentioned before, I've been having performance issues despite moving my local dev environment over to AWS. Running the localtunnel, VSC, and Chrome actively was a lot for my computer. 

I was trying to turn on full reboot and some other internal Windows tools to make Windows go faster. In the process, I accidentally formatted over the entire HD. Whoops.

## Got on [SparkyLinux](https://sparkylinux.org/)

I spent a lot of time figuring out that the drive was unsalvagable. Once I got over it, I dual-booted SparkyLinux & Windows.

SparkyLinux is a Debian-based distro that can run on the Debian testing branch. It's lightweight, well-supported since it's Debian-based, and **runs the most performant GUI out of the box, LxQT**. LxQT is faster than LXDE, MATE, GNOME, everything but actual window managers like i3.

All the drivers worked out of the box since I'm running a ThinkPad, which tends to be a pretty Linux-compatible line of laptops.

And let me tell you... It's fast. I haven't tried actually developing ON the machine since I like my AWS server, but with AWS + Sparky, developing is a dream. I feel no latency lag between me & what I want to accomplish.

Linux, as tends to happen, takes a long time to _really_ customize, though. A lot of time has been dunked into my perfect zsh setup, my perfect appearance choices, and my perfect browser reading experience. It's vapid, I know. But, I'm running out of things to customize.

Nothing beats the sheer efficiency and focus that a well-tuned Linux machine brings. I feel so much joy to be working on Linux again. I know Mac just works, but seriously -- it's so much worse than Linux.

## Finished radhika.dev

With this new productive setup, I was able to crank out the rest of radhika.dev in a night. Specifically, the [Projects page](http://radhika.dev/projects) and the [404 page](http://radhika.dev/404).

I feel a lot less friction with finishing projects now. I expect I'll crank through projects pretty quickly now. I don't regret the time I wasted with Windows, because Windows has improved a lot over the past few years, and I learned AWS, but I really love Linux.

## Finished Python Crash Course Chapter 3

You know what a fast Linux system doesn't help with? Reading a programming book about learning your second language.

There's a few pieces of friction here --

1) The concept of reading a physical book
2) Learning my second language

For the first, I'm still trying to figure out exactly how to read a technical book without getting bored. Since I'm still so near the beginning of the book, so much of it is stuff I already know because I already know a programming language. This is no fault of the book, though.

I'm used to the rule that says -- "Write every line of code in the book."

When I do that, and switch back to VSC just for the sake of writing a boring line of code that looks the same in JavaScript, I zone out. I get distracted. Then, I'm opening a browser... Then, I'm on Twitter. (I tweeted like 10 times today because of this.)

I have a new set of rules that I'm trying to follow now.

1) Look at the subheading (Eg. Organizing a List)
2) Is it something you're not confident about? Read through it.
3) Only type examples if the syntax is different than what I already know.
4) Do all the exercise portions (Try It Yourselfs)

I'm also keeping a mental rule that I am not allowed to open a browser while I read. It's just me and the code editor.

In theory, this should reduce friction in the future, but I haven't had much chance to try it yet.

So, the other blocker... Learning a second language is hard. I'm just not as open as I used to be. I have opinions. I have lots of opinions.

I also don't know how to deal with memorization concepts. Should I remember the syntax for `sorted(list)` or remember that there's two ways to sort -- one which copies and one which is permanent? HOW do I remember the concepts? 

It's hard to resist the instinct to just hoard the syntax.

My tactic so far has been to write key ideas as review questions at the end of the chapter.

Eg. What is the difference between `list.sort()` and `sorted(list)`?

Eg. How do you access the last item in a list?

But I need to learn to let go... of my opinions, of JavaScript, of the words I'm skimming over. That's the only way I'll ever get through this book and get to learning Python.

## Next Week

First, I need to announce -- I am currently on a break from streaming since it isn't super convenient on Linux, and I am not emotionally ready to develop on Windows just for the streams.

I will pick it back up soon, probably next week. (It just really depends on if I'm getting interviews or not. I'm just streaming for the practice, so if I have nothing to practice for, it's futile.)

Since I'm not streaming, I plan to --

* Continue with Python Crash Course (ideally up to Chapter 8 by the end of this week!)
* Build my [timeline app](https://github.com/rmorabia/timeline/) into a full-on CRUD app with authentication.