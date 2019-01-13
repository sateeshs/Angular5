import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
constructor(private domSanitizer: DomSanitizer,
            public matIconRegistry: MatIconRegistry,
            public router: Router
            ) {

}
  ngOnInit() {

  }
}
