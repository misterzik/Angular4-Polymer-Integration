import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-styles',
  templateUrl: './paper-styles.component.html',
  styleUrls: ['./paper-styles.component.css']
})
export class PaperStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  polymerElement = `
  div class="paper-font-display4" <br />
  div class="paper-font-display3" <br />
  div class="paper-font-display2" <br />
  div class="paper-font-display1" <br />
  div class="paper-font-headline" <br />
  div class="paper-font-title" <br />
  div class="paper-font-subhead" <br />
  div class="paper-font-body2" <br />
  div class="paper-font-body1" <br />
  div class="paper-font-caption" <br />
  div class="paper-font-menu" <br />
  div class="paper-font-button"
  `;

  polymerElement_2 = `
  p class="paper-font-body1" <br />
  p class="paper-font-body2"
  `;

  polymerElement_3 = `
  div class="shadow shadow-2dp"<br />
  div class="shadow shadow-3dp"<br />
  div class="shadow shadow-4dp"<br />
  div class="shadow shadow-6dp"<br />
  div class="shadow shadow-8dp"<br />
  div class="shadow shadow-12dp"<br />
  div class="shadow shadow-16dp"
  `;

  polymerElement_4 = `
  div class="paper-material" elevation="1" <br />
  div class="paper-material" elevation="2" <br />
  div class="paper-material" elevation="3" <br />
  div class="paper-material" elevation="4" <br />
  div class="paper-material" elevation="5" <br />
  <br /><small>Please also add the following custom-style:</small>
  <br />
  custom-style<br />
    style is="custom-style" include="paper-material-styles"<br />
      .paper-material {<br />
        padding: 16px;<br />
        margin: 0 16px;<br />
        display: inline-block;<br />
      }<br />
    /style<br />
  /custom-style
  `;

  polymerElementInclude = `
  link href="assets/bower_components/paper-styles/paper-styles.html" rel="import"<br />
  link href="assets/bower_components/paper-styles/color.html" rel="import"
  `;

  polymerElementInclude_3 = `
  link href="assets/bower_components/paper-styles/paper-styles.html" rel="import"<br />
  link href="assets/bower_components/paper-styles/color.html" rel="import"<br />
  link href="assets/bower_components/paper-styles/shadow.html" rel="import"
  `;

  polymerElementInclude_4 = `
  link href="assets/bower_components/paper-styles/paper-styles.html" rel="import"<br />
  link href="assets/bower_components/paper-styles/color.html" rel="import"<br />
  link href="assets/bower_components/paper-styles/shadow.html" rel="import"
  `;
}
