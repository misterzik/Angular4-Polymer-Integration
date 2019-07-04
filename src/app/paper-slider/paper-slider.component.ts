import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-slider',
  templateUrl: './paper-slider.component.html',
  styleUrls: ['./paper-slider.component.css']
})
export class PaperSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  polymerElement = `
  paper-slider pin="" max="10" step="1" value="5"<br />
  paper-slider class="red" value="23" max="255"<br />
  paper-slider class="green" value="183" max="255"<br />
  paper-slider class="blue" value="0" max="255" secondary-progress="170"
  `;

  polymerElementInclude = 'link href="assets/bower_components/paper-slider/paper-slider.html" rel="import"';


}
