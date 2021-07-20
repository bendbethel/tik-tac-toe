import { Component } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tik-tac-toe';
  game;
  constructor(){


    this.game = new Game();
  }
  boardclick(){


    this.game.board1= "0"
  }

  board(num){

    this.game.board[num]="0"
  }
}
