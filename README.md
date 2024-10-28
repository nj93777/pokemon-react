# Pokémon-hakusovellus

Tämä projekti on Pokémon-hakusovellus, joka on rakennettu Reactin ja Viten avulla. Sovelluksen avulla käyttäjät voivat hakea ja tarkastella eri Pokémonien tietoja.

## Asennus

1. Kloonaa tämä repositorio:
   ```sh
   git clone <repository-url>

   ```
2. Siirry projektin hakemistoon:
   ```sh
   cd pokemon-app
   ```
3. Asenna riippuvuudet:
   ```sh
   npm install
   ```

## Käyttö

Käynnistä kehityspalvelin:

```sh

npm run dev


# Käyttöohjeet
## Kirjoita hakupalkkiin Pokémonin nimi tai ID (numero) ja paina hakupainiketta.

## Sovellus hakee tiedot PokeAPI-rajapinnan kautta ja näyttää ne käyttäjälle.

## Näytettävät tiedot sisältävät Pokémonin nimen, kuvan, tyypit ja tilastot.

## Rajapintaan liittyy pieni kummallisuus. 
## Siinä on ID:n kanssa listattu pokemonit numeroon 1025 asti. 
## Sen jälkeen tulee pieni hyppäys ja listaus jatkuu 10001 numerosta ja jatkuu 10277 asti. 
## ID:lla 1026-10276 ei näin ollen pokemoneja löydy.

# Teknologiat
## React: Käyttöliittymän rakentamiseen.

## Vite: Kehitystyökaluna nopeaan kehitykseen ja HMR (Hot Module Replacement) -ominaisuuteen.

## PokeAPI: Pokémon-tietojen hakemiseen. https://pokeapi-proxy.freecodecamp.rocks/

Esimerkkejä SQL Select -hakukomennoista
Hae kaikki tiedot kaikista Pokémoneista:

Hae kaikkien Pokémonien nimet ja URL-osoitteet:

Hae Pokémon, jonka nimi on 'pikachu':

Hae kaikki Pokémonit, joiden id on suurempi kuin 10:

Hae kaikki Pokémonit aakkosjärjestyksessä nimen mukaan:

Hae ensimmäiset viisi Pokémonia id:n mukaan järjestettynä:

Hae kaikki Pokémonit, joiden nimi alkaa kirjaimella 'b':

Hae kaikkien Pokémonien määrä:

Hae kaikki Pokémonit, joiden URL-osoite sisältää sanan 'api':

Hae Pokémonit, joiden id on välillä 10 ja 20:

SELECT * FROM pokemon WHERE id BETWEEN 10 AND 20;
