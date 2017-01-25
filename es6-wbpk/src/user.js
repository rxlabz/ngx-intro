export default class User{
    
    get mail(){
        return this._mail;
    }
    
    set mail( value ){
        return this._mail;
    }

    constructor(firstName, lastName, mail){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this._mail = mail; 
    }
}