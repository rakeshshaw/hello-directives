import { Injectable } from "@angular/core";
// import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService  {
  // private url = "https://api.github.com/users/mosh-hamedani/followers";
  constructor(private url, private http: HttpClient) {
    // super(myurl, http);
  }

  getAll() {
    this.http.get("https://api.github.com/users/mosh-hamedani/followers").subscribe(response => console.log(response)); /*.pipe(map(response=> {
      const data = [];
      // this.data.push(response);
      // console.log(response);
      // for(const key in response) {
      //   data.push(response[key]);
      // }
      return data;
    })); //, catchError(this.handleError)); */
  }

}
