// ---------------------------------------------------X-----------------------------------------------------------

let Resume = {
    "name" : "Manojkumar",
    "age" :25,
    "gender" : "Male",
    "email" : "manomk2020@gmail.com",
    "Qualification" : "B.E-Computer Science",
    "Skills" : ["Javascript","Python","React","HTML","CSS","SQL"],
    "DOB" : "jun-18-1999",
    "Maritalstatus": "Single",
    "Mobile" : 7443567982,
    "College" : "KCE",
    "PassedOutYear" : 2020,
    "CGPA" : 8.0,
    "githubprofile" : "https://github.com/ManojkumarKamaraj",

}
let Resume_json = JSON.stringify(Resume);
console.log(`My JSON Format Resume:-${Resume_json}`);

let obj = JSON.parse(Resume_json)

                        // For method
let ff = Object.values(obj)

for(let i = 0; i<ff.length; i++){
    console.log(ff[i]);
}

                        // for In and for of and forEach method
for(let key in obj){
    console.log(`${obj[key]}`)
}
for(ar of obj.Skills){
    console.log(`Array Object
    ${ar}`)
}
let iter = Object.entries(obj)
iter.forEach(([key,value])=> {console.log(`${key}:${value}`)});
 


