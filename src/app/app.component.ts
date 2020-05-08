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
    {id:1, name:'An apple a day keeps the doctor away.'}
  ]
}



    
