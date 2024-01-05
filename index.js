"use strict";

// let Arr_in_Images = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg", "city-1.jpeg", "city-2.jpeg",
//     "city-3.jpeg", "city-4.jpeg", "city-5.jpeg"];

// let img_title = document.getElementById("img_title");
// let container_1 = document.querySelector(".container");
// let container_2 = document.querySelector(".main_container1")
// let container_1_img = document.querySelectorAll(".img_9");
// let Focus_img = document.getElementById("focus_img")

// let bottom_hide_img = document.querySelector(".bottom_hide_img");

// let img_1 = document.createElement("img");
// img_1.className = "img_hide";

// let img_2 = document.createElement("img");
// img_2.className = "img_hide";

// let img_3 = document.createElement("img");
// img_3.className = "img_hide";

// let img_4 = document.createElement("img");
// img_4.className = "img_hide";
// img_4.src = "city-4.jpeg";

// let img_5 = document.createElement("img");
// img_5.className = "img_hide";
// img_5.src = "city-5.jpeg";

// let count = 0;
// let img_hide = document.querySelectorAll(".img_hide");
// console.log(img_hide);
// // let valid = img_hide[0].parentElement;
// let arr_1 = [];
// arr_1[0] = img_hide[0];
// arr_1[1] = img_hide[1];
// arr_1[2] = img_hide[2];
// arr_1[3] = img_4;
// arr_1[4] = img_5;

// let opacity_add_to_img = 0;

// container_1_img.forEach((img, index) => {

//     img.addEventListener("click", () => {

//         container_1.classList.toggle("container_1_none");
//         container_2.classList.toggle("main_container1_block");
//         document.body.classList.toggle("body_color");
//         Focus_img.src = Arr_in_Images[index];
//         count = index;
//         if (opacity_add_to_img != 0) {
//             opacity_add_to_img.classList.remove("opacity");

//         }

//         if (index > 2 && index != 8) {
//             console.log("pattabi");
//             img_title.innerHTML = "Cites";
//             // if (valid.children.length == 5) {
//             //     valid.lastElementChild.remove();
//             //     valid.lastElementChild.remove();
//             // }
//             // img_hide[0].src = Arr_in_Images[3];
//             // img_hide[1].src = Arr_in_Images[4];
//             // img_hide[2].src = Arr_in_Images[5];
//             img_1.src=Arr_in_Images[index];
//             img_2.src=Arr_in_Images[index];
//             img_3.src=Arr_in_Images[index];
//             bottom_hide_img.append(img_1,img_2,img_3,img_4,img_5);
            
//             valid.append(img_4, img_5);
//             opacity_add_to_img = arr_1[count - 3];
//             opacity_add_to_img.classList.add("opacity");
//         }
//         else if (index != 8 && index < 3) {
//             img_title.innerHTML = "Nature";

//             if (valid.children.length == 5) {
//                 valid.lastElementChild.remove();
//                 valid.lastElementChild.remove();
//             }
//             img_hide[0].src = Arr_in_Images[0];
//             img_hide[1].src = Arr_in_Images[1];
//             img_hide[2].src = Arr_in_Images[2];
//             opacity_add_to_img = arr_1[count];
//             opacity_add_to_img.classList.add("opacity");


//         }
//     })
// });

// let rigth_left_btn = document.querySelectorAll(".two_btn");
// rigth_left_btn.forEach((btn,) => {

//     btn.addEventListener("click", (event) => {

//         if (opacity_add_to_img != 0) {
//             opacity_add_to_img.classList.remove("opacity");
//         }

//         if (valid.children.length < 5) {

//             if (event.target.id == "left_btn") {

//                 if (count == 0) {
//                     count = 3;
//                 }
//                 count--;
//                 Focus_img.src = Arr_in_Images[count];

//             }
//             else {

//                 if (count == 2) {
//                     count = -1;
//                 }
//                 count++;
//                 Focus_img.src = Arr_in_Images[count];
//             }
//             opacity_add_to_img = arr_1[count];
//             opacity_add_to_img.classList.add("opacity");

//         }

//         else {

//             if (event.target.id == "left_btn") {
//                 if (count == 3) {
//                     count = 8;
//                 }
//                 count--;
//                 Focus_img.src = Arr_in_Images[count];
//             }

//             else {

//                 if (count == 7) {
//                     count = 2;
//                 }
//                 count++;
//                 Focus_img.src = Arr_in_Images[count];
//             }

