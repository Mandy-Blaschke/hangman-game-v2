import {Component, OnInit} from '@angular/core';
import {WORDS} from './WORDS';

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
    console.log(this.currentWord);
  }

  startGame(): void {
    this.resetGame();
  }

  getLettersFromCurrentWord(): void {
    const chars = this.currentWord.split('');
    chars.forEach((l) => this.lettersOfCurrentWord.push(
      {
        char: l,
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
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)].toLowerCase();
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


