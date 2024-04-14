import  { LightningElement} from 'lwc';
import getData from '@salesforce/apex/AccountDatatable.getData';

const columns = [
    {label:'Name', fieldName:'Name'},
    {label:'Phone', fieldName:'Phone'}
];


export default class SearchAccount extends LightningElement {
    // @track searchValue;
    searchValue;
    displayResult;
    columns=columns;

    searchHandler(event){
        this.searchValue = event.target.value; 
        this.ImperativeCall();
    }
        ImperativeCall(){
            getData({searchInput:this.searchValue})
            .then((result) => {
                this.displayResult=result;
                console.log("obj: " + JSON.stringify( this.displayResult));       
            }
        
        )
            .catch((error) => {
                console.log('Error occured',error);
            })      
             
            }  
        }
   