import { Component } from '@angular/core';
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections'; // Optional


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Polymer Usable Web Components';
  titleMotto = `
    CMS Production ready, Web Components, If you update any backend repo,
    Please make sure to also update this resuable codes.
    Please open and close all reusable codes brackets`;
  logo = '../assets/images/logo.png';
}
