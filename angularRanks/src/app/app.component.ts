import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quote : { quote: "", author: "", likes: 0};
  quotes : any
  errors: any
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.quote = { quote: "", author: "", likes: 0}
    this.getquotesFromService();
    

  }
  getquotesFromService(){
    console.log("GET component checkpoint")
    let obs = this._httpService.getQuotes();
    console.log(obs)
    obs.subscribe(data => {
      console.log("GET component return", data)
      this.quotes = data["quote"] 
      console.log(this.quotes)});
    }
  addQuote(){
    let obs = this._httpService.addQuote(this.quote);
    console.log("POST component checkpoint", this.quote)
    obs.subscribe(data => {
      console.log("POST checkpoint return", data)
      if (data == data["err"]){
        this.errors = data["err"].message
        console.log(this.errors)
      } else {
      this.quote = { quote : "", author : "", likes: 0} 
      this.getquotesFromService() 
      }
    })
  }
  like(action, quote){
    if (action == 'like'){
      quote.likes += 1;
      let obs = this._httpService.likesTotal(quote)
      console.log("PATCH component checkpoint", quote)
      obs.subscribe(data => {
        console.log("PATCH checkpoint return", data)
        this.getquotesFromService();
      })  
    }
    else if (action == 'dislike'){
      quote.likes -= 1;
      let obs = this._httpService.likesTotal(quote)
      console.log("PATCH component checkpoint", quote)
      obs.subscribe(data => {
        console.log("PATCH checkpoint return", data)
        this.getquotesFromService();
        })  
      }
    }
  deleteQuote(quote) {
    let obs = this._httpService.removeQuote(quote)
    console.log("DELETE component checkpoint", quote)
    obs.subscribe(data => {
      console.log("DELETE checkpoint return")
      this.getquotesFromService();
    })
  }

}
