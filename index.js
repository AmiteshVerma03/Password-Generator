const lowercase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];
const uppercase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
const numbers = [
  '0','1','2','3','4','5','6','7','8','9'
];
const symbols = [
  '!','@','#','$','%','^','&','*',
  '(',')','-','_','=','+',
  '[',']','{','}','|',
  ';',':',"'",'"',
  ',', '.', '<','>','?',
  '/','~','`'
];
const merged=[...lowercase,...numbers,...symbols,...uppercase];
// let random=Math.random();
let Generate=document.getElementById("generate");
let password1=document.getElementById("first");
let password2=document.getElementById("second");
function create(){
    let text1="";
    for(let i=0;i<10;i++){
        let x=Math.floor(Math.random()*93);
        text1=text1+merged[x];
    }
    password1.textContent=text1;
    let text2="";
    for(let i=0;i<10;i++){
        let x=Math.floor(Math.random()*93);
        text2=text2+merged[x];
    }
    password2.textContent=text2;
}
Generate.addEventListener("click",create);
