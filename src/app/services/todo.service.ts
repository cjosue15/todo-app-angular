import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../models/Todo';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    constructor(private fs: AngularFirestore) {}

    getTodos() {
        return this.fs
            .collection<Todo>('todos', (ref) => ref.orderBy('date', 'desc'))
            .valueChanges({ idField: 'id' });
    }

    addTodo(todo: Todo) {
        return this.fs.collection<Todo>('todos').add({ ...todo });
    }

    updateTodo(id: string, completed: boolean) {
        return this.fs.collection<Todo>('todos').doc(id).update({ completed });
    }

    deleteTodo(id: string) {
        return this.fs.collection<Todo>('todos').doc(id).delete();
    }

    clearAll() {
        this.fs
            .collection<Todo>('todos', (ref) => ref.where('completed', '==', true))
            .get()
            .subscribe((snapshot) => {
                snapshot.forEach((item) => {
                    item.ref.delete();
                });
            });
    }
}
