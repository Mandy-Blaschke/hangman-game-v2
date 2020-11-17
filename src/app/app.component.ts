import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  alphabet: string [] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  words = WORDS;
  currentWord: string;
  lettersOfCurrentWord: Letter[] = [];
  guessedLetters: string[] = [];
  faults = 0;
  gameFinished = false;

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.resetGame();
  }

  getLettersFromCurrentWord(): void {
    const chars = this.currentWord.split('');
    chars.forEach((l) => this.lettersOfCurrentWord.push(
      {
        char: l.toUpperCase(),
        isVisible: false
      }
    ));
  }

  guessLetter(letter: string): void {
    this.guessedLetters.push(letter);

    const founds = this.lettersOfCurrentWord.filter((l) => l.char === letter);

    if (founds.length === 0) {
      this.faults++;
    } else {
      founds.forEach((l) => l.isVisible = true);
    }
    this.checkWin();
  }

  checkWin(): void {
    const allRevealed = this.lettersOfCurrentWord.filter((l) => !l.isVisible).length === 0;
    if (allRevealed) {
      this.gameFinished = true;
    }
  }

  resetGame(): void {
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.getLettersFromCurrentWord();
    this.faults = 0;
    this.guessedLetters = [];
    this.gameFinished = false;
    this.lettersOfCurrentWord.forEach((l) => l.isVisible = false);
  }

}

export interface Letter {
  char: string;
  isVisible: boolean;
}

