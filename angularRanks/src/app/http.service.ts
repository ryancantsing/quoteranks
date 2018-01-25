import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getQuotes();
   }
getQuotes(){
  console.log("GET checkpoint service")
  return this._http.get('/show')
}
addQuote(quote){
  console.log("POST checkpoint service", quote)
  return this._http.post('/create', quote)
}
likesTotal(quote){
  console.log("PATCH checkpoint service", quote)
  return this._http.patch(`/patch/${quote._id}`, quote)
}
removeQuote(quote){
  console.log("DELETE checkpoint service", quote)
  return this._http.delete(`/delete/${quote._id}`, quote)
}
}
