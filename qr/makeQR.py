# Requirements: install zint: https://zint.org.uk/manual/chapter/2
# Usage: Copy student data (in csv form) from export-csv.html to the file test.csv.
#        Run this program
# Output: montage.png

import subprocess
import json

fontsize = 20
xGap = 20
yGap = 20
# subprocess.Popen('zint -b QRCODE --scale=4 -d "https://soriki.com/makerspace"', shell=True)

with open('test.csv', 'r') as f:
    data = f.readlines()

for student in data:
    s = student.split(",")
    id = s[0]
    sName = s[1] #.replace(" ", "_")
    url = f"http://makerspace.local/{id}"
    imgName = f'{id} {sName}.gif'
    subprocess.Popen(f'zint -b QRCODE -o "{imgName}" --scale=4 -d "{url}"', shell=True)

process = subprocess.Popen(f'montage -label %t -pointsize {fontsize} -geometry +{xGap}+{yGap} *.gif montage.png', shell=True)
process.wait()
subprocess.Popen(f'rm *.gif', shell=True)
