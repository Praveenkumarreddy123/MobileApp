import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataserviceService } from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  constructor(public http: Http, public service: DataserviceService) {

  }
  ngOnInit() {
    this.service.listUser().subscribe(result => {
      console.log(result);
    });
  }
}
