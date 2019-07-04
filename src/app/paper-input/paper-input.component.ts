import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-input',
  templateUrl: './paper-input.component.html',
  styleUrls: ['./paper-input.component.css']
})
export class PaperInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  polymerElement = `
  paper-input label="Name" name="name" required
`;

  polymerElementInclude = 'link href="assets/bower_components/paper-input/paper-input.html" rel="import"';

}
