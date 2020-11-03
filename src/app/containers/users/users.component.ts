import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { RootReducerState } from 'src/app/reducers';
import { Repo } from 'src/app/services/repo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users : User[] = [];
loading = false;
error = false;
  constructor(private Repo: Repo,private store : Store<RootReducerState>) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    const observer$ = this.Repo.getUserList();
    const userData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    userData$.subscribe(data => {
      this.users = data;
    });
    loading$.subscribe(data => {
      this.loading = data;
    });
    error$.subscribe(data => {
      this.error = data;
    });
  }

  tryAgain() {
    this.Repo.getUserList(true);
  }

}
