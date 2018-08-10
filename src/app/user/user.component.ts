import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from '../services/get-user-data.service';
import { User } from '../shared/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [GetUserDataService]
})
export class UserComponent implements OnInit {

  users: User[];
  private httpSubscription: Subscription;

  constructor(private getUserDataService: GetUserDataService) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.httpSubscription = this.getUserDataService.getUserData().subscribe((data) => {
        this.users = data;
      }
    );
  }
}
