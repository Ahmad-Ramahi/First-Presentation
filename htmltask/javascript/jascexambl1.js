/*let title="Elzero";discripion="Elzero webbb";date="25/10";

let mark=`
<div class="card">
 <div class="cild">
 <h3>${title}</h3>
 <p>${discripion}</p>
 <p><span>${date}</span></p>
 </div>
 </div>
`;*/
//document.write(mark.repeat(4));
//2
/*let a="-100";
let b="20";
let c=30;
let d=true
console.log(-a++ *   +b++);//2000
console.log(-a++ + ++c+ + +b + ++b );//173*/

//3


/*let a=20;
console.log(a<10?console.log(10):
a>=10 && a<=40?console.log("10 to 40")
: a>40?console.log(">40"):
console.log("unknow"));*/
//
//4
/*let job="Maneger";
let salary = 0;
switch (job){
    case 0 :  (job==="Maneger")
        salary=8000;
        console.log(`the salary is ${salary}`);
    break;
    case 1 :  (job==="IT" || job==="Maneger")
        salary==6000;
        console.log(`the salary is ${salary}`);

    break;
    case 2 : (job==="Developer" || job==="Designer")
        salary=5000
        console.log(`the salary is ${salary}`);
    break;
    default:
        salary=4000;
        console.log(`the salary is ${salary}`);
}*/
//array
/*let myfrind=["ahmad", "anas","rame",["saeed", "same"]]
console.log(`hollo ${myfrind[0]}`);
console.log(` ${myfrind[0][2]}`);
console.log(`hollo ${myfrind[3][1]}`);
console.log(`hollo ${myfrind[3][0][2]}`);
/////////////////////////////////////////////////////////////////
myfrind[myfrind.length]="jmal"
console.log(myfrind);
myfrind.unshift("aaaaaaa", "sssssss");//للاضافة في مقدمة المصفوفة
console.log(myfrind);
myfrind.push("xxxxxx", "zzzzz");//للاضافة في نهاية المصفوفة
console.log(myfrind);
myfrind.shift();//بمحي اول عنصر من المصفوفة
let firstname=myfrind.shift();
console.log(`first name in array is ${firstname}`);
let lastname= myfrind.pop();//بمحي اخر عنصر من المصفوفة
console.log(`last name in array is ${lastname}`);
////////////////////////////////////////////////////////////////////
let arr=[10, "ahmad","rame",100,20,"10",-20,-10];
console.log(arr);
console.log(arr.sort())//بترتب  المصفوفة ابجديا
console.log(arr.reverse());//بتعكس ترتيب المصفوفة
console.log(arr.slice(1, 3));
console.log(arr.splice(0, 1,"add1","add2"));//بحذف عناصر وبضيف عناصر الاول رقم البداية الثانية عدد العناصر المحذوفة والثالثة العناصر المضافة*/
////////////////////////////////////////////////////////////////////
/*let contarr=myfrind.concat(arr);
console.log(contarr);//اضفة مصفوفات مع بعض
console.log(contarr.join("/"));//بدمج عناصر المصوفة في استرنج وبفصل بينهم بالاشارة الي بحطها بين الاقواس*/



