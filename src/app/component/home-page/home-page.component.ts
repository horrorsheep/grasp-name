import { Component, OnInit } from '@angular/core';
import { NameInfoService } from 'src/app/service/name-info.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private infoservice: NameInfoService) { }

  ngOnInit() {
    this.infoservice.getNameInfo('david').subscribe(info => console.log(info));
  }

}
