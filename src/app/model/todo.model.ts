export class ToDo {
    title: string;
    note: string;
    image: string;

    constructor(toDo) {
        this.title = toDo.title;
        this.note = toDo.note;
        this.image = toDo.image;
    }
}
