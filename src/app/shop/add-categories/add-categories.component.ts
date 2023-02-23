import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html'
})
export class AddCategoriesComponent implements OnInit {

  constructor(private servicio:AccountService, private route:Router, private fb:FormBuilder) { }

  nombreCategoria:string=""

  myForm: FormGroup = this.fb.group({
    nombreCategoria: ['', [Validators.required,Validators.minLength(4)]]
})

  ngOnInit(): void {
  }

  isValidField(field: string){
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
}

  addCategoria(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
    }
    else{
      this.servicio.addCategoria(this.myForm.value.nombreCategoria)
    .subscribe({
      next:(resp)=>{
        console.log("añadida")
        this.route.navigateByUrl('/shop')
      },
      error:(error)=>{
        console.log("error")
      }
    })
  }
    }
    

}
