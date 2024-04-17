import { LightningElement } from 'lwc';
import getData from '@salesforce/apex/AccountDatatable.getData';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone' }
];

export default class SearchAccount extends LightningElement {
    searchValue;
    displayResult;
    columns = columns;
    accountName;
    accountPhone;

    handleInputChange(event) {
        const fieldName = event.target.dataset.field;
        const val = event.target.value.trim();
        const words = val.split(' ');
        const finalWord = words[words.length - 1];
        if (fieldName === 'Name') {
            this.accountName = finalWord;
            console.log('Final name:', this.accountName);
        } else if (fieldName === 'Phone') {
            this.accountPhone = finalWord;
            console.log('Final phone:', this.accountPhone);
        }
    }

    handleClick(event) {
        console.log('ImperativeCall');
        getData({ inputName: this.accountName, inputPhone: this.accountPhone })
            .then(result => {
                this.displayResult = result;
                console.log("Phone: "+ result.map(a=>a.Phone));
            })
            .catch(error => {
                console.log('Error occurred', error);
            });
    }
}