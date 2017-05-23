import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../_services/usuario.service';
import { GithubService } from '../_services/github.service';
import { Usuario } from '../_models/usuario.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users: any[] = [];
  contributors: any[] = [];

  constructor(private _usuarioService: UsuarioService, private githubService: GithubService) {
    this.users = this._usuarioService.getAllUsers();
  }

  ngOnInit() {
    this.githubService.getContributors()
      .subscribe(data => {
        this.contributors = data.map(this.contributorToUser);
      });
  }

  contributorToUser = contributor => {
    const { author } = contributor;

    const languages =
      contributor.repos
        .sort(this.sortByStars)
        .reduce(this.getLanguagesFromRepos, []);

    return new Usuario(author.id, author.login, author.email, author.avatar_url, languages);
  }

  private sortByStars(a, b) {
    return b.stargazers_count - a.stargazers_count;
  }

  private getLanguagesFromRepos(previous, repo) {
      if (previous.indexOf(repo.language) !== -1 ) {
        return previous;
      } else if (repo.language !== null) {
        return [ ...previous, repo.language ]
      } else {
        return previous;
      }
  }
}
