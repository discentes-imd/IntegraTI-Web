import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/count';

@Injectable()
export class GithubService {
    projects = [
        'https://api.github.com/repos/discentes-imd/IntegraTI-Web/stats/contributors',
        'https://api.github.com/repos/discentes-imd/IntegraTI-API/stats/contributors'
    ];
    constructor (
        private http: Http

    ) {}

    getContributors() {
        return Observable.from(this.projects)
            .concatMap(repo => this.http.get(repo).map(contributors => contributors.json()))
            .toArray()
            .map(([ web, api ]) => [ ...web, ...api ])
            .flatMap(contributors => contributors)
            .flatMap(
              ({ author }) => this.http.get(author.repos_url).map((repo) => repo.json()),
              (contributor, res) => Object.assign(contributor, { repos: res })
            )
            .toArray()
            .flatMap(contributors => contributors)
            .flatMap(
              (contributor) => this.http.get(contributor['author']['url']).map(user => user.json()),
              (contributor, res) => Object.assign(contributor, { user: res })
            )
            .toArray()
    }
}
