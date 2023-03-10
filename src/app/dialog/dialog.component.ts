import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../services/api.service'


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  fressnessList =["Brand New", "Second Hand", "Refublished"];
  productForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService){

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
      if(!this.productForm.valid){
        this.api.postProduct(this.productForm.value).subscribe({
          next:() =>{
            alert("Product add success! ")
          },
          error:() => {
            alert("Error adding product")
          }
        })
      }
      
    }
    

    getProduct(){
      console.log(this.productForm.value);
    }

}
