import { IWord } from '../models/IWord';

export const WORDS: IWord[] = [
  {
    id: 1,
    value: 'string',
    translate: ['строка'],
    example: ['This is string', 'This string is long'],
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fenglish-verbs.ru%2Fwords%2Fstring.jpeg&imgrefurl=https%3A%2F%2Fenglish-verbs.ru%2Fgrammar%2Fstring&tbnid=aHWIH4pxXYw2lM&vet=12ahUKEwikpsSvr_zzAhV_hP0HHXV1CSUQMyhQegQIARB5..i&docid=c8uN7-nQ2xHN5M&w=300&h=232&q=string&ved=2ahUKEwikpsSvr_zzAhV_hP0HHXV1CSUQMyhQegQIARB5',
    dateAdd: new Date(),
    countUse: 1,
  },
  {
    id: 2,
    value: 'excited',
    translate: ['в восторге', 'восторженный'],
    example: ['We are excited to announce RC of TypeScript 4.5'],
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fenglish-grammar.biz%2Fdictionary%2Fimg%2Fwlibrary%2Fe%2F600c3d6e7dd325.69990546.jpg&imgrefurl=https%3A%2F%2Fenglish-grammar.biz%2Fdictionary%2Fen-ru%2Fexcited.html&tbnid=YBW2_9kSHBcS7M&vet=12ahUKEwiJkritsPzzAhV267sIHdSyCiUQMygBegUIARCjAQ..i&docid=eSDEU4hcKYIdrM&w=225&h=225&q=excited&ved=2ahUKEwiJkritsPzzAhV267sIHdSyCiUQMygBegUIARCjAQ',
    dateAdd: new Date(),
    countUse: 3,
  },
];
