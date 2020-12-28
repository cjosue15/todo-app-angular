import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'app-list-todos',
    templateUrl: './list-todos.component.html',
    styleUrls: ['./list-todos.component.scss'],
})
export class ListTodosComponent implements OnInit {
    @Input() todos: Todo[];
    @Output() delete = new EventEmitter<string>();
    @Output() completed = new EventEmitter<string>();
    @Output() clearAll = new EventEmitter<string>();
    todosWithOutFilter: Todo[];
    filter: string;

    constructor() {
        this.todos = [];
        this.todosWithOutFilter = [];
        this.filter = '';
    }

    ngOnInit(): void {}

    ngOnChanges(): void {
        if (this.todos && this.todos.length > 0) {
            this.todosWithOutFilter = this.todos;
            this.changeFilter('all');
        }
    }

    deleteTodo(id: string) {
        this.delete.emit(id);
    }

    changeCompleted(id: string) {
        this.completed.emit(id);
    }

    clearCompleted() {
        this.clearAll.emit();
    }

    changeFilter(type: string) {
        this.filter = type;
        if (type === 'all') {
            this.todos = this.todosWithOutFilter;
        } else {
            const filter = type === 'completed' ? true : false;
            this.todos = [...this.todosWithOutFilter].filter((item: Todo) => item.completed === filter);
        }
    }
}
