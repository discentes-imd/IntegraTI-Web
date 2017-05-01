export class Job{

    constructor(
        public id:number,
        public empresa:string = "",
        public enderecoEmpresa: string = "",
        public vaga: string ="",
        public descricao: string = "",
        public remuneracao: string ="",
        public link: string="",
        public telefone:string=""
    ){}
}