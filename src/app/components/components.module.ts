import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { ListTodosComponent } from './list-todos/list-todos.component';

@NgModule({
    declarations: [InputComponent, ListTodosComponent],
    imports: [CommonModule, FormsModule],
    exports: [InputComponent, ListTodosComponent],
})
export class ComponentsModule {}
