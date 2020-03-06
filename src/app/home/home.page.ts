import {Component, OnInit} from '@angular/core';
import {Link, Links} from '../../../api/imports/api/links';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  links: Observable<Link[]>;

  ngOnInit(): void {
    this.links = Links.find({});
  }

  constructor() {
  }

}
