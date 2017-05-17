import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() user: any;
  habilidades: string = '';
  firstName: string = ''
  lastName: string = ''

  constructor() { }

  ngOnInit() {
    console.log(this.user)
    // Mostrando as 3 primeiras tecnologias com # na frente
    // Da pra fazer mais otimizado com Pipes
    this.habilidades = this.user.skills.slice(0,3).map((x) => '#' + x)

    this.setFirstAndLastName(this.user.full_name)
  }

  setFirstAndLastName(fullName) {
    const [firstName, lastName] =
      fullName.split(" ").reduce((previous, name, index, array) => {
        const lastIndex = array.length - 1

        if (index === 0 || index === lastIndex)
          return [...previous, name]

        return previous
      }, [])

    this.firstName = firstName
    this.lastName = lastName
  }
}
