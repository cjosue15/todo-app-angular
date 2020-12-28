import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    todos: Todo[];
    constructor(private todoService: TodoService) {
        this.todos = [];
    }

    ngOnInit(): void {
        this.getTodos();
    }

    getTodos(): void {
        this.todoService.getTodos().subscribe((response: any) => {
            this.todos = response;
        });
    }

    addTodo(text: string): void {
        const todo = new Todo(text);

        this.todoService.addTodo(todo);
    }

    updateCompleted(id: string) {
        const todo = this.todos.find((item) => item.id === id);
        todo.completed = !todo.completed;
        this.todoService.updateTodo(id, todo.completed);
    }

    deleteTodo(id: string) {
        this.todoService.deleteTodo(id);
    }

    clearAll() {
        this.todoService.clearAll();
    }
}
