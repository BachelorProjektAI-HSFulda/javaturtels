import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { groupsSearchPage } from '../groupsSearch/groupsSearch';
import { Todo } from "./groups.model";
import { groupsContactPage } from '../groupsContact/groupsContact';
import { camerSeitePage } from '../camerSeite/camerSeite';
/*
  Generated class for the groups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-groups',
	templateUrl: 'groups.html'
})

export class groupsPage implements OnInit {
    todoList: Array<Todo> = new Array<Todo>();

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ngOnInit() {
        let savedTodos = localStorage.getItem("todos-list");
        if (savedTodos) {
            this.todoList = JSON.parse(savedTodos);
        }
    }

    add() {
        let title = prompt("Create a New Group");
        if (title) {
            this.todoList.push(new Todo(title));
            this.save();
        }

        this.navCtrl.push(groupsContactPage, {Title : title}); 
    }


    edit(todo: Todo)
    {
        let title = prompt("Edit ", todo.title);
        if (title && title != todo.title) {
            todo.title = title;
            this.save();
        }

        this.navCtrl.push(groupsContactPage, {Title : title}); 
    }

    delete(index: number) {
        this.todoList.splice(index, 1);
        this.save();
    }

    toggleStatus(todo: Todo) {
        todo.completed = !todo.completed;
        this.save();
    }

    save() {
        localStorage.setItem("todos-list", JSON.stringify(this.todoList));
    }

	

    search()
    {
        this.navCtrl.push(groupsSearchPage);
    }

    gotoCamera() {
        this.navCtrl.push(camerSeitePage);
    }
	
}



