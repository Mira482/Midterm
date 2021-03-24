var wrap = document.body.querySelector(".wrap");
var count=5
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for(var i=0; i<list.length; i++){
  var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  var eleAge = document.createElement("h4");
  if (list [i].age>25){
    ele.style.color="Green";
  }
  eleName.innerHTML=list[i].name;
  eleAge.innerHTML="Age: "+list[i].age;
  ele.appendChild(eleName);
  ele.appendChild(eleAge);
  wrap.appendChild(ele);
}
function boxMaker(clicked){
  var box = document.createElement("div");
  box.innerHTML="The count is now: "+count
  wrap.appendChild(box);
}
document.body.querySelector(".a").addEventListener("click",function(){
  boxMaker(count=count+1)
})