import re
import requests 

# wordlist is html downloaded from https://eslforums.com/5-letter-words/ downloaded because requests didn't work out 
with open(r"C:\Users\adush\Downloads\wordlist.html", "r") as f:
    text = requests.get("https://www.thefreedictionary.com/5-letter-words.htm").text
    words = re.findall(r'<li data-f=15><a href="(\S{5})', text)

# with open("words.txt", "w+") as file:
#     for word in words:
#         file.write(word + "\n")

with open('words.ts', 'w') as js:
    wordlist = "[" + ", ".join(f"'{word}'" for word in words) + "]"
    js.write(wordlist)