export const WORDS: string[] = [
  'Test', 'Eule', 'Staubsauger', 'Hangman', 'Eheleute', 'Kuckucksuhr', 'Flasche', 'Uhr', 'Mitternacht',
  'Blumentopf', 'Lautsprecher', 'Pflanze', 'Xylophon', 'Telefon', 'PlayStation', 'Ladekabel',
  'Trinkflasche', 'Lampe', 'Fledermaus', 'Tisch', 'Briefumschlag', 'Jalousien', 'Gardine', 'Palme',
  'Keyboard', 'Computer', 'Wandbild', 'Tapete', 'Bettbezug', 'Ordner', 'Computermaus', 'Rasen',
  'Wildblumen', 'Kopfhörer', 'Lederjacke', 'Untersetzer', 'Spezialisierung', 'Bauchnabel', 'Smartphone',
  'Pinguin', 'Hund', 'Mund', 'Magnet', 'Krankschreibung', 'Arzt', 'Joghurt', 'Kabel', 'Fenster', 'Rauch',
  'Feuer', 'Oma', 'Luftfeuchtigkeit', 'Blatt', 'Kekse', 'Arme', 'Nuss', 'Weihnachten', 'Karte', 'Eltern',
  'Bildschirm', 'Gabel', 'Messer', 'Besteck', 'Tafel', 'Schuhe', 'Hosen', 'Haarfarbe', 'Krawatte', 'Bettbezug',
  'Beutel', 'Schreibtischunterlage', 'Grabstein', 'Auge', 'Stift', 'Wasser', 'Fluss', 'Meer', 'Kronleuchter',
  'Waschbecken', 'Badewanne', 'Toilettenpapier', 'Laptop', 'Staubwedel', 'Besen', 'Couch', 'Telefax', 'Locken',
  'Becher', 'Teppich', 'Supermarkt', 'Zeitschrift', 'Lebensmittel', 'Orange', 'Giraffe', 'Katze', 'Laubbaum',
  'Gehweg', 'Statue', 'Klebestreifen', 'Paketdienst', 'Ohr', 'Buch', 'Wimper', 'Bart', 'polizei', 'feuerwehr',
  'krankenwagen', 'frisur', 'Dose', 'rad', 'Sonne', 'Kamera', 'nagel', 'Finger', 'Bank', 'Erde', 'Planet',
  'Nintendo', 'Wort', 'Ort', 'platz', 'Sitz', 'Tasche', 'taschentuch', 'Nase', 'Zeh', 'neun', 'Acht', 'nacht', 'tag',
  'leder', 'sessel', 'urne', 'schale', 'apfel', 'banane', 'insel', 'stadt', 'land', 'spiel', 'handwerker',
  'krankenschwester', 'lehrer', 'zeitung', 'zeit', 'Karma', 'balkon', 'kasten', 'kiste', 'Party', 'feier', 'feierabend',
  'arbeit', 'arbeitsplatz', 'schule', 'federhalter', 'bleistift', 'schreibheft', 'lineal', 'rucksack', 'Sport',
  'fernsehsendung', 'klavier', 'baum', 'netzwerk', 'internet', 'Youtube', 'netflix', 'fahrrad', 'auto', 'Bus',
  'Werk', 'Wette', 'Wetter', 'Pizza', 'Restaurant', 'Niederlande', 'Italien', 'Griechenland', 'Deutschland', 'Polen',
  'mittag', 'Salat', 'Brot', 'Strickjacke', 'hochzeit', 'feiertag', 'club', 'Babysitter', 'Gelegenheit', 'Chance',
  'Frustration', 'Freude', 'Pinzette', 'Fingernagel', 'Igel', 'Ohrring', 'Savanne', 'Strand', 'Wand', 'Sand',
  'Kammer', 'Zimmer', 'taschenbuch', 'drucker', 'sanduhr', 'leben', 'verlobung', 'Verrat', 'Wurst', 'boden',
  'Ekel', 'Schreibtisch', 'Nagellack', 'Bonbon', 'dach', 'weihnachtsmann', 'osterhase', 'EIER', 'malen', 'zeichnen',
  'singen', 'spielen', 'Gitarre', 'Bass', 'Orchester', 'Geige', 'Seide', 'Wolle', 'Rolle', 'Schiff', 'See',
  'Blutgruppe', 'Stuhl', 'sitzen', 'stehen', 'Luft', 'Sauerstoff', 'atmung', 'trinken', 'aNGST', 'leopard', 'gepard',
  'elefant', 'Elemente', 'leuchten', 'farben', 'knopf', 'Blume', 'Zug', 'eisenbahn', 'flugzeug', 'fliegen', 'fliege',
  'taste', 'schraube', 'hammer', 'bohrmaschine', 'drehen', 'kreisel', 'bahn', 'hahn', 'fisch', 'futter', 'bier', 'foto',
  'bild', 'Kugelschreiber', 'hubschrauber', 'glas', 'Karaffe', 'karamell', 'rottweiler', 'rotkehlchen', 'blaumeise', 'kohlmeise',
  'amsel', 'park', 'emotion', 'schreibfehler', 'tipp', 'rock', 'metall', 'holz', 'dorf', 'regeln', 'tastatur',
  'leuchtturm', 'hafen', 'opa', 'rahmen', 'grenze', 'lutscher', 'lauch', 'paprika', 'basilikum', 'petersilie', 'salz',
  'messe', 'festival', 'positiv', 'negativ', 'corona', 'virus', 'ausgang', 'eingang', 'klinke', 'gras', 'hanf',
  'gerste', 'hopfen', 'wein', 'weinen', 'ziel', 'start', 'zeiger', 'sekunde', 'stunde', 'minute', 'fleisch', 'rum',
  'erdbeeren', 'falle', 'geschenk', 'geburtstag', 'orakel', 'sternzeichen', 'hellseher', 'hochhaus', 'fahrstuhl',
  'treppen', 'stufen', 'girlande', 'lichterkette', 'licht', 'dunkel', 'balance', 'seite', 'saite', 'strohhalm',
  'epoche', 'mittelalter', 'zeitalter', 'krise', 'erholung', 'urlaub', 'ferien', 'klausur', 'tagung', 'reise', 'riese',
  'umlaute', 'rufe', 'geschrei', 'leise', 'weise', 'art', 'quark', 'frosch', 'kaulquappe', 'echse', 'mader', 'kaninchen',
  'laser', 'patrone', 'paradies', 'paradiesvogel', 'kolobri', 'zensur', 'diktatur', 'diakonie', 'kirche', 'dienstleistung',
  'insolvenz', 'gastronomie', 'rezension', 'bewertung', 'stern', 'sonnensystem', 'milch', 'galaxie', 'schlange', 'spinne',
  'feige', 'hase', 'obst', 'heidelbeere', 'karotte', 'kartoffel', 'laufen', 'sprint', 'fussball', 'haus', 'garten',
  'wiese', 'thermometer', 'warm', 'kalt', 'sommer', 'winter', 'herbst', 'silvester', 'lieferung', 'bordsteinkante', 'zahn',
  'hand', 'kopf', 'topf', 'kochen', 'essen', 'sandalen', 'turnen', 'zirkus', 'tiere', 'gegenstand', 'erfolg', 'sieg',
  'niederlage', 'fingerring', 'windel', 'baby', 'kinder', 'rinder', 'kuh', 'schaf', 'hirte', 'gebet', 'gebot', 'verbot',
  'salamie', 'schinken', 'ketchup', 'sauce', 'brei', 'teller', 'hunger', 'satt', 'gott', 'engel', 'teufel', 'lustig',
  'langweilig', 'schnell', 'langsam', 'sachte', 'sagen', 'tomate', 'erbe', 'prinzessin', 'prinz', 'bube', 'dame', 'ass',
  'acker', 'felder', 'wirtschaft', 'abschwung', 'aufschwung', 'geschichte', 'philosophie', 'kurz', 'lang', 'gleich', 'nachher',
  'morgen', 'gestern', 'atom', 'energie', 'kraftwerk', 'strom', 'elektrisch', 'geladen', 'akku', 'batterie',
  'mittel', 'klein', 'sein', 'wunder', 'erleben', 'schauen', 'klauen', 'bauen', 'kruste', 'ruder', 'lenkrad',
  'ameise', 'liebe', 'gesellschaft', 'trennung', 'ansehen', 'aussehen', 'prestige', 'pfannkuchen', 'waffeln', 'backen',
  'folge', 'serie', 'wiederholung', 'deckel', 'dackel', 'abdeckung', 'abschreckung', 'gesetz', 'paragraph', 'text',
  'strafe', 'gefangen', 'frei', 'freiheit', 'eierkuchen', 'tante', 'onkel', 'torte', 'mutter', 'vater', 'meilenstein',
  'kilometer', 'entfernung', 'welle', 'schlagloch', 'golf', 'tor', 'regal', 'keller', 'besichtigung', 'besuch', 'museum',
  'maschine', 'weste', 'roman', 'osten', 'norden', 'westen', 'pullover', 'klemmbrett', 'stiehl', 'handy', 'haushalt',
  'kette', 'freundin', 'enkel', 'enkelin', 'sohn', 'tochter', 'test', 'bitte', 'betrachten', 'informationen', 'wetter', 'heiss',
  'hundert', 'kueche', 'aufregung', 'euphorie', 'fragen', 'wissen', 'ernaehrung', 'vergangenheit', 'politik', 'superman',
  'batman', 'afrika', 'feldzug', 'diesel', 'mode', 'geld', 'modenschau', 'experiment', 'gold', 'loch', 'dollar', 'versprechen',
  'gehirn', 'widerspruch', 'mechanik', 'millionen', 'cents', 'euro', 'europa', 'asien', 'australien', 'steigerung', 'jahre',
  'jahreszeit', 'fruehling', 'summe',
];
