var names=[];
function submit(){
var n1=document.getElementById("nameofobjectorperson1").value;
var n2=document.getElementById("nameofobjectorperson2").value;
var n3=document.getElementById("nameofobjectorperson3").value;
var n4=document.getElementById("nameofobjectorperson4").value;
var n5=document.getElementById("nameofobjectorperson5").value;
names.push(n1);
names.push(n2);
names.push(n3);
names.push(n4);
names.push(n5);
console.log(names);
document.getElementById("displayname").innerHTML=names;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){

var sort=names.sort();    
console.log(sort);
document.getElementById("displayname").innerHTML=sort;
}