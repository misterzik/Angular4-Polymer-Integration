import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-item',
  templateUrl: './paper-item.component.html',
  styleUrls: ['./paper-item.component.css']
})
export class PaperItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  polymerElement = `
  custom-style<br />
    style is="custom-style"<br />
      paper-item.fancy { <br />
        --paper-item-focused: { <br />
          background: var(--paper-amber-500); <br />
          font-weight: bold; <br />
        };<br />
        --paper-item-focused-before: {<br />
          opacity: 0;<br />
        };<br />
      }<br />
    /style<br />
  /custom-style<br />
  <br /><br />
  div role="listbox"<br />
    paper-item class="fancy"<br />
      Inbox<br />
    /paper-item<br /><br />

    paper-item class="fancy"<br />
      Starred<br />
    /paper-item<br /><br />

    paper-item class="fancy"<br />
      Sent mail<br />
    /paper-item<br />
  /div
  `;

  polymerElementInclude = `
  link href="assets/bower_components/paper-item/paper-item.html" rel="import"<br />
  link href="assets/bower_components/paper-item/paper-icon-item.html" rel="import"
  `;

}
