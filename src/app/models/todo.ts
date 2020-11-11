import { v4 as uuidv4 } from 'uuid';
export class Todo {
    constructor(
        public id: string = '',
        public name: string = '',
        public contenu: string = '',
    ){
        this.id = uuidv4();
        this.name = name;
        this.contenu = contenu;
    }
}
