import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public form: any;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('^\\d{9,12}$')]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }

  get nameNotValid(): boolean {
    return this.form.get('name').invalid && this.form.get('name').touched;
  }

  get telNotValid(): boolean {
    return this.form.get('tel').invalid && this.form.get('tel').touched;
  }

  get subjectNotValid(): boolean {
    return this.form.get('subject').invalid && this.form.get('subject').touched;
  }

  get messageNotValid(): boolean {
    return this.form.get('message').invalid && this.form.get('message').touched;
  }

  get emailNotValid(): boolean {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post<any>('https://mailthis.to/elliotsand2@gmail.com', {
        name: this.form.value.name,
        tel: this.form.value.tel,
        email: this.form.value.email,
        subject: this.form.value.subject,
        message: this.form.value.message
      }).subscribe(
        (val) => {
          console.log('POST call successful value returned in body',
            val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
    }
  }
}

