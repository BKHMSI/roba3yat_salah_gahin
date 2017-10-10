import numpy as np
import codecs, json

size = 145

def txt2json(file_path):
    poems = []
    for i in range(1,size):
        with open(file_path+str(i)+'.txt') as file:
            poems.append(file.read())
    json.dump(poems, codecs.open('poems.json', 'w', encoding='utf-8'), separators=(',', ':'), sort_keys=True, indent=4)

