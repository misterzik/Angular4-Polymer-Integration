import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-toggle-btn',
  templateUrl: './paper-toggle-btn.component.html',
  styleUrls: ['./paper-toggle-btn.component.css']
})
export class PaperToggleBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  polymerElement = `paper-toggle-button checked="" class="blue"
  <br />
  paper-toggle-button class="red"
  <br />
  paper-toggle-button class="orange"
  <br />
  paper-toggle-button checked="" class="green"`;

  polymerElementInclude = 'link href="assets/bower_components/paper-toggle-button/paper-toggle-button.html" rel="import"';

}
