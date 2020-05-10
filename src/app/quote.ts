export class Quote {
  showAuthor: boolean;
  constructor(public id: number,public name: string,public author: string,public createdDate: Date){
    this.showAuthor=true;
  }
}

export class Vote {
  ok:number
}