---
title: "Getting started with Linux gaming"
date: "2022-01-30"
---

The Steam Deck is finally getting a concrete release date. It will start shipping
on February 28. I'm crossing my fingers, hoping this will have a big impact on a
positive way for the Linux gaming ecosystem. Sadly, all major non-linux dedicated
media will point out the same issues the Linux gamers are already familiar with:
Game incompatibility, the Anti-cheat games not working, the media foundation related
issues and (maybe?) the shader compilation related stutters.

## What the current issues are (mostly)

Let's check first the current issues and some games that sadly, can't be played out
of the box a month before the Steam Deck launches.

### Game incompatibility issues

Yeah, there are games that won't work out of the box. And for these, while there are probably some "community fixes", that's not ideal for regular gamers, even less when
these involve using the terminal, which I'm not expecting to be the best experience
on the Deck on the go. Some examples of these games? Bulletstorm: Full Clip Edition or Resident Evil (The first one). These games will simply not work. There are fixes for them
if you go to their corresponding page on ProtonDB but still, incompatible out of the box.

### The anticheat issue

Even with the announcement of the Anti-cheat tools getting Proton Support, almost no one
has enabled them for their games. Now, even if the media says it's just a matter of a 
couple of clicks, it can't be that easy or everyone would just do it. I can't blame
game developers for not enabling it, requiring changes to a game for everyone just so
a few more people (compared to their whole community) can play it too. But still I find
it really sad, that after all the work and time that lots of people and companies have
put into making this a reality, game developers are not putting a bit of their part
to make this Linux Gaming dream a reality...

### The media foundation

I think this is the worst issue for the Steam Deck to be honest. I'm expecting most
people playing single player games, and lots of them (And actually good games)
require the media foundation libraries that are not included on Proton. Now, I now
that this is an issue that's being fixed by reverse engineering the video decoding
through gstreamer (IIRC), but it's still not there. And I'm not sure if Valve will
have it ready for Steam Deck launch after a month (The Deck should have shipped on
December, and the regular Proton Experimental builds still just have some game
specific media foundation fixes, not a general solution).

### The shader compilation

Now, Valve has their own shader preprocessing solution, and I believe that with the Steam Deck, having a single hardware and the running mesa and kernel versions controlled, this could fix it. But on regular PCs, it's still a hit/miss solution, where some games haven't been pre-cached enough, or where the cache downloads can mess with the local processed
shaders, making the game stutter unnecessarily. This makes the gaming experience suboptimal and really poor on some examples. For example on God of War, the stutter produced by the shader compilation leads to audio desync from the ingame cutscenes. Really bad experience.

## And the solutions?

Well... [Proton-GE](https://github.com/GloriousEggroll/proton-ge-custom) fixes most
of these things, but Valve can't sadly add it's fixes to every single game. It 
includes media foundation fixes, some automatized scripts to fix games (Like the 
Resident Evil case) and includes the DXVK-Async patches that helps A LOT for the
stuttering on some games. But teaching gamers how to download a ZIP file from GitHub, extract it, put it on the right directory (Which is a hidden folder), enable it manually from Steam and adding the environment variables is just asking WAY TOO MUCH.

The Media foundation fixes are coming from Valve, and I'm hoping that the shader pre-caching solution from Valve could help a lot on the stuttering, but still I think they should enable the Async solution at least for specific games, specially those that they aren't getting access to pre-process before the release date, or at least, very big game releases.

## Conclusions

I really, really want this to do great. And first of all I can't express how impressive is where Linux gaming has reached, like, really, being able to play something like God of War, on launch day, on Linux, without having to do almost nothing, how cool is that?

But my true fears come from the regular press just axing all that effort because not all games work (Which is true) and having people not knowing if the games they want to play on the Deck will work, will be the biggest issue. I'll be crossing my fingers so that big AAA game developers give it a try to make Deck supported titles, and hoping to see the Deck logo as a platform on future game announcements.

See you soon :)