//cookie ไม่กำหนด expires
document.cookie = "username=Lookso";
//with expires no path
document.cookie = "username=John Doe; expires=Thu, 19 Oct 2016 19:00:00 UTC";
//expires and path
document.cookie = "username=John Doe; expires=Thu, 19 Oct 2016 19:00:00 UTC; path=/";

//delete 
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//read 
var cookies = document.cookie;

//ex function

//set cookie
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

//delete
function removeCookie(name) {
    createCookie(name, "", -1);
}

//get 
function getCookie(name) {
    let cname = decodeURIComponent(name)
    let allCookie = decodeURIComponent(document.cookie);
    let cookieArr = allCookie.split('; ')
    
    let cookie = cookieArr.find(c => c.startsWith(`${cname}=`))
    console.log(cookie);
    if(cookie == undefined) {
      return null;
    } else {
      let value = cookie.split('=')[1];
      return value;
    }
}
//set
function set(name, value, expires) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if(expires != undefined) {
      if (expires instanceof Date) {
        cookieText += `; expires=${expires.toUTCString()}`;
        document.cookie = cookieText;
      } 
    } else {
      let exp = new Date();
      exp.setMonth(exp.getMonth() + 1);
      document.cookie = `${cookieText} ; expires = ${exp.toUTCString()}` ;
      
    }

  }
//set auto set date
function set2(name, value) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    let exp = new Date();
    exp.setMonth(exp.getMonth() + 1);
    document.cookie = `${cookieText} ; expires = ${exp.toUTCString()}` ;
  }

//unset
  function unset(name) {
    Cookie.set(name, '', new Date(0));
  }





