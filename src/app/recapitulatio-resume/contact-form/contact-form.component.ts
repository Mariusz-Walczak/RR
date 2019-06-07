import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component ({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [ './contact-form.component.scss' ]
})
export class ContactFormComponent implements OnInit {

  contactFormData = {
    name: '',
    company: '',
    phone: '',
    mail: '',
    body: ''
  };

  contactForm: FormGroup;

  ngOnInit () {
    this.contactForm = new FormGroup ({
      name: new FormControl (
        this.contactFormData.name,
        [
          Validators.required,
          Validators.minLength (2),
          Validators.pattern ('[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]*')
        ]),
      company: new FormControl (
        this.contactFormData.company,
        [
          Validators.minLength (2)
        ]),
      phone: new FormControl (this.contactFormData.phone,
        [
          Validators.required,
          Validators.minLength (9),
          Validators.maxLength (10),
          Validators.pattern ('[0-9]*')
        ]),
      mail: new FormControl (
        this.contactFormData.mail,
        [
          Validators.required,
          Validators.minLength (6),
          Validators.email
        ]),
      body: new FormControl (
        this.contactFormData.body,
        [
          Validators.required,
          Validators.minLength (10)
        ])
    });
  }

  get name () {
    return this.contactForm.get ('name');
  }

  get company () {
    return this.contactForm.get ('company');
  }

  get phone () {
    return this.contactForm.get ('phone');
  }

  get mail () {
    return this.contactForm.get ('mail');
  }

  get body () {
    return this.contactForm.get ('body');
  }

  getErrorMessage (field) {
    let message = '';
    if (field === 'name') {
      message = this.name.hasError ('required') ? 'Hej, uzupełnij to pole' :
        this.name.hasError ('minLength') ? 'No dobra, a teraz podaj swoje imię' :
          this.name.hasError ('pattern') ? 'No dobra, a teraz podaj swoje imię' :
            '';
    }

    if (field === 'company') {
      message = this.company.hasError ('minLength') ? 'Podaj proszę, dobrą nazwę' :
        '';
    }

    if (field === 'phone') {
      message = this.phone.hasError ('required') ? 'Hej, uzupełnij to pole' :
        this.phone.hasError ('pattern') ? 'Telefon, to tylko cyferki' :
          this.phone.hasError ('minLength') ? 'No dobra, brakuje kilku cyferek' :
            this.phone.hasError ('pattern') ? 'No dobra, trochę za dużo tych cyferek' :
              '';
    }

    if (field === 'mail') {
      message = this.mail.hasError ('required') ? 'Hej, uzupełnij to pole' :
        this.mail.hasError ('minLength') ? 'Fajnie, a teraz ten prawdziwy poproszę' :
          this.mail.hasError ('email') ? 'Fajnie, a teraz ten prawdziwy poproszę' :
            '';
    }

    if (field === 'body') {
      message = this.body.hasError ('required') ? 'Hej, uzupełnij to pole' :
        this.body.hasError ('minLength') ? 'No dobra, rozpisz się trochę' :
          '';
    }

    return message;
  }

  sendForm(){
    console.log(this.contactForm);
  }

}
