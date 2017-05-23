import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/count';

@Injectable()
export class GithubService {
    constructor (
        private http: Http
    ) {}

    getContributors() {
        return this.http.get('https://api.github.com/repos/discentes-imd/IntegraTI-Web/stats/contributors')
        .map((res: Response) => res.json())
        .flatMap(contributors => contributors)
        .flatMap(
          ({ author }) => this.http.get(author.repos_url).map((repo) => repo.json()),
          (contributor, res) => Object.assign(contributor, { repos: res })
        )
        .toArray()
    }
}
