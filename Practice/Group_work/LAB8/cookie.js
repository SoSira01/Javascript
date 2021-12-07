export class Cookie {

  static getCookie(name) {
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

static set(name, value, expires) {

  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if(expires != undefined) {
    if (expires instanceof Date){
          cookieText += `; expires=${expires.toUTCString()}`;
          document.cookie = cookieText;
    } 
  } else{
      let exp = new Date();
      exp.setMonth(exp.getMonth() + 1);

      document.cookie = `${cookieText} ; expires = ${exp.toUTCString()}` ; 
  }  
}

static unset(name) {
  Cookie.set(name, '', new Date(0));
}
}