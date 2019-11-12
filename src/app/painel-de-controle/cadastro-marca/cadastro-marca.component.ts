import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Marca } from 'src/app/marcas/marca/marca.model';
import { CadastroMarcaService } from './cadastro-marca.service';
import { HttpClient } from '@angular/common/http';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-cadastro-marca',
  templateUrl: './cadastro-marca.component.html',
  styleUrls: ['./cadastro-marca.component.css']
})
export class CadastroMarcaComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  marca: Marca[] = [];
  @ViewChild('deleteSwal') alert: SwalComponent;

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private cadastroMarcaService: CadastroMarcaService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.validation();
  }

  validation(){
    this.form = this.fb.group({
      nome:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      detalhe:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      sobre:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      file:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(999)]],
      autor: 
      [null,
      [Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
      data: 
      [null,
      [Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
    })
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    this.registrationForm.reset();
    this.removeUploadedFile();
  }

  cadastrar(){
    this.cadastroMarcaService.cadastro(this.form.value)
      .subscribe(res => this.marca.push(res));
    console.log('Marca Cadastrada!')
    this.alert.show();
    this.onCancel();
    this.removeUploadedFile();
  }

  /*___________________________CARREGAR IMAGEM__________________________*/


  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    file: [null]
  })

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.form.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.form.patchValue({
      file: [null]
    });
  }

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
      console.log(this.form.value)
  }

  /*_____________________________________________________________________*/

}