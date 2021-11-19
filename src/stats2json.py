import re, json, os
from datetime import datetime as dt

HEADER_REGEX = r'^-+\s[a-zA-Z]\s[a-zA-Z]\s[a-zA-Z]\s+-+$'
SPACE = ' '
EMPTY = ''
COMMA = ','
HASHTAG = '#'
INFINITY = 'inf'
NAN = 'nan'


def stats2json(file_URL):
    tokens = read_file(file_URL)
    stats_dict = make_dict(tokens)
    save_json_file(stats_dict)


def read_file(file_URL: str) -> list:
    lines = []
    with open(file_URL, mode='r',encoding='utf-8') as f:
        for line in f:
            try:
                processed_line = process_line(line)
                lines.append(processed_line)
            except Exception:
                pass
        return lines


def process_line(line: str) -> str:
    if re.search(HEADER_REGEX, line):
        raise Exception('This is a Header line ...')
    
    splitted_line = line.split(SPACE)
    splitted_line = list(filter(lambda s: s != EMPTY, splitted_line))
    return remove_comment(splitted_line)


def remove_comment(line: list) -> str:
    hashtag_index = line.index(HASHTAG)
    line = line[:hashtag_index]
    return ','.join(line)


def make_dict(lines: list) -> dict:
    stats_dict = {}

    for line in lines:
        tokens = line.split(COMMA)
        name = tokens[0]
        value = tokens[1]
        if value != NAN and value != INFINITY:
            value = float(value)
    
        stats_dict[name] = value

    return stats_dict


def save_json_file(stats: dict) -> None:
    os.chdir('./out')
    new_file = f'stats_{dt.now().time()}.json'
    with open(new_file, mode='w') as f:
        f.write(json.dumps(stats, indent=4))


if __name__ == '__main__':
    file_URL = input('[stats.txt] file location: ')
    stats2json(file_URL)
