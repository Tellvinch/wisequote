import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'"Never, never, never give up."','" Winston Churchill"',new Date(2020,6,9)),
    new Quote(2,'"While there is life, there is hope."','"Marcus Tullius"',new Date(2010,6,6)),
    new Quote (3,'"Failure is success in progress."','" Anonymous "',new Date(2019,6,10)),
    new Quote (4,'"Success demands singleness of purpose."','" Vincent "',new Date(2009,5,9)),
    new Quote (5,'"The shortest answer is doing." ','" Lord Herbert "',new Date(2009,4,8)),
    new Quote (6,'"Powerful dreams inspire powerful action."','" Jonathan "',new Date(2019,6,8)) 
  ]
  votes = 1
  
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  createdQuote(isCreated, index){
    if (isCreated) {
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quote.Length+1;
    quote.createdDate = new Date(quote.createdDate)
    this.quotes.push(quote)
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
