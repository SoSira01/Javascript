export class Cookie {

      // เป็น function ที่จะ get value ของ cookie ที่เราต้องการ
      static getCookie(name) {
        // decode name ที่รับเข้ามาเเล้ว assign ให้กับ cname
        let cname = decodeURIComponent(name)

        // decode cookie ทั้งหมดออกมาเเล้ว assign ให้กับ allCookie (จะได้เป็น string ยาวๆ)
        let allCookie = decodeURIComponent(document.cookie);

        // ใช้ method split เเยก cookie เเต่ละอันออกมาใส่ไว้ในตัวแปร cookieArr (เก็บเป็น array) โดยจะเเยก cookie เเต่ละอันด้วย '; ' 
        let cookieArr = allCookie.split('; ')
        //console.log(cookieArr)
        
        // ใช้ method find เพื่อหาว่ามี element ตัวไหนใน cookieArr ที่ขึ้นต้นด้วย cname= รึป่าว (ใช้ method startsWith)
        // จากนั้นจะเก็บค่าของ element ที่ตรง condition ไว้ที่ cookie
        let cookie = cookieArr.find(c => c.startsWith(`${cname}=`))
        console.log(cookie);

        // เป็นการเช็คว่า cookie เป็น undefind รึป่าว (ถ้าเป็น undefind เเสดงว่าไม่มี cookie ชื่อนี้อยู่ใน cookie session)
        if(cookie == undefined) {
          //ถ้าเป็น undefind ให้ return null 
          return null;
        } else {
          // เเต่ถ้าไม่เป็น undefind ให้นำ cookie มาเเยกส่วนของ name เเละ value ออกจากกัน เพื่อที่จะได้ return เเค่ value ออกไป
          // จะใช้ split ในการเเยก ซึ่งจะเเยกที่เครื่องหมาย '=' เเละเอาเเค่ index ที่ 1 ซึ่งก็คือ value 
          let value = cookie.split('=')[1];
          return value;
        }

        // let value = cookieArr.find(c => c.startsWith(`${cname}=`)).split('=')[1]
        //return value;
    
    }


    // เป็นการสร้าง cookie ขึ้นมาตามข้อมูลที่ใส่ไว้ใน parameter
    static set(name, value, expires) {
      // เอา name เเละ value มาตามกันตามรูปเเบบนี้ name=value 
      let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      
      // เช็คก่อนว่ามีการใส่ expires มาให้รึป่าว
      // ถ้ามีการใส่ expires มาให้ (คือไม่เป็น undefined)
      if(expires != undefined) {
        if (expires instanceof Date) {
          // ใช้ instanceof เช็คว่า expires ที่รับมาเป็น object ของ Date หรือเปล่า
          // ทำการ set ให้ expirse เป็นเวลามาตรฐาน เเล้วนำต่อกับ cookieText
          cookieText += `; expires=${expires.toUTCString()}`;
          // เพิ่ม cookieText เข้าไปใน cookie session
          document.cookie = cookieText;
        } 

      // เเต่ถ้าไม่มีการใส่ expires มาจะ set ให้วันหมดเป็นอีก 1 เดือนข้างหน้า
      } else {
        // new Date() จะได้วันเวลาของปัจจุบัน
        let exp = new Date();
         // นำเวลาปัจจุบันบวกเพิ่มไปอีก 1 เดือน
        exp.setMonth(exp.getMonth() + 1);

        // นำ exp ที่ set เวลาไว้เเล้วมาเเปลงเป็นเวลามาตรฐานเเล้วก็ต่อกับ cookieText เเละนำไปเพิ่มไว้ใน cookie session
        document.cookie = `${cookieText} ; expires = ${exp.toUTCString()}` ;
        
      }
      
    }
  
    // function ที่จะลบ cookie ตามชื่อที่ใส่มาออก โดยไปกำหนดให้มันหมดอายุ
    static unset(name) {
      Cookie.set(name, '', new Date(0));
    }

  }