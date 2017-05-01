export class Evento{

    constructor(
        public titulo:string = "",
        public localizacao: string = "",
        public dataInicial,
        public dataFinal,
        public tipoEvento:string ="",
        public organizador: string ="",
    ){}
}
