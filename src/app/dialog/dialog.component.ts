import { Component, Inject,} from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../services/api.service'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  fressnessList =["Brand New", "Second Hand", "Refublished"];
  productForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef :MatDialogRef<DialogComponent>){}

    ngOnInit():void{
      this.productForm =this.formBuilder.group({
        productname : ['',Validators.required],
        category :['', Validators.required],
        date :['', Validators.required],
        freshness : ['', Validators.required],
        price : ['', Validators.required],
        comment : ['', Validators.required],

      });

      console.log(this.editData);
      if(this.editData){
        this.productForm.controls['productname'].setValue(this.editData.productname);
        this.productForm.controls['category'].setValue(this.editData.category);
        this.productForm.controls['date'].setValue(this.editData.date);
        this.productForm.controls['freshness'].setValue(this.editData.freshness);
        this.productForm.controls['price'].setValue(this.editData.price);
        this.productForm.controls['comment'].setValue(this.editData.comment);
      }
    }

    addProduct(){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value).subscribe({
          next:() =>{
            alert("Product add success! ")
            this.productForm.reset();
            this.dialogRef.close("save");
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
