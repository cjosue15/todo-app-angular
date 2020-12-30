import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    body = document.querySelector('body');
    todos: Todo[];
    isDark: boolean;
    constructor(private todoService: TodoService) {
        this.todos = [];
        this.isDark = localStorage.getItem('theme') === 'dark' ? true : false;
    }

    ngOnInit(): void {
        this.getTodos();
        const theme = localStorage.getItem('theme') || 'dark-mode';
        this.body.classList.add(theme);
    }

    getTodos(): void {
        this.todoService.getTodos().subscribe((response: any) => {
            this.todos = response;
        });
    }

    addTodo({ name, completed }): void {
        const todo = new Todo(name, completed);

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

    changeTheme() {
        if (this.body.classList.contains('dark')) {
            this.body.classList.remove('dark');
            this.body.classList.add('light');
            localStorage.setItem('theme', 'light');
            this.isDark = false;
        } else {
            this.body.classList.remove('light');
            this.body.classList.add('dark');
            this.isDark = true;
            localStorage.setItem('theme', 'dark');
        }
    }
}
