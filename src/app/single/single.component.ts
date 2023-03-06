import { Component } from '@angular/core';
import { district } from 'src/assets/data';

@Component({
  selector: 'app-single-page',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SinglePageComponent {
  district: any;

  ngOnInit() {
    let id = localStorage.getItem('title');
    console.log('Redirect to: ', id);
    this.district = district.filter((e) => e.name == id);
    console.log(this.district);
  }
}