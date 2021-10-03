class Play {
    constructor(firstName,lastName,Gender){
    this._fName = firstName;
    this._lName = lastName;
    this._Gender = Gender;
 
    if(firstName) this._fName = firstName;  //if firstName have value return firstName. 
    else this._fName = 'unKnown';           // if don't have firstName return unknown.

    if(Gender == 'M') this._Gender = 'MR'   //if gender is equals  M return MR 
    else this._Gender = 'MS';               //if not return MS
    }
  get firstName(){return this._fName;}
  get lastName(){return this._lName;}
  get Sex(){return this.Sex;}
  
  toString(){
      return ' FirstName : ' + this._fName +  
             '\n' + ' LastName : ' +  this._lName +
             '\n' + ' Title : ' + this._Gender ;
  }
}

let p = new Play("CAT","DOG","F"); //call class Play as p & add firstname lastname gender

console.log(p.toString());