//             opacity_add_to_img = arr_1[count - 3];
//             opacity_add_to_img.classList.add("opacity");

//         }
//     })
// });
// arr_1.forEach((img, index_1) => {

//     img.addEventListener("click", () => {
//         if (opacity_add_to_img != 0) {
//             opacity_add_to_img.classList.remove("opacity");
//         }
//         opacity_add_to_img = arr_1[index_1];
//         opacity_add_to_img.classList.add("opacity");

//         if (valid.children.length < 5) {

//             Focus_img.src = Arr_in_Images[index_1];
//         }

//         else {
//             count = index_1 + 3;
//             Focus_img.src = Arr_in_Images[count];
//         }
//     })
// });



//..............................................................//



// let Arr_in_Images = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg", "city-1.jpeg", "city-2.jpeg",
//     "city-3.jpeg", "city-4.jpeg", "city-5.jpeg"];

// let img_title = document.getElementById("img_title");
// let container_1 = document.querySelector(".container");
// let container_2 = document.querySelector(".main_container1")
// let container_1_img = document.querySelectorAll(".img_9");
// let Focus_img = document.getElementById("focus_img")

// let bottom_hide_img = document.querySelector(".bottom_hide_img");

// let img_1 = document.createElement("img");
// img_1.className = "img_hide";

// let img_2 = document.createElement("img");
// img_2.className = "img_hide";

// let img_3 = document.createElement("img");
// img_3.className = "img_hide";

// let img_4 = document.createElement("img");
// img_4.className = "img_hide";

// let img_5 = document.createElement("img");
// img_5.className = "img_hide";

// let count = 0;
// let arr_1 = [];
// arr_1[0] =img_1;
// arr_1[1] = img_2;
// arr_1[2] = img_3;
// arr_1[3] = img_4;
// arr_1[4] = img_5;

// let opacity_add_to_img = 0;
// container_1_img.forEach((img, index) => {

//     img.addEventListener("click", () => {

//         container_1.classList.toggle("container_1_none");
//         container_2.classList.toggle("main_container1_block");
//         document.body.classList.toggle("body_color");
//         Focus_img.src = Arr_in_Images[index];
//         count = index;
//         if (opacity_add_to_img != 0) {
//             opacity_add_to_img.classList.remove("opacity");

//         }

//         if (index > 2 && index != 8) {
//             img_title.innerHTML = "Cites";

//             img_1.src=Arr_in_Images[3];
//             img_2.src=Arr_in_Images[4];
//             img_3.src=Arr_in_Images[5];
//             img_4.src=Arr_in_Images[6];
//             img_5.src=Arr_in_Images[7];
//             bottom_hide_img.append(img_1,img_2,img_3,img_4,img_5);

//             opacity_add_to_img = arr_1[count-3];
//             opacity_add_to_img.classList.add("opacity");
//         }
//         else if (index != 8 && index < 3) {
//             img_title.innerHTML = "Nature";
//             if(bottom_hide_img.children.length==5){
//              bottom_hide_img.lastElementChild.remove();
//              bottom_hide_img.lastElementChild.remove();

//             }
//             img_1.src=Arr_in_Images[0];
//             img_2.src=Arr_in_Images[1];
//             img_3.src=Arr_in_Images[2];

//             bottom_hide_img.append(img_1,img_2,img_3);
//             opacity_add_to_img = arr_1[count];
//             opacity_add_to_img.classList.add("opacity");


//         }
//     })
// });

// let rigth_left_btn = document.querySelectorAll(".two_btn");
// rigth_left_btn.forEach((btn,) => {

//     btn.addEventListener("click", (event) => {

//         if (opacity_add_to_img != 0) {
//             opacity_add_to_img.classList.remove("opacity");
//         }

//         if (bottom_hide_img.children.length < 5) {
//             console.log("count_1= "+count);

//             if (event.target.id == "left_btn") {

//                 if (count == 0) {
//                     count = 3;
//                 }
//                 count--;
//                 Focus_img.src = Arr_in_Images[count];

//             }
//             else {

//                 if (count == 2) {
//                     count = -1;
//                 }
//                 count++;
//                 Focus_img.src = Arr_in_Images[count];
//             }
//             console.log("count= "+count);
//             opacity_add_to_img = arr_1[count];
//             opacity_add_to_img.classList.add("opacity");

