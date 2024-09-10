const tinderUser= new Object()

// const tinderUser={}   2nd object to  create

tinderUser.id="1234abs"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const reguleruser={
     email:"some@gmail.com",
     fullname:{
         userfullname:{
              firstname:"Rahul",
              lastname:"Yadav"


         }
     }


}

console.log(reguleruser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"c",6:"d"}

//   const obj3=Object.assign( {},obj1,obj2,obj4)
  const obj3={...obj1,...obj2,...obj4}

  console.log(obj3);

   

 const user=[
     {
           id:1,
           email:"rahul"

     }
 ]


 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 
 console.log(tinderUser.hasOwnProperty("isLoggedIn"));
 

 const course={
     courseName:"Js Hindi",
     Price:999,
     courseInstructor:"Hitesh"

 }


 const {courseInstructor}=course
 const {courseInstructor:teacher}=course
 console.log(courseInstructor);
 console.log(teacher);


 const navbar =() =>{
       
 }

 navbar()
 