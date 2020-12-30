import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
    newTodo: string;
    completed: boolean;
    @Output() onSubmit = new EventEmitter<{ name: string; completed: boolean }>();
    constructor() {
        this.newTodo = '';
        this.completed = false;
    }

    ngOnInit(): void {}

    changeCompleted() {
        this.completed = !this.completed;
    }

    submitInput() {
        if (this.newTodo) {
            this.onSubmit.emit({ name: this.newTodo, completed: this.completed });
            this.newTodo = '';
            this.completed = false;
        }
    }
}
