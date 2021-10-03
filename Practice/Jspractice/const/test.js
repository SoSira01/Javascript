let numArray = [];
class ranDom{
constructor(){
   this._numArray = numArray;
 } 

 randomNumArray(){ 
    // let numArray = [];
    for(let i=0; i<3 ;i++){
      numArray[i] = Math.floor(Math.random() * 100) + 1;
    } 
      return  this._numArray ;
 }  
  
get numArray(){return this._numArray;}


toString(){
    return `Random Number = ${this._numArray}`;
 }
}

let r = new ranDom();
r.randomNumArray();
console.log(r.toString());

