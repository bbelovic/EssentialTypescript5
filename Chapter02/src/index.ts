import { TodoItem } from "./todoItem";
import { TodoItemCollection } from "./todoItemCollection";

console.clear();
console.log(`Boris's todo list:`);

let todos = [new TodoItem(1, 'Buy oats'), new TodoItem(2, 'Pay electricity bill', false)];

const itemList = new TodoItemCollection("Boris's collection", todos);

const newId = itemList.addTodo('Fill in taxes');

console.log(`newId: ${newId}`)
