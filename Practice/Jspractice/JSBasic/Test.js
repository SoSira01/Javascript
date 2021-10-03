let student = { sid : '63130500118' , 
                sName : 'Siraphob Phairoh' 
            }       //เก็บข้อมูลนักศึกษา

let studentHistory = { HistoryRegister : { Year1Semester1Register : ['GEN101','GEN121','INT100','INT101','INT102','INT114','LNG220'],
                                           Year1Semester2Register : ['GEN111','INT103','INT104','INT105','INT107','INT200','LNG332']
                                         },
                       CreditsHistory : { Year1Semester1Credits : [1,3,3,3,1,3,3],
                                          Year1Semester2Credits : [3,3,3,1,3,1,3],
                                        },
                       GradeHistoty : {   Year1Semester1Grade : ['A','B','C+','C+','B','C+','B+'],
                                          Year1Semester2Grade : ['B+','C','C+','B','C+','C','A']
                                      },
}  //เก็บประวัตคะแนนการลงทะเบียนและเกรด

 let credits1,credits2 = [];
  credits1 = studentHistory.CreditsHistory.Year1Semester1Credits;
  credits2 = studentHistory.CreditsHistory.Year1Semester2Credits;   
  //กำหนดให้ credit 1 credit2 มีค่าเท่ากับ  Year1Semester1Credits และ Year1Semester2Credits

 let s1 = 0;
 let s2 = 0;         //set ค่า default ของ s1 s2 เป็น 0 
 for (let i = 0; i < studentHistory.CreditsHistory.Year1Semester1Credits.length; i++) { 
     s1 += credits1[i];
     s2 += credits2[i];         
     sum = s1+s2 ;                 //ผลรวมของ ภาคเรียนที่ 1 + 2 
 }
  console.log("Year1Semester1Credits: " + s1 +
             "\nYear1Semester2Credits : " + s2 +
             "\nYear1Credits : " + sum);


 let GradeHis1,GradeHis2 = [];
  GradeHis1 = studentHistory.GradeHistoty.Year1Semester1Grade;
  GradeHis2 = studentHistory.GradeHistoty.Year1Semester2Grade;   
//กำหนดให้ GradeHis1 GradeHis2 มีค่าเท่ากับ  Year1Semester1Grade และ Year1Semester2Grade
let g1 = 0;
let g2 = 0;


   

function fg1(){
 for (let i = 0; i < studentHistory.GradeHistoty.Year1Semester1Grade.length; i++) { 
 g1 = GradeHis1[i];
 if(g1 == 'A' ) console.log(4);
 else if(g1 =='B+')console.log(3.5);
 else if(g1 =='B')console.log(3);
 else if(g1 =='C+')console.log(2.5);
 else if(g1 =='C')console.log(2);
 else if(g1 =='D+')console.log(1.5);
 else if(g1 =='D')console.log(1);
 else if(g1 =='F' || g1 =='Fa' || g1 == 'Fe')console.log(1);          //เปลียน A B C เป็น เกรด 4 3 2 1
 else console.log(0);
}
}
function fg2(){  
 for (let i = 0; i < studentHistory.GradeHistoty.Year1Semester2Grade.length; i++) { 
 g2 = GradeHis1[i]; 
 if(g2 == 'A' ) console.log(4);
 else if(g2 =='B+')console.log(3.5);
 else if(g2 =='B')console.log(3);
 else if(g2 =='C+')console.log(2.5);
 else if(g2 =='C')console.log(2);
 else if(g2 =='D+')console.log(1.5);
 else if(g2 =='D')console.log(1);
 else if(g2 =='F' || g1 =='Fa' || g1 == 'Fe')console.log(1);         
 else console.log(0);
}


}

credits1+g1


