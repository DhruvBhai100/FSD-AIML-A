function register(){
    waitforfiveseconds();
console.log('register end')   
}
function sendEmail(){
    waitforfiveseconds();
console.log('send Email end')   
}
function login(){
    waitforfiveseconds();
console.log('login end')   
}
function getData(){
    waitforfiveseconds();
console.log('get Data end')   
}
function displayData(){
    waitforfiveseconds();
console.log('Display Data end')   
}
function waitforfiveseconds(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms)
    {}
}
register();
sendEmail();
login();
getData();
displayData();
console.log('call other application')



function register(cb){
    setTimeout(()=>{
      console.log('register end')   
      cb();
    },4000)

}
function sendEmail(cb){
  setTimeout(()=>{
      console.log('Send Email end')   
      cb();
    },3000)  
}
function login(cb){
    setTimeout(()=>{
      console.log('Login end')   
      cb();
    },1000)  
}
function getData(cb){
    setTimeout(()=>{
      console.log('get Data end')   
      cb();
    },8000)   
}
function displayData(){
    setTimeout(()=>{
      console.log('display data end')   
    },2000)  
}

//callback hell
register(()=>{
        sendEmail(()=>{
                login(()=>{
                      getData(()=>{
                              displayData();
                      });
                });
        });
});




console.log('call other application')




function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('register end')   
      resolve();
    },4000)
    });   
}

function sendEmail(){
  return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('send Email end')   
      resolve();
    },4000)
});
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('login end')   
      reject('Login Error');
    },4000)
});
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('get data end')   
      resolve();
    },4000)
});  
}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log('display data end')   
      resolve();
    },4000)
});  
}

// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)
// .catch((err)=>{
// console.log('Error:'+err);
// })

async function f1(){
    try{
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
    }
    catch(err){
        console.log('Error'+err)
    }
}
f1();




console.log('call other application')