import { Component, OnInit } from '@angular/core';
import { IWord } from './models/IWord';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public formOpen = false;
  public editWord: IWord;

  ngOnInit(): void {}

  onAdding() {
    this.formOpen = true;
  }

  closeForm() {
    this.formOpen = false;
    this.editWord = null;
  }

  onEditing(word: IWord) {
    this.editWord = word;
    this.formOpen = true;
  }
}
