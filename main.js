var array1 =[
     "My brother is very annoying",
     "My mom always make me study",
     "My dad also makes me study"];
var array2=["Foot.jpg", "muma.jpg", "Papi.jpg"];
var i=0;
function button(){
  document.getElementById("1").innerHTML=array1[i];
   document.getElementById("photo").src=array2[i];
  i++;
}