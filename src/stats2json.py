import re

HEADER_REGEX = '^-+\s[a-zA-Z]\s[a-zA-Z]\s[a-zA-Z]\s+-+$'
SEPARATOR = ' '

def stats2json(file_URL):
    tokens = read_file(file_URL)
    print(tokens)

# Lee las lineas una por una, las estandariza y las retorna
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


# Entra la linea cruda, y sale con la estructura: <nombre>,<valor1>,<valor2>
def process_line(line: str) -> str:
    if re.search(HEADER_REGEX, line):
        raise Exception('This is a Header line ...')
    
    splitted_line = line.split(SEPARATOR)
    splitted_line = list(filter(lambda s: s != '', splitted_line))
    return remove_comment(splitted_line)


# Elimina de la lista los elementos del comentario
def remove_comment(line: list) -> str:
    hashtag_index = line.index('#')
    line = line[:hashtag_index]
    return ','.join(line)


def make_dict(lines: list) -> dict:
    pass

def save_json_file(json: dict) -> None:
    pass

if __name__ == '__main__':
    file_URL = input('[stats.txt] file location: ')
    stats2json(file_URL)
