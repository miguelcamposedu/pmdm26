import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {

  emailForm = 'miguel@email.com';
  texto = 'Estáis todos suspensos, eso sí, con papeles';

  getClassParagraph() {
    return 'text-red';
  }

  sendForm() {
    console.log(this.emailForm);
  }
}
