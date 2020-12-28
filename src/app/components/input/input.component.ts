import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
    newTodo: string;
    @Output() onSubmit = new EventEmitter<string>();
    constructor() {
        this.newTodo = '';
    }

    ngOnInit(): void {}

    submitInput() {
        if (this.newTodo) {
            this.onSubmit.emit(this.newTodo);
            this.newTodo = '';
        }
    }
}
