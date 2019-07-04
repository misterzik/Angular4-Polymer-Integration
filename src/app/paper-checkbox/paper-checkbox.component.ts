import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-checkbox',
  templateUrl: './paper-checkbox.component.html',
  styleUrls: ['./paper-checkbox.component.css']
})
export class PaperCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  polymerElement = `
  paper-checkbox checked="" (click)="function()" OR<br />
  paper-checkbox
`;

  polymerElementInclude = 'link href="assets/bower_components/paper-input/paper-input.html" rel="import"';


}
