import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from 'src/app/services/github-followers/github-followers.service';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: GithubFollowersService) { 

  }

  ngOnInit() {
    //.subscribe(followers=> this.followers = followers);
    this.service.getAll(); //.subscribe(()=>console.log('Hi'));
    /*.pipe(
      map(responseData => {
        // const postsArray = [];
        // for (const key in responseData) {
        //   if (responseData.hasOwnProperty(key)) {
        //     postsArray.push({ ...responseData[key], id: key });
        //   }
        // }
        console.log(responseData);
        // postsArray.push(responseData);

        // return postsArray;
      })
    ).subscribe(followers=> this.followers = followers);*/
  }

}