/////////////////////////////////////////////////////////////////////
//for loop
/*let arr2=["aaa","bbb", "ccc", "ddd", "eee"];
let arr3=[];
for(let i=0 ;i<arr2.length;i++){
    if(typeof arr2[i]==="string"){
        arr3.push(arr2[i]);
        console.log(arr3);
    }
}*/
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///************************************************** */
//products exampli
/*let products=["keyboard","mouse", "pen", "pad", "monitor" , "iphone"];
let color=["red",  "green","blue" ];
let showcunt=5;

document.write(`<h1> show ${showcunt} products </h1>`)
for(let i=0 ;i<showcunt;i++){
    document.write(`<div>`);
    document.write(`<h3>[${i+1}]${products[i]}</h3>`);
    for(let j=0;j<color.length;j++){
        document.write(`<p>- ${color[j]} </p>`);  
    }
    document.write(`<p>- ${color.join( " >> " )} </p>`);

    document.write(`</div>`); 
}*/
///////////////////////////////////////////////////
///////////////////////////////////////////////////
//********************************************** */
/*مثال للمصفوفة مع فور ولوب
let myAdmins=["ahmad", "osama", "sayed", "stop","samera"];
let myEmployees=["amgad", "samah", "ameer", "omer", "otman", "amany", "samai"];
let admins_count = 0;
let x=myAdmins.indexOf("stop");
document.write(`<div><h1>We Have ${myAdmins.length} Admins</h1></div><hr/>`);

let leader = 0;
let teamN = 0;
let workerN = 0;
for (leader; leader<x; leader++){
  teamN++
  document.write(`<div>The admin For Team ${teamN} is ${myAdmins[leader]}</div>`);
  letter = myAdmins[leader][0];
  document.write(`<h3>Team Members:</h3>`);
  for (let workers = 0; workers<myEmployees.length; workers++){
    myEmployees[workers].startsWith(letter)
    ? document.write(`<p>- ${++workerN} ${myEmployees[workers]}</p>`)
    : workers = workers
  }
  workerN = 0
  document.write(`<hr/>`);
}*/
///////////////////////////////////////
///////////////////////////////////////
//function*****************************
/*function showinfo(username="un", age="un", rt=0 ,show="yes",...sk){
    document.write(`<div>`);
    document.write(`<h2>welcom ${username}</h2>`);
    document.write(`<p>${age}</p>`);
    document.write(`<p>hour rate ${rt}$</p>`);
    if(show==="yes"){
        if(sk.length>0){
            document.write(`<h2>your skills is: ${sk.join("-")}</h2>`);
        }else{
            document.write(`skills:no skills`)
        }

        console.log("yes")
    } else{
        document.write("skills is hiddin")
    }    
    
    document.write(`</div>`);
}
showinfo("ahmad",20,50,"yes","play","scc","html");*/
//************function callenge************************
/*function showDetails(...x) {
    document.write(`<div>`);
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === "string") {
        document.write(`"Hello ${x[i]},`);
        break;
      }
    }
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === "number") {
        document.write(` Your Age Is ${x[i]},`);
        break;
      }
    }
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === "boolean") {
        if (x[i] === true) {
          document.write(` You Are Available For Hire"`);
        } else {
          document.write(` You Are Not Available For Hire"`);
        }
        break;
      }
    }
    document.write(`</div>`);
  }
  showDetails(false,10,"rrrrrr");*/
  //*****end*****///////////////////////////
  ///*************************************************************** */
  // document.getElementById("show").onclick=function(){
  //   console.log("show");
  // }
  // /////////////////////////////////////////////////////////////////
  // setTimeout(function(){
  //   console.log("goood");
  // },2000);//بتنفذلي الامر بعد ثانيتين
  ////////////////*************************************** */
  //***********************function challeng*****************
//   let namee = function (...nam){
//     return (`string [${nam.join("],[")}]=> done`);
//   };
//   let namee1 = (...nam)=> (`string [${nam.join("],[")}]=> done`);
// console.log(namee("ahmad", "rame","same","aaaaaaaa"));
// console.log(namee1("ahmad", "rame","same","aaaaaaaa"));
// ////********calleng2**************/
// let mynumber=[20, 50, 10, 60];
// let calc=(one,tow,...num)=>one+tow+ +num;
// console.log(calc(20,10,50));
///////////////////////////////////////////////////////////////
//////////////***********************************************/
/////************************Map****************************/
// let swappcase="elZERo";
// let invertnum=[1, -10, -20, 15, 100,-30];
// let ignoornumber="Elz123er4o";

// let swaap = swappcase.split(" ").map(function(ele){
//   return ele === ele.toUpperCase() ? ele.toLowerCase : ele.toUpperCase
// })
// .join("");
// console.log(swaap);

// let inv=invertnum.map(function(ele){
//   return -ele
// });
// console.log(inv);

