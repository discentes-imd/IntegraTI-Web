export class Usuario {

    public id_user: number;
    public full_name: string = '';
    public email: string = '';
    public path_photo: string = '';
    public skills: string[] = [];

    // Sigaa data
    private sigaa_matricula: string;
    private sigaa_username: string;
    private sigaa_password: string;

    constructor(id: number, full_name: string, email: string, photo?: string, skills?: string[]) {
        this.id_user = id;
        this.full_name = full_name;
        this.email = email;
        this.path_photo = photo;
        this.skills = skills;
    }

    getSigaaPassword(): string {
        return this.sigaa_password;
    }

    getSigaaUsername(): string {
        return this.sigaa_username;
    }

    getSigaaMatricula(): string {
        return this.sigaa_matricula;
    }
}
