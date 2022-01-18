// let myMinaElement=document.createElement("div");
// let myHiding=document.createElement("h2");
// let myP=document.createElement("p");
// let myHidingtext=document.createTextNode("poduct text");
// let myPtext=document.createTextNode("poduct discrption");
// //add hidding text
// myHiding.appendChild(myHidingtext);

// //add hidding to main element
// myMinaElement.appendChild(myHiding);

// //add pragraph text
// myP.appendChild(myPtext) ;
// //add pragraph to main
// myMinaElement.appendChild(myP);




// myMinaElement.className="product";
// document.body.appendChild(myMinaElement); 
// ////////////////////////////////////////////////////////////
// //////////***************************************//////////
// //////////////////////////////////////////////////////////

// let butt=document.getElementById("btn");
// butt.onclick= function () {
//     butt.style.color="red"; //ازا اعدل علا العنصر زي س اس اس
// };
// butt.onmouseleave= function () {
//     console.log("clicked2");  
// };
// window.onscroll=function () {
//     console.log("crolling");  

// };
// ///////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////
// ////////////////////////////مهم //////////////////////////////////////
// let userinput=document.querySelector("#username");
// let ageinput=document.querySelector("#age");
// document.forms[0].onsubmit=function(e){
//     userval=false;
//     ageval=false;
//     var v =userinput.value;
//     console.log(userinput.value.length);
//     console.log(userinput.value);


//     if(userinput.value !== "" && userinput.value.length<=10 ){
//         userval=true;
//         console.log(userval ,1);
//     }
//     else{
//         console.log("enter user");
//     } 
    
//     if(ageinput.value !== ""){
//         ageval=true;
//         console.log(ageval ,2);
//     }else{
//         console.log("enter age");
//     };
//     if(userval===false || ageval===false){
//         e.preventDefault();
//     }else{
//         console.log(false)

//     };

// };
// document.links[0].onclick=function(event){
//     event.preventDefault();
// };
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////*****addEventListener*****/////////////////////
// let mypp=document.querySelector("p");
// mypp.onclick=one;
// mypp.onclick=two;

// function one(){
//     console.log("ahmad11111");
// };
// function two(){
//     console.log("ahmad22222");
// };

//     //بستخدمها في حال بدي اعمل اكثر من وظيفة بنفس الايفنت
// mypp.addEventListener("click",function(){
//     console.log("ahmad11111 evant");
// });
// mypp.addEventListener("click",one);
// mypp.addEventListener("click",two);
// mypp.onclick=function(){
//     let newp=mypp.cloneNode(true);//cloneNode بستعملها عشان اعمل نسخة مطابقة من العنصر والترو عشان ينسخ الي جوا العنصر
//     newp.className="myp";
//     document.body.appendChild(newp);
// };
// // let cloned = document.querySelector(".myp");//error
// // cloned.onclick= function(){
// //     console.log("this is cloned");
// // };
// document.addEventListener("click",function(e){
//     if(e.target.className==="myp"){
//         console.log("iam a cloned")
//     }
// })
/////////////////////////////////////////////////////////////////////////////
///////////////اظهار رسالة للمستخدم/////////////////////////////////////////
//-alert
//-confirm
//-prompt
// let confirmmass=confirm("are you sure");
// console.log(confirmmass);
// if(confirmmass===true){
//     console.log("deleted");
// }else{
//     console.log("not deleted"); 
// };
// let promptmass=prompt("any more quastion" , "write yes or no");
// console.log(promptmass); 
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//setTimeout

// setTimeout(function(){
//     console.log("msc");
// },3000);//هون بكتب الوقت بالميلي سكنتmilliseconds
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//////////////////////************We will review your message*************/
// let myyfrind=["ahmad", "saeed" ,"anas" ,"ramme"];
// let [a , b , c ,d]=myyfrind;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d); 
// /////////////////*//**/*/**/**//****//* */ */ */ */
// let myyffrind=["ahmad", "saeed" ,"anas" ,["shady","amr",["mohamed", "gamail"]]];
// let[ , , ,[x, ,[,y]]]=myyffrind; 
// console.log(x);
// console.log(y);
//////////////////////////////////////////////////////
/////*******************************************/////
////////////////////////////////////////////////////
//Set
let mynum=[1,1,1,2,3];
let uniquedeta= new Set([1,1,1,2,3]);//بتاخذ العناصر المميزة 
console.log(uniquedeta);
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////***************************//////////////////

let nums=[1,2,3,4,5,6,7,15];
//some ازا نطبق الشرط على عنص واحد بس برجع true
let check =nums.some(function(e){//some بتمشي على عناصر المصفوفة كلها
   // console.log(`num ${e}`)
    return e > 5
});
console.log(check);

let range={
    min:10,
    max:20,
};
let sheckrange=nums.some(function(e){
return e>=this.min && e<=this.max
},range);//حطيت الرينج عشان تصير الthis بتساوي الريبنج
console.log(`chek ${sheckrange}`);

//arrey.every لازم الشرط يتحقق على جميع عناصر المصفوفة عشان يرجع true