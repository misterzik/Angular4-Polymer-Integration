import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-progress',
  templateUrl: './paper-progress.component.html',
  styleUrls: ['./paper-progress.component.css']
})
export class PaperProgressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  polymerElement = `
  paper-progress class="flex" value="800" min="100" max="1000"
  <br />
  paper-progress class="flex" value="30" secondary-progress="70"
  <br />
  paper-progress class="flex" indeterminate=""`;

  polymerElementInclude = 'link href="assets/bower_components/paper-progress/paper-progress.html" rel="import"';

}
