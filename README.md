# WXT + React

This template should help get you started developing with React in WXT.

To be honest, this is my first time building an extension, and I know nothing about it. I learned how extensions work in the first 2 hours of the project.
<br><br>
Secondly, this framework, WXT, is totally different from what I learned. It creates its own manifest files, which can be confusing, and the folder structure is very different:
<br>
<br>
1. main `\entrypoints` *main entry point*
<br>
     1.`\popup` *works when extension is clicked* <br>
     2.`content.t`s *Main file it will run on url visit*
     <br>
     3.`background.ts`
     <br>
     4.`inject.ts` -- *injects the file*


I don't understand why my components in React only display or work when I click the extension from the extensions tab. That's not what I wanted at all.

So, I dug deeper into the framework and started understanding it. I observed that `content.ts` is the main point; it runs when the URL matches the target URL. There’s also a concept of injecting scripts into the page using `injected.ts` in entrypoints. 

All the scripts that need to be injected into the main page go here. However, I'm not sure where and how to use React. I tried, but it wasn’t working, so I decided to use normal TypeScript for this because it’s easier to manipulate the DOM. I started using it, and it worked!

I spent a few hours understanding how LinkedIn works—specifically how the messaging tabs function and how to target those elements. I followed a brute-force approach and found several potential bugs.

## Bugs
1. **LinkedIn's loading time** - It varies, but sometimes it loads late.
2. **msg-overlay-list-bubble--is-minimized** - This issue affects message visibility.
3. **Logo disappearing** - Sometimes, when a user is in between chats and suddenly refreshes, the logo disappears. It only reappears when the user clicks on their connections' chat again.
4. **Text overlapping** - The generated message sometimes overlaps with LinkedIn's "Write a message..." placeholder.
