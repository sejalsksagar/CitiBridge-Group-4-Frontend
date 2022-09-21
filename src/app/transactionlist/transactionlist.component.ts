import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Transaction } from '../transaction/transaction';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit {

  searchText1 = "";
  searchText2 = "";
  searchText3 = "";
  searchText4 = "";
  transactions: Array<Transaction> = [];
  constructor(private _service:NgserviceService) { 
    this.getTransactions();
  }

  ngOnInit(): void{
   // this.getTransactions();
  }

  getTransactions(){
    this._service.getAllTransactions().subscribe(
      data => this.transactions = data, 
      error => console.log("Exception occured!"),
    )
  }

  screenTransactions(){
    this._service.getScreenedTransactions().subscribe(
      data => this.transactions = data, 
      error => console.log("Exception occured!"),
    );
    //window.location.reload();
  }

  SearchByPayerName(){
    if(this.searchText1!== ""){
      let searchValue = this.searchText1.toLocaleLowerCase();
     
      this.transactions = this.transactions.filter((transaction:any) =>{
            return transaction.payerName.toLocaleLowerCase().match(searchValue);
    });
            console.log(this.transactions);
          }
          else { this.getTransactions(); } 
  }

  SearchByPayeeName(){
    if(this.searchText2!== ""){
      let searchValue = this.searchText2.toLocaleLowerCase();
     
      this.transactions = this.transactions.filter((transaction:any) =>{
            return transaction.payeeName.toLocaleLowerCase().match(searchValue);
    });
            console.log(this.transactions);
          }
          else { this.getTransactions(); } 
  }

  SearchByValidate(){
    if(this.searchText3!== ""){
      let searchValue = this.searchText3.toLocaleLowerCase();
     
      this.transactions = this.transactions.filter((transaction:any) =>{
            return transaction.validate.toLocaleLowerCase().match(searchValue);
    });
            console.log(this.transactions);
          }
          else { this.getTransactions(); } 
  }

  SearchByScreen(){
    if(this.searchText4!== ""){
      let searchValue = this.searchText4.toLocaleLowerCase();
     
      this.transactions = this.transactions.filter((transaction:any) =>{
        if(transaction.screen != null)
            return transaction.screen.toLocaleLowerCase().match(searchValue);
    });
            console.log(this.transactions);
          }
          else { this.getTransactions(); } 
  }

}

