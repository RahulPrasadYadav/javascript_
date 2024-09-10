// singleton

// object litrels 

const mysym=Symbol("key1")

const jsuser={
     name:"rahul",
     "full name":"Rahul Prasad Yadav",
     aga:12,
     location:"hyderbad",
     email:"yrahul8777@gmail.com",
     isLoggedIn:false,
     lastLoggedinDays:["monday","tuesday"]


}

console.log(jsuser.email)
console.log(jsuser["email"]);
console.log(jsuser["full name"])


jsuser.email="rahul@chatgpt.com"

// Object.freeze(jsuser)

jsuser.email="rahl@mirosoft.com"

console.log(jsuser);

jsuser.greeting=function(){
   
      console.log("hello")

}
jsuser.greetingTwo=function(){
   
    console.log(`hello ${this["full name"]}`)

}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());




