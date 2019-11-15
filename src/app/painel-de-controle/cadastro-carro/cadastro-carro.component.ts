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
  submitted2 = false;
  submitted3 = false;
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
      link:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      nome:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      detalhe:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      cavalos:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      performance:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      seguranca1:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      seguranca2:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      seguranca3:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      direcao:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      freios:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      transmissao:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      motorizacao:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      imagem:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(999)]],
      imagem_interior_1:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(999)]],
      imagem_interior_2:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(999)]],
      imagem_interior_3:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(999)]],
      marcaId: 
      [null,
      [Validators.required, Validators.minLength(1), Validators.maxLength(250)]],
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
    this.submitted2 = false;
    this.submitted3 = false;
    this.form.reset();
    this.registrationForm.reset();
    this.removeUploadedFile();
    this.removeUploadedFile1();
    this.removeUploadedFile2();
    this.removeUploadedFile3();
  }

  cadastrar(){
    this.cadastroCarroService.cadastro(this.form.value)
      .subscribe(res => this.carro.push(res));
    console.log('Carro Cadastrada!')
    this.alert.show();
    this.onCancel();
    this.removeUploadedFile();
    this.removeUploadedFile1();
    this.removeUploadedFile2();
    this.removeUploadedFile3();
  }




/*___________________________CARREGAR IMAGEM__________________________*/


  /*##################### Registro no Formulario #####################*/
  registrationForm = this.fb.group({
    file: [null]
  })

  /*########################## Upload da imagem ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let imagem = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(imagem);

      // Carregamento das imagens
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.form.patchValue({
          imagem: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // Detector de mudancas de imagens
      this.cd.markForCheck();
    }
  }

  // Funcao para remover o upload da imagem
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.form.patchValue({
      imagem: [null]
    });
  }

  // Registro de acesso ao formulario
  onSubmit() {
    this.submitted = true;
      console.log(this.form.value)
  }

  /*_____________________________________________________________________*/

  /*___________________________CARREGAR IMAGEM INTERNA 1__________________________*/


  /*##################### Registro no Formulario #####################*/
  registrationForm1 = this.fb.group({
    imagem_interior_1: [null]
  })

  /*########################## Upload da imagem ########################*/
  @ViewChild('fileInput1') el1: ElementRef;
  imageUrl1: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile1: boolean = true;
  removeUpload1: boolean = false;

  uploadFile1(event) {
    let reader1 = new FileReader(); // HTML5 FileReader API
    let imagem_interior_1 = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader1.readAsDataURL(imagem_interior_1);

      // Carregamento das imagens
      reader1.onload = () => {
        this.imageUrl1 = reader1.result;
        this.form.patchValue({
          imagem_interior_1: reader1.result
        });
        this.editFile1 = false;
        this.removeUpload1 = true;
      }
      // Detector de mudancas de imagens
      this.cd.markForCheck();
    }
  }

  // Funcao para remover o upload da imagem
  removeUploadedFile1() {
    let newFileList1 = Array.from(this.el.nativeElement.files);
    this.imageUrl1 = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile1 = true;
    this.removeUpload1 = false;
    this.form.patchValue({
      imagem_interior_1: [null]
    });
  }

  // Registro de acesso ao formulario
  onSubmit1() {
    this.submitted1 = true;
      console.log(this.form.value)
  }

  /*_____________________________________________________________________*/

  /*___________________________CARREGAR IMAGEM INTERNA 2__________________________*/


  /*##################### Registro no Formulario #####################*/
  registrationForm2 = this.fb.group({
    imagem_interior_2: [null]
  })

  /*########################## Upload da imagem ########################*/
  @ViewChild('fileInput2') el2: ElementRef;
  imageUrl2: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile2: boolean = true;
  removeUpload2: boolean = false;

  uploadFile2(event) {
    let reader2 = new FileReader(); // HTML5 FileReader API
    let imagem_interior_2 = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader2.readAsDataURL(imagem_interior_2);

      // Carregamento das imagens
      reader2.onload = () => {
        this.imageUrl2 = reader2.result;
        this.form.patchValue({
          imagem_interior_2: reader2.result
        });
        this.editFile2 = false;
        this.removeUpload2 = true;
      }
      // Detector de mudancas de imagens
      this.cd.markForCheck();
    }
  }

  // Funcao para remover o upload da imagem
  removeUploadedFile2() {
    let newFileList2 = Array.from(this.el.nativeElement.files);
    this.imageUrl2 = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile2 = true;
    this.removeUpload2 = false;
    this.form.patchValue({
      imagem_interior_2: [null]
    });
  }

  // Registro de acesso ao formulario
  onSubmit2() {
    this.submitted2 = true;
      console.log(this.form.value)
  }

  /*_____________________________________________________________________*/

  /*___________________________CARREGAR IMAGEM INTERNA 3__________________________*/


  /*##################### Registro no Formulario #####################*/
  registrationForm3 = this.fb.group({
    imagem_interior_2: [null]
  })

  /*########################## Upload da imagem ########################*/
  @ViewChild('fileInput3') el3: ElementRef;
  imageUrl3: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile3: boolean = true;
  removeUpload3: boolean = false;

  uploadFile3(event) {
    let reader3 = new FileReader(); // HTML5 FileReader API
    let imagem_interior_3 = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader3.readAsDataURL(imagem_interior_3);

      // Carregamento das imagens
      reader3.onload = () => {
        this.imageUrl3 = reader3.result;
        this.form.patchValue({
          imagem_interior_3: reader3.result
        });
        this.editFile3 = false;
        this.removeUpload3 = true;
      }
      // Detector de mudancas de imagens
      this.cd.markForCheck();
    }
  }

  // Funcao para remover o upload da imagem
  removeUploadedFile3() {
    let newFileList3 = Array.from(this.el.nativeElement.files);
    this.imageUrl3 = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile3 = true;
    this.removeUpload3 = false;
    this.form.patchValue({
      imagem_interior_3: [null]
    });
  }

  // Registro de acesso ao formulario
  onSubmit3() {
    this.submitted3 = true;
      console.log(this.form.value)
  }

  /*_____________________________________________________________________*/
}
