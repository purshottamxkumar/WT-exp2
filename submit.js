alert("You have successfully registered!!!");

const searchArr = window.location.search;
const params = new URLSearchParams(searchArr);

const firstnameparam = params.get("firstName");
const lastnameparam = params.get("lastName");
const emailparam = params.get("email");
const address = params.get("address");
const number = params.get("number");

document.getElementById("name").innerHTML = firstnameparam + " " + lastnameparam;
document.getElementById("email").innerHTML = emailparam;
document.getElementById("address").innerHTML = address;
document.getElementById("number").innerHTML = number;