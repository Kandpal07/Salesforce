
import  { LightningElement} from 'lwc';
import getData from '@salesforce/apex/AccountDatatable.getData';

const columns = [
    {label:'Name', fieldName:'Name'},
    {label:'Phone', fieldName:'Phone'}
];


export default class SearchAccount extends LightningElement {
    searchValue;
    displayResult;
    columns=columns;
    accountName;
    accountPhone;
      
    handleNameInputChange(event){
        const val = event.target.value.trim(); 
        const words = val.split(' '); 
        const finalWord = words[words.length - 1]; 
        this.accountName=finalWord;
        console.log('Final name :', this.accountName);
    }
    handlePhoneInputChange(event){
        const val = event.target.value.trim(); 
        const words = val.split(' '); 
        const finalName = words[words.length - 1]; 
        this.accountPhone=finalName;
        console.log('Final phone :', this.accountPhone);
    }


    handleClick(event){
        this.ImperativeCall();
    }
        ImperativeCall(){
            console.log('ImperativeCall');
            getData({inputName:this.accountName,inputPhone:this.accountPhone})
            .then((result) => {
                this.displayResult=result; 
                console.log("Phone: "+ result.map(a=>a.Phone));
            }
        )
            .catch((error) => {
                console.log('Error occured',error);
            })      
             
            }  
        
        }
