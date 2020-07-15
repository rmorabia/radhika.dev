---
title: "How to Make Visual Studio Code 150% Faster in Large Projects"
date: "2020-07-15"
---

I recently switched projects over to our large monorepo (the zip from GitHub is around 150mb, without `node_modules`). I found that not only was Webpack causing my fans to run on overdrive, Visual Studio Code would get so laggy that typing caused seconds of latency.

I tried switching back to a simpler code editor, but I'm extremely reliant on Code's built-in search features in such a big project like this.

So, I had to take some time to get to the bottom of this. 

Firstly, I checked Activity Monitor. I saw that something called `Code Helper (Renderer)` was taking 150% of my CPU. 

My initial assumption was to stop using Code's built-in terminal and switch over to iTerm. That didn't fix it.

I looked at [a lot of GitHub Issues about this issue](https://github.com/microsoft/vscode/issues/87509) and saw repeated comments from the Code team that `Code Helper (Renderer)` is an extension. Disable all extensions and it will work.

So... I did. It did not work. I didn't even have any themes installed.

Finally, I came across [an unanswered StackOverflow question](https://stackoverflow.com/questions/54798028/how-do-i-figure-out-which-extension-or-service-is-making-a-vs-code-helper-proces) where the comments answered what I needed.

**If you are having performance issues with Visual Studio Code, open `Developer: Open Process Explorer`.**

I saw that something called `electron_node tsserver.js` was taking up over 100% of my CPU. What was this? I didn't use any TypeScript in my project.

Further looking around led me to the fact that **Visual Studio Code has extensions built-in that you never installed.** I did not know this! You can find these by searching `@builtin` in your extensions.

Specifically, there is an extension called `TypeScript and JavaScript Language Features` which includes a lot of functionality like closing tags. However, it automatically runs TypeScript stuff even if you don't have a TypeScript project. (This begs the question, why is Visual Studio Code so deeply integrated with TypeScript that it automatically assumes you're using it? Microsoft is selling us its entire ecoystem.)

Once I disabled the `TypeScript: Disable Automatic Type Acquisition` feature, Visual Studio Code was instantly faster than I've ever seen it before. 

**TL;DR: To make Visual Studio Code extremely fast if you don't use TypeScript, add this line to your settings.json file:**

```json
{
  "typescript.disableAutomaticTypeAcquisition": true
}
```
