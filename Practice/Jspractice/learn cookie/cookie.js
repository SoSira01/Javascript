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

//read 
function readCookie(name) {
    var name1 = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(name1) == 0) {
            return c.substring(name1.length, c.length);
        }
    }
    return null;
}

//call fx
// สร้างคุกกี้ ชื่อ "cookie_name" มีค่าเป็น "testcookie" มีอายุ 7 วัน
createCookie('cookie_name', 'testcookie', 7);
var x = readCookie('cookie_name')
if (x) {
    // นำ x มาใช้งาน
}
