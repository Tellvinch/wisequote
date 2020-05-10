import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wise';
  quotes:Quote[] = [
    new Quote (1,'"Never, never, never give up."','" Winston Churchill"',new Date(2020,6,9)),
    new Quote(2,'"While there is life, there is hope."','"Marcus Tullius"',new Date(2010,6,6)),
    new Quote (3,'"Failure is success in progress."','" Anonymous "',new Date(2019,6,10)),
    new Quote (4,'"Success demands singleness of purpose."','" Vincent "',new Date(2009,5,9)),
    new Quote (5,'"The shortest answer is doing." ','" Lord Herbert "',new Date(2009,4,8)),
    new Quote (6,'"Powerful dreams inspire powerful action."','" Jonathan "',new Date(2019,6,8)) 
  ]
}



    
