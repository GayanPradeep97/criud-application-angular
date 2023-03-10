import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  fressnessList =["Brand New", "Second Hand", "Refublished"];
  productForm !: FormGroup;
  constructor(private formBuilder: FormBuilder){

  }

    ngOnInit(): void{
      this.productForm =this.formBuilder.group({
        productname : ['',Validators.required],
        category :['', Validators.required],
        date :['', Validators.required],
        freshness : ['', Validators.required],
        price : ['', Validators.required],
        comment : ['', Validators.required],

      })
      
    }
    addProduct(){
      console.log(this.productForm.value);
    }

}
