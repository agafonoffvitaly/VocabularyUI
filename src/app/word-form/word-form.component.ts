import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css'],
})
export class WordFormComponent implements OnInit {
  wordForm: FormGroup;

  @Input() wordId: number;

  @Output() onExit = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.wordForm = this.fb.group({
      id: null,
      value: ['', [Validators.required]],
      translate: this.fb.array([this.createTranslate()]),
      example: this.fb.array([this.createExample()]),
      image: [''],
      dateAdd: [''],
      countUse: [0],
    });
  }

  private createTranslate() {
    return this.fb.group({});
  }

  private createExample() {
    return this.fb.group({});
  }

  onSubmit() {}

  exitForm() {}
}
