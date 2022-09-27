
// oops task

// class constructor

// class person{
//     constructor(moviename,studioname,rating)    
//     {
//         this.moviename= moviename;
//         this.studioname= studioname;
//         this.rating= rating;
//     }
//     getdetails(){
//         return(`the name of the movie is ${this.moviename} shows in ${this.studioname} and movie rating ${this.rating}`)
//     }
// }

// let person1 = new person("vikram","ashok theater","5 star");

// console.log(person1.getdetails());



// d) Write a piece of code that creates an instance of the class 
// Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


// class detail{
//     constructor(moviename,studioname,rating)
//     {
//         this.moviename= moviename;
//         this.studioname= studioname;
//         this.rating= rating;
//     }
//     getdetails(){
//         return(`movie with the title ${this.moviename}, the studio ${this.studioname} and the rating ${this.rating}`)
//     }
// }

// let detail1 = new detail("Casino Royale","Eon Production","PG13");

// console.log(detail1.getdetails());


// Write a “person” class to hold all the details.

// class person {
//     constructor(firstname,lastname,age,place)
//     {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.place = place;
//     }
//     getdetails(){
//         return(`the name of a person is ${this.firstname} ${this.lastname} with age ${this.age}born at ${this.place}`)
//     }
// }

// let person1 = new person("guvi","geek","18","chennai");

// let person2 = new person("vishal","deepa","21","kerala");

// console.log(person1.getdetails());


// write a class to calculate the uber price.

// class uber {
//     constructor(distance,rate,waitingperiod)
//     {
//         this.distance = distance;
//         this.rate = rate;
//         this.waitingperiod = waitingperiod;
//     }

// setDistance(dist){
//     this.distance=dist;
// }

// getRideDetails(){
//     return(`the distance of the rider is ${this.distance} and rate of ₹${this.rate} with waitingperiod of ${this.waitingperiod}`)
// }


// getprice(){
//      let totalprice =(this.rate* this.distance)+(this.waitingperiod*5);
//     return totalprice
// }
// }

// let uber1= new uber(350,20,15);

// console.log(uber1.getprice());

// uber1.setDistance(150);

// console.log(uber1.getprice())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// array methord


var request = new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload=function(){
var data = JSON.parse(request.response)
console.log(data);


// Get all the countries from the Asia continent /region using the Filter function


var result = data.filter((ele)=>ele.region==="Asia")
console.log(result);
     

// Get all the countries with a population of less than 2 lakhs using Filter function

// var members= data.filter((ele)=>{
//     return ele.population <=20000
   
// })

// console.log(members);

// Print the following details name, capital, flag using forEach function


//    data.forEach((element,index)=>{
//     data[index]= element.capital+""+ element.name+""+element.flag
   
//                                  })

// console.log(data);



// Print the total population of countries using reduce function


var member= data.reduce((acc,ele)=> acc+ele.population,0);

console.log(member)



// Print the country which uses US Dollars as currency.


let cur=data.filter((ele) => {   
        for(let i in ele.currencies){
                if(ele.currencies[i].code==="USD"){
                        return true;
                }
        }
        }).map((ele)=>ele.name)
        
        console.log(cur);
        



}




