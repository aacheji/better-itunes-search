# IMT 549 final challenge: Better iTunes Search

This is a website to provide better iTunes Search interface.

## Preview
[uwjake.github.io/better-itunes-search](https://uwjake.github.io/better-itunes-search)

## Why?

I've used iTunes for some time, and I don't quite like their search interface.

For some reason, iTunes Store loads really slow. And Mac version of iTunes is hard to use, I cannot search by genre, and you can do too many things with iTunes on Mac (e.g. manage your iOS device), that means distraction and, if you click on somewhere by accident, you will be taken to another entirely irrelevant page and therefore lose your focus on search results.

So I used iTunes API to build my own search interface.

## Libraries/Frameworks used

- Vue.js
- Materialize CSS

## User Manual

- You can input your own search key (could be anything: artist, album, song name), choose your desired genre, and hit submit or enter on your keyboard, then it should show results.
- Results are shown in a whole bunch of cards, in the card there's media title, album picture, author, price on iTunes.
- In each card, by clicking on album picture or the three-dot menu icon, you can see more details of this media.
- In each card, by cliking on "play review" button you can listen to or see a preview cilp. Audio/Video control will be shown on the bottom-right corner. You can close it by cliking on close button on the floating audio/video control.
- It works on different sizes of screens.

## Difficulty

When starting, I didn't realize for iTunes API, the Access-Control-Allow-Origin field of response header is set to "127.0.0.1:3000", that means it won't work if deployed on github. 

When I realized this, I already finished it. So I have to do some extra work: start a server to call the iTunes API, and add CORS header to response so that the browser won't complain about CORS.

That's why in my javascript code I am calling my own server so that I can bypass this CORS problem.
