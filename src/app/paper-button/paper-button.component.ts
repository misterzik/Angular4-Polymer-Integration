import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-button',
  templateUrl: './paper-button.component.html',
  styleUrls: ['./paper-button.component.css']
})
export class PaperButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  polymerElement = `
  paper-button class="pink" <br>
  paper-button raised class="indigo" <br>
  paper-button toggles raised class="green" <br>
  paper-button disabled class="disabled"
`;

  polymerElementInclude = 'link href="assets/bower_components/paper-button/paper-button.html" rel="import"';

}
