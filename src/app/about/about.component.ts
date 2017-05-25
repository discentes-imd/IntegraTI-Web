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
        this.contributors =
          data.map(this.contributorToUser)
            .reduce(this.removeDuplicatedContributors, []);
      });
  }

  private contributorToUser = contributor => {
    const { author, user } = contributor;

    const languages =
      contributor.repos
        .sort(this.sortByStars)
        .reduce(this.getLanguagesFromRepos, [])

    return new Usuario(user.id, user.name, !!user.email ? user.email : '', user.avatar_url, languages);
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

  private removeDuplicatedContributors(previous, contributor) {
      const duplicated =
        previous.filter(previousContributor => previousContributor.id_user === contributor.id_user).length > 0;

      // id 18171845 = angular-cli
      if (duplicated || contributor.id_user === 18171845) {
          return previous;
      } else {
        return [ ...previous, contributor ]
      }
  }

  formatGrid(users) {
    return users.reduce((previous, actual, index) => {
      const rows = previous.length

      if (index % 3 === 0 && index > 0) {
          previous.push([actual])
      } else {
          previous[rows -1].push(actual)
      }

      return previous
    }, [[]])
  }
}
