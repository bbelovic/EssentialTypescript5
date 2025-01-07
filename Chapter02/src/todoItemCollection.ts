import { TodoItem } from "./todoItem";

export class TodoItemCollection {
    private nextId: number = 1;
    constructor(public name: string, public items: TodoItem[]) {}

    addTodo(task: string): number {
        while(this.findById(this.nextId)) {
            this.nextId++
        }
        this.items.push(new TodoItem(this.nextId, task, false))
        return this.nextId;
    }

    private findById(id:number): TodoItem {
        return this.items.find(item => item.id === id)
    }
}