// let ign=ignoornumber.split("").filter(function(ele){
//   return isNaN(parseInt(ele)) ? ele : ""
// }).join("")
// console.log(ign);
/////////////////////*******************************//
// let mix ="A13BS2ZX";
//  let fff=mix.split("").filter(function(ele){
//   return !isNaN(parseInt(ele));
//  }).map(function(ele){
//    return ele*ele
//  })
//  .join();
//  console.log(fff);
///***********reduce*************///
// let numss=[10,20,15,30];
// let sum=numss.reduce(function(acc, current, index,arrr){
//   console.log(numss);
//   console.log(`Acc=${acc}`);
//   console.log(` element = ${current}`);
//   console.log(`current element index = ${index}`);
//   console.log(`array== ${arrr}`);
//   console.log(acc+current);
//   console.log(`##############`);//شرح توضيح للعناصر الالي بتاخذهم ريديوس
//   return acc+current;
// },5);// ال 5 قيمة افتراضي ببدا فيها 
// console.log(sum);
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// let thebiggset=["ahmad", "rame", "masood", "ramahii"];//بدي اطلع اكبر كلمة 
// let biggest=thebiggset.reduce(function(acc, current, index,arrr){
//   console.log(`Acc=${acc}`);
//   console.log(` element = ${current}`);
//   console.log(`current element index = ${index}`);
//   console.log(`array== ${arrr}`);
//   console.log(acc+current);
//   console.log(`##############`);//شرح توضيح للعناصر الالي بتاخذهم ريديوس
//   return acc.length>current.length?acc:current;
// });
// console.log(biggest)
// let removechar=["E", "@", "@","L", "Z", "@", "@","E","@","R","O"]
// let finalchar=removechar.filter(function(ele){
//   return !ele.startsWith("@");
// }).reduce(function(acc,current){
//   return`${acc}${current}`;//ازالة اشارة@ وعمل جوين باستخدام الكرنت
// });
// console.log(finalchar);
//////////////////////////////////////////////////////////////////
/////////******************forEach*****************/
let alllis=document.querySelectorAll("#a li");
let alldivs=document.querySelectorAll(".content div");
console.log("    k")

alllis.onclick=function(){
  alert("xxxxxxxxxxx");
};

alllis.forEach(function(ele){
  ele.onclick = function () {
    console.log("ccccccccccccccccc")
    alllis.forEach(function(ele){
      ele.classList.remove("active");
    })
    this.classList.add("active");
    //hide all divs
    alldivs.forEach(function(ele){
      ele.style.display="none"
    })
  };
});
/////////////////////////////////////////////////////////////////////
/////**********************callenge****************************/////
let mystring="1,2,3,EE,l,z,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
let zletter=mystring[mystring.length-true];
let solution=mystring.split("").map(function(ele){
  return ele.replace("_"," ");
}).filter(function(ele){
  return ele!=="," && isNaN(parseInt(ele))&&ele!==zletter;
}).reduce(function(acc,next){
  if(acc===next){
    return `${acc}`;
  }else{
    return`${acc}${next}`;
  }
});
document.write(solution);
///////////////////////////////////////////////////////////////////////
//////************************object****************************//////
/////////////////////////////////////////////////////////////////////
let user ={
  namee:"ahmad",
  age:19,
  skills:["html", "css", "js"],
  available:false,
  addresses:{
    pls:"ram alla",
    egypt:{
      one:"cairo",
      two:"geza",
    },
  },   
  checkav:function () {
    if (user.available===false){
      return `free for work`
    }else{
      return `not free`
    }
  },
};
console.log(user.namee);
console.log(user.age);
console.log(user.skills.join(" - "));//بعد النقطة الاثنية بتدخا على تغيير المصفوفة
console.log(user.skills[2]);//access with index
console.log(user.addresses.pls);
console.log(user.addresses.egypt.one);
console.log(user["addresses"]["egypt"]["one"]);//نفس نتيجة الي فوقها
console.log(user.checkav()); 