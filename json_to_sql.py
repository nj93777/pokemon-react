import json

with open('pokemon.json', 'r') as f:
    data = json.load(f)


with open('pokemon.sql', 'w') as f:
  
    f.write("CREATE TABLE pokemon (\n")
    f.write("    id INT PRIMARY KEY,\n")
    f.write("    name VARCHAR(255) NOT NULL,\n")
    f.write("    url VARCHAR(255) NOT NULL\n")
    f.write(");\n\n")
    
    
    f.write("INSERT INTO pokemon (id, name, url) VALUES\n")
    values = []
    for pokemon in data['results']:
        values.append(f"({pokemon['id']}, '{pokemon['name']}', '{pokemon['url']}')")
    
  
    f.write(",\n".join(values) + ";\n")

print("JSON file successfully converted to SQL file.")
