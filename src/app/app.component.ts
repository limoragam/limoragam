import { Component } from '@angular/core';
import { AttributesService } from './visuals/attributes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AttributesService]
})
export class AppComponent {
  title = 'Limor Agam';
}
