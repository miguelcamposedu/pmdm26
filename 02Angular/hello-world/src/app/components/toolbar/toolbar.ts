import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html',
})
export class Toolbar {
  titulo = signal('Hola Mundo');
}
