import { Component, OnInit } from '@angular/core';
import { WORDS } from '../data/Words';
import { IWord } from '../models/IWord';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css'],
})
export class ListWordsComponent implements OnInit {
  public words: IWord[];

  constructor() {}

  ngOnInit() {
    this.words = WORDS;
  }

  onAdd() {}

  onEdit(word) {}

  onDelete(i: number) {}
}
