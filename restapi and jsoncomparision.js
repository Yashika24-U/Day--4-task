//API calls

//Creating an object which is capable for creating  API calls
const request = new XMLHttpRequest;

//Configuartions
request.open('GET','https://restcountries.com/v3.1/all')

//Sending request to restcountries
request.send(null);

//getting the response and unpacking
request.onload = function(){
const response = JSON.parse(request.responseText) ;
console.log(response);


for(var countries of response)
{
    var{flag} = countries;
    console.log(flag);
 }


for (var restcountries of response)
{
    var{name,region,subregion,population} = restcountries; 
    console.log(name,region,subregion,population);
}


//Compare two JSON have the same properties different order
var obj1 = {name : 'yashika',role :'software developer'};
var obj2 = {role :'software developer',name : 'ashika'};

var flag  = true;
for(var key in obj1)
{
if(obj1[key]  !== obj2[key])
{
    flag = false;
}
}
console.log(flag)
}