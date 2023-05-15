# Sasta Wordle
### wordle if it was written by a moron
<br>
My first typescript project (compiled to js) 
I'm pretty sure I haven't been using typescript properly and if there are any corrections anyone would want to make you can <a href="https://aryansharma.tech" hit me up. /a>

Listing what every file does right here:
- index.ts => all the "ts" code I wrote (really just js in a typescript file) 
- index.js => compiled code that I got by running ``tsc .\index.ts``
- index.html => html code if html code was written by a moron
- index.css => css code if css code was written by a moron
- words.py => fetches all the 5 letter words from `https://eslforums.com/5-letter-words/`, the website had cloudfare though so I had to do "save as" on the website then open the HTML as a file and fetch all the words like that. Wasn't bothered to find a better way because this worked.
- words.txt => this is where all the words I fetch from words.py are stored. (I have no clue how I will use those words in js YET)

make an issue if anyone has any suggestions on how to make it more efficient/ if there are any bad practices in the code; I'll try my best to fix everything.
