
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
    inputValue;
   
    handleInputChange(event){
        const val = event.target.value.trim(); 
        const words = val.split(' '); 
        const finalWord = words[words.length - 1]; 
        this.searchValue=finalWord;
        console.log('Final word :', finalWord);
    }

    handleClick(event){
        this.ImperativeCall();
    }
        ImperativeCall(){
            console.log('ImperativeCall');
            getData({searchInput:this.searchValue})
            .then((result) => {
                this.displayResult=result; 
                console.log("ID: "+ result.map(a=>a.Id));
            }
        )
            .catch((error) => {
                console.log('Error occured',error);
            })      
             
            }  
        
        }
