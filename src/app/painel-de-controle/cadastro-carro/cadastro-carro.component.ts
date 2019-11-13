import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CadastroCarroService } from './cadastro-carro.service';
import { CarroItem } from 'src/app/marca-detail/carro-item/carro-item.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.css']
})
export class CadastroCarroComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  submitted1 = false;
  carro: CarroItem[] = [];
  @ViewChild('deleteSwal') alert: SwalComponent;

  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private cadastroCarroService: CadastroCarroService,
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
      imagem:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(999)]],
      imagem_interior_1:
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
    this.submitted1 = false;
    this.form.reset();
    this.registrationForm.reset();
    this.removeUploadedFile();
  }

  cadastrar(){
    this.cadastroCarroService.cadastro(this.form.value)
      .subscribe(res => this.carro.push(res));
    console.log('Carro Cadastrada!')
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
    let imagem = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(imagem);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.form.patchValue({
          imagem: reader.result
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
      imagem: [null]
    });
  }

  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
      console.log(this.form.value)
  }

  /*_____________________________________________________________________*/














      /*___________________________CARREGAR IMAGEM__________________________*/


  /*##################### Registration Form #####################*/
  registrationForm1 = this.fb.group({
    imagem_interior_1: [null]
  })

  /*########################## File Upload ########################*/
  @ViewChild('fileInput1') el1: ElementRef;
  imageUrl1: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile1: boolean = true;
  removeUpload1: boolean = false;

  uploadFile1(event) {
    let reader1 = new FileReader(); // HTML5 FileReader API
    let imagem_interior_1 = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader1.readAsDataURL(imagem_interior_1);

      // When file uploads set it to file formcontrol
      reader1.onload = () => {
        this.imageUrl1 = reader1.result;
        this.form.patchValue({
          imagem_interior_1: reader1.result
        });
        this.editFile1 = false;
        this.removeUpload1 = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile1() {
    let newFileList1 = Array.from(this.el.nativeElement.files);
    this.imageUrl1 = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile1 = true;
    this.removeUpload1 = false;
    this.form.patchValue({
      imagem_interior_1: [null]
    });
  }

  // Submit Registration Form
  onSubmit1() {
    this.submitted1 = true;
      console.log(this.form.value)
  }

  /*_____________________________________________________________________*/

}

