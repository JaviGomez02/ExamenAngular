import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services/account.service';
import { Usuario, User } from '../_interfaces/user';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {


    constructor(private fb:FormBuilder, private servicio:AccountService, private route:Router) { }

    myForm: FormGroup = this.fb.group({
        nombre: ['', [Validators.required,Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rol:['', [Validators.required]]
  })

  isValidField(field: string){
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
}

enviar(){
    if (this.myForm.invalid){
        this.myForm.markAllAsTouched()
      }
    else{
        console.log(this.myForm.value)


        this.servicio.register(this.myForm.value.nombre, this.myForm.value.email, this.myForm.value.password, this.myForm.value.rol)
        .subscribe({
            next:(resp)=>{
                console.log("Usuario añadido")
                this.route.navigateByUrl('/users')
            },
            error: (erorr)=>{
                console.log("Error")
            }
        })
    }
}

    ngOnInit() {
        
    }

    
}