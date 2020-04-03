import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  data;

  public slides = []

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnChanges(): void {
    console.log('asdasdasdasdasdasd');
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(v => this.data = v);
    console.log(this.data);

    var x = new Array(this.data.length);

    for (var i = 0; i < this.data.length; i++) {
      x[i] = { 'image':'./assets/img/brochures/' + this.data.path + '/' + (i+1).toString() + '.png' }
    }

    this.slides = x;
  }

}
