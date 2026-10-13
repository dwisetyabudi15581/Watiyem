"""Bind em-dashes to preceding word with &nbsp; so they never start a line."""
import re

path = "/home/z/my-project/download/panduan-website-catering-watiyem.html"
with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Split off the <style> block so we never touch CSS
head, sep, rest = html.partition("</style>")
# Replace "word — word" with "word&nbsp;— word" (keeps dash glued to previous word)
count = rest.count(" \u2014 ")
rest = rest.replace(" \u2014 ", "&nbsp;\u2014 ")

html = head + sep + rest
with open(path, "w", encoding="utf-8") as f:
    f.write(html)
print(f"replaced {count} em-dash occurrences with nbsp-bound version")
