let person1 = {name: "Ice", scoreEachRound: [], result: []} ; 

let person2 = {name: "Spy", scoreEachRound: [], result: []} ; 

let person3 = {name: "Chit", scoreEachRound: [], result: []} ; 

let person4 = {name: "So", scoreEachRound: [], result: []} ; 

let person5 = {name: "Tee", scoreEachRound: [], result: []} ; 

/*
Object ที่มีชื่อว่า person1 - person5 ใช้เก็บข้อมูลของผู้เล่นแต่ละคน โดยแต่ละ Object ประกอบไปด้วย 
    - key name ที่มี value เป็นชื่อของสมาชิกแต่ละคน
    - key scoreEachRound ที่มี value เป็น Array ใช้เก็บแต้มที่ได้จากลูกเต๋าในแต่ละรอบ เมื่อผู้เล่นคนนั้นเริ่มเล่นเกม
    - key result ที่มี value เป็น Array ใช้เก็บผล แพ้ - ชนะ ในแต่ละรอบ เมื่อผู้เล่นคนนั้นเริ่มเล่นเกม
*/

let dice = {roll: function(){return Math.floor(Math.random() * 6) + 1}} 

/* 
Object ที่มีชื่อว่า dice มี key เดียวคือ roll มี value เป็น function ที่ภายในมีการ return ผลลัพธ์จากการสุ่มเลขจากลูกเต๋า
    - Math.random() ใช้ในการสุ่มตัวเลข โดยค่าที่สุ่มได้จะอยู่ในช่วง 0-1 (ไม่รวม1) คือ 0.0 ถึง 0.999..
    - เอาผลลัพธ์ที่ได้จาก Math.random() คูณด้วย 6 การคูณนี้เป็นเหมือนการระบุค่าสูงสุดของตัวเลขที่เอามาใช้ในการสุ่ม ค่าที่ได้จะอยู่ในช่วง 0-6 (ไม่รวม6) คือ 0 ถึง 0.5999...
    - Math.floor() ใช้ในการแปลงตัวเลขให้เป็นจำนวนเต็ม แบบปัดเศษลง เมื่อเอา Math.random() มาใส่ใน Math.floor() ค่าที่ได้จาก Math.random() จะกลายเป็นจำนวนเต็ม คือ 0 ถึง 5 แทน
    - เอาค่าที่ได้จากการทำงานทั้งหมด มาบวกด้วย 1 เพราะในความเป็นจริงลูกเต๋ามีค่าตั้งแต่ 1 และไม่เกิน 6 แต่ค่าที่สุ่มได้มีโอกาสเป็น 0 และมีค่าสูงสุดไม่เกิน 5 การนำค่าที่ได้จากการสุ่มมาบวก 1 ก็จะตัดโอกาสที่ผลลัพธ์ทั้งหมดจะเป็น 0 และทำให้ค่าสูงสุดของผลลัพธ์ทั้งหมดกลายเป็น 6 จะได้เป็นลูกเต๋าที่มีครบทุกด้าน คือด้านที่ 1 ถึง ด้านที่ 6
*/

function diceGame(player1, player2, total_Round){ 

//ฟังก์ชั่น diceGame ใช้ในการทำงานทั้งหมดใน 1 เกม มีการรับ formal parameter ดังนี้ player1 รับค่าของผู้เล่นคนที่ 1 , player2 รับค่าของผู้เล่นคนที่ 2 , total_Round รับค่าจำนวนรอบที่ต้องการเล่นใน 1 เกม
    player1.scoreEachRound = []; 
    player2.scoreEachRound = [];
    player1.result = [];
    player2.result = [];

//อัพเดท value ของ key ที่มีชื่อว่า scoreEachRound และ result ซึ่งเป็น key ที่อยู่ใน Object ของผู้เล่นแต่ละคน เพื่อเป็นการเซ็ตให้ Array ของ key scoreEachRound และ key result เป็น Array ว่างๆทุกครั้งก่อนเริ่มเกม

    let total_dice_p1 = 0; 
    let total_dice_p2 = 0; 

//สร้างตัวแปรเพื่อใช้เก็บแต้มสะสมจากการทอยลูกเต๋าของผู้เล่นแต่ละคน
for(let round = 1; round <= total_Round; round++){ //for loop ทอยลูกเต๋าตามจำนวนรอบที่กำหนดไว้

    let diceForP1 = dice.roll();  
    let diceForP2 = dice.roll();
    //assign ค่าที่ได้จากfunction ในkey roll จากobject dice ให้กับตัวแปรdiceForP1, diceForP2 เป็นการทอยลูกเต๋าของผู้เล่นแต่ละคน

    player1.scoreEachRound.push(diceForP1); 
    player2.scoreEachRound.push(diceForP2); 
    // .push เป็นคำสั่งที่ใช้ในการเก็บค่าลงไปในarray
    // เก็บค่าที่ได้จากการทอยลูกเต๋าของผู้เล่นแต่ละคนเข้าไปใน array ของ key scoreEachRound

    //ใช้if เพื่อกำหนดเงื่อนไขในการหาผู้แพ้และผู้ชนะ ในแต่ละรอบ
    if(diceForP1 > diceForP2) { // ถ้า diceForP1 มากกว่า diceForP2 จะส่งค่าตามคำสั่งด้านล่าง

        player1.result.push('Win'); //  ทำการpushค่า'Win' ลงในarray result ของผู้เล่นคนที่1

        player2.result.push('Lose'); // ทำการpushค่า'Lose' ลงในarray result ของผู้เล่นคนที่2

    }else if(diceForP2 > diceForP1) { // ถ้า diceForP2 มากกว่า diceForP1 จะส่งค่าตามคำสั่งด้านล่าง

        player1.result.push('Lose'); // ทำการpushค่า'Lose' ลงในarray result ของผู้เล่นคนที่1

        player2.result.push('Win'); // ทำการpushค่า'Win' ลงในarray result ของผู้เล่นคนที่2

    }else { // หากไม่เป็นตามเงื่อนไขสักข้อ

        player1.result.push('Draw'); 

        player2.result.push('Draw'); 
        //ทำการpushค่า'Draw' ลงในarray result ให้ผู้เล่นทั้งสองคน
    }

    total_dice_p1 += diceForP1; 

    total_dice_p2 += diceForP2;   
    // เป็นการเพิ่มแต้มที่ได้จากการทอยลูกเต๋าของผู้เล่นแต่ละคน ลงใน total_dice_p1 , total_dice_p2

}

//ใช้if เพื่อกำหนดเงื่อนไขในการหาผู้ชนะ ในเกมนั้นๆ
if(total_dice_p1 > total_dice_p2) {  // ถ้าแต้มสะสมของผู้เล่นคนที่1 > ผู้เล่นคนที่2 จะreturn ชื่อของผู้เล่นคนที่1

    return `${player1.name} Win!`;

}else if(total_dice_p2 > total_dice_p1) { // ถ้าแต้มสะสมของผู้เล่นคนที่2 > ผู้เล่นคนที่1 จะreturn ชื่อของผู้เล่นคนที่2

    return `${player2.name} Win!`;

}else { // หากแต้มสะสมของผู้เล่นทั้งสอง มีค่าเท่ากัน จะreturn คำว่า 'Draw!'

    return 'Draw!';

}
}

//ตัวอย่างการแสดงการทำงาน

console.log(diceGame(person5, person1, 5)) // กำหนดให้person5 เป็นผู้เล่นคนที่1 และ person1 เป็นผู้เล่นคนที่2 กำหนดรอบในการเล่นอยู่ที่ 5รอบ