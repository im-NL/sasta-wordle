import re 
# wordlist is html downloaded from https://eslforums.com/5-letter-words/ downloaded because requests didn't work out 
with open(r"C:\Users\adush\Downloads\wordlist.html", "r") as f:
    text = f.read()
    words = re.findall(r"<li>(\S{5})", text)

with open("words.txt", "w+") as file:
    for word in words:
        file.write(word + "\n")