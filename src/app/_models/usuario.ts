export class Usuario {
    public photo:string = '';
    public habilidades:string[] = []; 
    
    constructor (
        public nome:string = '',
        public email:string = '',
        photo?:string,
        habilidade?:string[]
    ){
        this.photo = photo;
        this.habilidades = habilidade;
    }
}