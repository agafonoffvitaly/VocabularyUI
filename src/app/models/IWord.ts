export interface IWord {
  id: number;
  value: string;
  translate?: string[];
  example?: string[];
  image?: string;
  dateAdd: Date;
  countUse: number;
}
