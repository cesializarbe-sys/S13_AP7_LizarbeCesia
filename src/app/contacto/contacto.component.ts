import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  form: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:   ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email:    ['', [Validators.required, Validators.email]],
      asunto:   ['', [Validators.required, Validators.minLength(5)]],
      mensaje:  ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
      terminos: [false, [Validators.requiredTrue]]
    });
  }

  // Getters para acceder fácilmente en el template
  get f() { return this.form.controls; }
  get nombre()   { return this.form.get('nombre')!; }
  get email()    { return this.form.get('email')!; }
  get asunto()   { return this.form.get('asunto')!; }
  get mensaje()  { return this.form.get('mensaje')!; }
  get terminos() { return this.form.get('terminos')!; }

  isInvalid(ctrl: AbstractControl): boolean {
    return ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted);
  }

  getError(ctrl: AbstractControl): string {
    if (ctrl.errors?.['required'] || ctrl.errors?.['requiredTrue']) return 'Este campo es obligatorio.';
    if (ctrl.errors?.['email'])     return 'Ingresa un correo electrónico válido.';
    if (ctrl.errors?.['minlength']) {
      const req = ctrl.errors['minlength'].requiredLength;
      return `Mínimo ${req} caracteres requeridos.`;
    }
    if (ctrl.errors?.['maxlength']) {
      const req = ctrl.errors['maxlength'].requiredLength;
      return `Máximo ${req} caracteres permitidos.`;
    }
    return '';
  }

  get mensajeChars() { return this.mensaje.value?.length ?? 0; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    this.loading = true;
    // Simular envío (500ms)
    setTimeout(() => {
      this.loading = false;
      this.success = true;
      this.form.reset();
      this.submitted = false;
    }, 1200);
  }

  resetForm() {
    this.success = false;
    this.submitted = false;
    this.form.reset();
  }
}
