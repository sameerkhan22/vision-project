function openNav() {
    showcartside();
    console.log(cartarray);
document.getElementById("mySidebar").style.width = "300px";
document.getElementById("main").style.marginLeft = "250px";




}

function showcartside(){

for(var i =0;i<cartarray.length;i++){

document.getElementById("cartproductsidebar").innerHTML +=`

<div class="container">

<div class="row">

<div class="card">
  <img src="${cartarray[i].src}" width="30%" height="100"/>
  <p>${cartarray[i].title}</p>
  <h3>${cartarray[i].price}</h3>
  </div>

</div>

</div>

`

}

}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}