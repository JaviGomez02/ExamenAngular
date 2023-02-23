import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services/account.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loading = false;

    @ViewChild('myForm') myForm!: NgForm;
	initForm = {
    	email: "",
   		password: ""
  	}




    constructor(    
        private service:AccountService, private route:Router
    ) { }

    ngOnInit() {
        
    }

    login(){
        // console.log(this.myForm.value.email, this.myForm.value.password)
        this.service.login(this.myForm.value.email, this.myForm.value.password)
        .subscribe({
            next:(resp)=>{
                console.log("Logueado correctamente")
                this.route.navigateByUrl('')
            },
            error: (erorr)=>{
                console.log("Error")
            }
        })
    }


}