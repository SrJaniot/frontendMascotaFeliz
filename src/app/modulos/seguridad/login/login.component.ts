import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidador:FormGroup=this.Fb.group({
    'usuario':['',[Validators.required,Validators.email]],
    'clave':['',[Validators.required]]
  })


  constructor(private Fb:FormBuilder) { }

  ngOnInit(): void {
  }

  loginUsurario(){
    let usuario= this.fgValidador.controls["usuario"].value;
    let clave=this.fgValidador.controls["clave"].value;
    let clavesifrada= 

  }




}
