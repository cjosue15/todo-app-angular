export class Todo {
    id?: string;
    name: string;
    completed: boolean;
    date: number;
    constructor(name: string, completed = false) {
        this.name = name;
        this.completed = completed;
        this.date = new Date().getTime();
    }
}
