export class MAccount {
    public total?: number;
    public name: string;
    public description: string;
    public icon: string;

    constructor({ total, name, description, icon }: 
    {
        total?: number,
        name?: string,
        description?: string,
        icon?: string
        } = {}) {
     this.total = total;
     this.name = name;
     this.description = description;
     this.icon = icon;
    }
}