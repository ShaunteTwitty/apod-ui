import { Component, OnInit } from '@angular/core';
import { ApodService} from '../services/apod.service';
import { Payload} from '../../models/payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  payload!: Payload;
 
  constructor(private apodService: ApodService) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto(): void {
    this.apodService.getPhotos().subscribe((response: Payload) => {
      console.log(response);
      this.payload = response;
    });
  }
}
