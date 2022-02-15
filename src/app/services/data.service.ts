import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { NotFoundError } from "../common/errors/not-found-error";
import { BadInput } from "../common/errors/bad-input";
import { AppError } from "../common/errors/app-error";


export class DataService {
  private data = [];
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url); /*.pipe(map(response=> {
      const data = [];
      // this.data.push(response);
      // console.log(response);
      // for(const key in response) {
      //   data.push(response[key]);
      // }
      return data;
    })); //, catchError(this.handleError)); */
  }

  /*

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(
      this.url + "/" + resource.id,
      JSON.stringify(resource)
    );
  }

  delete(id) {
    return this.http.delete(this.url + "/" + id);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      Observable.throw(new BadInput());
    }
    if (error.status === 404) {
      Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError());
  }*/
}
