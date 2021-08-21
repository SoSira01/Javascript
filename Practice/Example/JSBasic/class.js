class Dice {

    constructor(gameTitle) {
      this._diceName = gameTitle;
      this._faceValue = 0;
      if (gameTitle === undefined) 
          this._diceName = "Unknow" 
      else
        this._diceName = gameTitle;
    }
    roll() {
      //return Math.floor(Math.random() * 6) + 1;
      this._faceValue = Math.floor(Math.random() * 6) + 1;
      return this._faceValue;
    }
 
    get  faceValue(){
        return this._faceValue;
    }
    set faceValue(faceValue){
        this._faceValue = faceValue;     
    }
    toString(){
        return `Name : ${this._diceName}  faceValue : ${this._faceValue} `
    } 
  }


function game(){
    d1 = dice1._faceValue;
    d2 = dice2._faceValue;

     if (d1 > d2) 
         return "win :" +" "+ dice1._diceName;
     else if(d1 < d2)
         return "Win :" +" "+ dice2._diceName;
     else 
         return "Draw";
         
 
}

//#1
  let dice1 = new Dice("P1");
//   console.log(dice1);
//   console.log(dice1.roll());
//   console.log(dice1["faceValue"]);
//   dice1["faceValue"];
  dice1.roll();
//#2
  let dice2 = new Dice("P2");
//   console.log(dice2);
  dice2.roll(); 

console.log(dice1.toString());
console.log(dice2.toString());


console.log(game());