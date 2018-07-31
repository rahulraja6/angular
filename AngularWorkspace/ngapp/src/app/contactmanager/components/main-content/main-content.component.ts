import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
user: User;
  constructor(
    private route: ActivatedRoute,
    private service: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.user = this.service.getUserById(id);
      }
    );
  }

}
