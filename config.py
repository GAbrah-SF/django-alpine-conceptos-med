import configparser

config = configparser.RawConfigParser()
with open('config.ini', encoding='utf-8') as file:
    config.read_file(file)
