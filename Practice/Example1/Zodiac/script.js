function findZodiac(year){
 switch (year % 12) {
            case 0:
                return zodiac.MONKEY;
            case 1:
                return zodiac.ROOSTER;
            case 2:
                return zodiac.DOG;
            case 3:
                return zodiac.PIG;
            case 4:
                return zodiac.RAT;
            case 5:
                return zodiac.OX;
            case 6:
                return zodiac.TIGER;
            case 7:
                return zodiac.RABBIT;
            case 8:
                return zodiac.DRAGON;
            case 9:
                return zodiac.SNAKE;
            case 10:
                return zodiac.HORSE;
            case 11:
                return zodiac.SHEEP;
           
        }
 }

 const zodiac = {
   MONKEY: "monkey",
   ROOSTER: "rooster",
   DOG: "dog",
   PIG: "pig",
   RAT: "rat",
   OX: "ox",
   TIGER: "tiger",
   RABBIT: "rabbit",
   DRAGON: "dragon",
   SNAKE: "snake",
   HORSE: "horse",
   SHEEP: "sheep",
 };

 let year=prompt("Enter a year ");
 alert(findZodiac(year));