//         }

//         else {

//             if (event.target.id == "left_btn") {
//                 if (count == 3) {
//                     count = 8;
//                 }
//                 count--;
//                 Focus_img.src = Arr_in_Images[count];
//             }

//             else {

//                 if (count == 7) {
//                     count = 2;
//                 }
//                 count++;
//                 Focus_img.src = Arr_in_Images[count];
//             }

//             opacity_add_to_img = arr_1[count - 3];
//             opacity_add_to_img.classList.add("opacity");

//         }
//     })
// });

// arr_1.forEach((img, index_1) => {
//     img.addEventListener("click", () => {
// console.log(index_1);
//        count=index_1;
//         if (opacity_add_to_img != 0) {
//             opacity_add_to_img.classList.remove("opacity");
//         }
//         opacity_add_to_img = img;
//         opacity_add_to_img.classList.add("opacity");

//         if (bottom_hide_img.children.length < 5) {

//             Focus_img.src = Arr_in_Images[index_1];
//         }

//         else {
//             count = index_1 + 3;
//             Focus_img.src = Arr_in_Images[count];
//         }
//     })
// });

//.......................................Simplifying method...........//

let img_title = document.getElementById("img_title");
let container_1 = document.querySelector(".container");
let container_2 = document.querySelector(".main_container1")
let container_1_img = document.querySelectorAll(".img_9");
let Focus_img = document.getElementById("focus_img")
let bottom_hide_img = document.querySelector(".bottom_hide_img")
let Arr_in_Nature = ["nature-1.jpeg", "nature-2.jpeg","nature-3.jpeg"] ;
let Arr_in_Cities=["city-1.jpeg", "city-2.jpeg","city-3.jpeg", "city-4.jpeg", 
"city-5.jpeg"];
let count=0;
let find_img_type=false;
// Arr_in_Nature.forEach((value)=>{
//   console.log(value);
// })
container_1_img.forEach((images)=>{
    images.addEventListener("click",function(){show_next_fun(this)});
})

function show_next_fun(img){

    container_1.classList.toggle("container_1_none");
    container_2.classList.toggle("main_container1_block");
    document.body.classList.toggle("body_color");
    bottom_hide_img.innerHTML="";

    count=img.src.slice(22);

    Focus_img.src=count;

    if(img.parentElement.className=="top_Nature_img"){
        find_img_type=false;
   count=Arr_in_Nature.indexOf(count);
        img_append_Fun(Arr_in_Nature);
    }
  else{
    find_img_type=true;
   count=Arr_in_Cities.indexOf(count);
    img_append_Fun(Arr_in_Cities);
  }
  optacity_add_fun();
}

function img_append_Fun(x){
  // console.log(arr);
    x.forEach((img_src)=>{
      // console.log(img_src);
        let img_1 = document.createElement("img");
        img_1.className = "img_hide";
        img_1.src=img_src;
        bottom_hide_img.appendChild(img_1);
    })
}

document.getElementById("left_btn").addEventListener("click",()=>{
 const value=find_img_type? Arr_in_Cities.length:Arr_in_Nature.length;
 count=(count-1+value)%value; 
Focus_img.src=find_img_type? Arr_in_Cities[count]:Arr_in_Nature[count];
  optacity_add_fun();
    
})
document.getElementById("right_btn").addEventListener("click",()=>{
    count=(count+1)% (find_img_type? Arr_in_Cities.length:Arr_in_Nature.length);
    Focus_img.src=find_img_type? Arr_in_Cities[count]:Arr_in_Nature[count];
  optacity_add_fun();
    
});

bottom_hide_img.addEventListener("click",(event)=>{

    let value=event.target.src.slice(22);
    count=find_img_type? Arr_in_Cities.indexOf(value):Arr_in_Nature.indexOf(value);
    Focus_img.src=find_img_type? Arr_in_Cities[count]:Arr_in_Nature[count];
  optacity_add_fun();
    
});

let img_hide=bottom_hide_img.children;

function optacity_add_fun(){
// if(value!=0){
//   value.classList.remove("opacity");

// }
//      value=img_hide[count];
//     value.classList.add("opacity");
//................Another method to oppacity add..............//
console.log(img_hide);
for(let i=0;i<img_hide.length;i++){
  img_hide[i].classList.remove("opacity");
  if(i==count) {
   img_hide[i].classList.add("opacity");


}
}
}
