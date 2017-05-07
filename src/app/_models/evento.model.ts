export class Evento {

    constructor(
        public id: number,
        public titulo: string = "",
        public localizacao: string = "",
        public dataInicial,
        public dataFinal,
        public tipoEvento: string = "",
        public organizador: string = "",
        public palestrante: string = "",
        public descricao: string = ""
    ) { }
}
