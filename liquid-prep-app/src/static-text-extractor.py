files = ["index.html", "app/components/advice/advice.component.html", "app/components/measure-soil/measure-soil.component.html", "app/components/my-crops/my-crops.component.html", "app/components/seed-date/seed-date.component.html", "app/components/select-crop/select-crop.component.html", "app/components/slide-indicator/slide-indicator.component.html", "app/components/welcome/welcome.component.html"]

from urllib.request import urlopen
from bs4 import BeautifulSoup
import re

for f in files:
    print("scraping:", f)
    with open(f) as fp:
        soup = BeautifulSoup(fp, 'html.parser')

    # kill all script and style elements
    for script in soup(["script", "style"]):
        script.extract()

    # get text
    text = soup.get_text()

    # # break into lines and remove leading and trailing space on each
    lines = (line.strip() for line in text.splitlines())
    # # break multi-headlines into a line each
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))

    static_text = []
    for chunk in chunks:
        if chunk:
            static_text.append((re.sub("{|}|\"", "", chunk)).strip())

    print(static_text)