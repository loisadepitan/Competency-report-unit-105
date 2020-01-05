//object literal

const salon = {
    name:"The Fashion Pets",
    phone:"5567893",
    address:{
    street:"Av. University",
    number:"262-G"
    },
    
    
    
    workingHours: {
    days:"Mon-Fri",
    open: "9:00 am",
    close: "5:00 pm"
    },
    pets:[],
    count: function(){
    alert("We have : " + salon.pets.length +"pets registered.");
    }
    }
    // object destructuring
    
    let{name,phone,address:{street,number,},workingHours:{days,open,close}}
    =salon;
    
    //console.log(name,street);
    //using bootstrap for the display
    document.querySelector(".info").innerHTML=`<p> ${name} <br> ${street},${number} <br> ${days} from ${open} to ${close} <br>${phone} </p>`;
    
    document.querySelector("footer .info").innerHTML=`<p> ${name} <br> ${street},${number} <br> ${days} from ${open} to ${close} <br>${phone} </p>`;
    
    //if you dont like the way in the index we can remove the class and we use the object constructor to create the pets
    
    //Object constructor
    var petc=0;
    class Pet{
    constructor(name,age,breed,gender,service,ownerName,phoneContact)
    {
    this.name=name;
    this.age=age;
    this.breed=breed;
    this.service=service;
    this.gender=gender;
    this.ownerName=ownerName;
    this.phoneContact=phoneContact;
    this.id="pet" + petc;
    petc+=1;
    this.hunger=10;
    this.happiness=5;
    
    }
    ownerInfo = function(){
    console.log("Owner name: "+ this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);
    }
    
    feed = function(){
    this.hunger -=10; //reduce hunger
    this.happiness+=10; //increase happiness
    console.log("Feeding ...");
    
    }
    status = function(){
    console.log("Hunger: " + this.hunger + "\n" + this.happiness);
    }
    
    }
    
    const pet1 = new Pet("Shaggy",2,"Boxer","Male","Shower","Sandie","32968");
    const pet2 = new Pet("Sadie",3,"Chihuahua","female","Clipping","Lois","971238");
    const pet3 = new Pet("Toby",8,"Lab","Female","Spa","Lois","399911");
    
    salon.pets.push(pet1);
    salon.pets.push(pet2);
    salon.pets.push(pet3);
    
    displayPet(pet1);
    displayPet(pet2);
    displayPet(pet3);
    
    var textname = document.getElementById('petName');
    var textage = document.getElementById('petAge');
    var textbreed = document.getElementById('petBreed');
    var textgender = document.getElementById('petGender');
    var textservice = document.getElementById('petService');
    var textowner= document.getElementById('ownerName');
    var textphone = document.getElementById('phoneContact');
    
    function register(){
    const thePet= new Pet(textname.value, textage.value, textbreed.value,textgender.value,textservice.value, textowner.value, textphone.value);
    salon.pets.push(thePet);
    alert("You have registered a pet");
    clean();
    displayPet(thePet);
    }
    
    function clean(){
    textname.value="";
    textage.value="";
    textbreed.value="";
    textgender.value="";
    textservice.value="";
    textowner.value="";
    textphone.value="";
    
    }
    
    function displayPet(aPet){
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}">
    <td>${aPet.name} </td>
    <td>${aPet.age} </td>
    <td>${aPet.breed} </td>
    <td>${aPet.gender} </td>
    <td>${aPet.service} </td>
    <td>${aPet.ownerName} </td>
    <td>${aPet.phoneContact} </td>
    <td>
    <button onclick='remove("${aPet.id}");' > Delete </button>
    </td>`;
    tBody.innerHTML+=row;
    }
    
    function remove(petId){
    //console.log("delete" + petId); delete showing the html on cons
    
    var tr = document.getElementById(petId)
    var indexDelete;
    
    //searching the pet using the id
    for(var i=0;i<salon.pets.length;i++){
    var selectedPet = salon.pets[i];
    //console.log(selectedPet);
    if(selectedPet.id == petId)
    {
    indexDelete=i;
    }
    }
    //delete in the array
    salon.pets.splice(indexDelete,1);
    //delete in the html
    tr.remove();
    
    }
    // searching for pet using petid for selectedPet
    /*function Search(petId){
    for (var i=0; i=salon.pets.length;i++){
    var selectedPet=salon.pets[i];
    if (selectedPet.id==id)
    }
    indexSearch=i
    }*/
    function Search(){
    //we are deleting the style(css)
    //for(var j=0;j<salon.pets.length;j++){
    //document.getElementById('pet'+ j).setAttribute('class','x');
    
    
    //}
    //var searchString= document.getElementById('petSearch').value;
    //changing to lower case the text
    //console.log(searchString);
    var ss=document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();
    
    //searching the pet
    var flag=false; // (flyer is for false)
    
    for(var i=0;i<salon.pets.length;i++){
    var theFoundedPet = salon.pets[i];
    
    if((theFoundedPet.id.toLowerCase() == searchString) ||
    (theFoundedPet.name.toLowerCase() == searchString))
    {
    flag=true;
    //the flag is just a varaible to search and find the pets
    //indexDelete=i;
    //var p = document.getElementById(searchString);
    // p.style.background="red";
    //or second option
    index=i;
    document.getElementById('pet'+index).setAttribute('class','found');
    $('#pet' +i).show();
    //console.log("I found the pet " + salon.pets[i].name);
    // document.getElementById("result").innerHTML="I found the pet " + salon.pets[i].name;
    }
    
    else{
    $('#pet' +i).hide();
    }

  }

    /*else{
    document.getElementById("result").innerHTML="<h3> It doesn't exist ... <h3>";
    }*/
    //console.log(flag);
    // The other situation
    if(flag==false){
    document.getElementById("result").innerHTML="it doesn't exist";
    }
    
    //we are trying to delete the text in the input search
    document.getElementById("petSearch").value="";
}