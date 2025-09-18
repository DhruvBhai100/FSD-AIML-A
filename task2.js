function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log('register end')   
    resolve();
    },8000)
    });   
}

function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
    console.log('get data end')   
    resolve();
    },8000)
    })
}

function calculateData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
    console.log('display data end')   
    resolve();
    },3000)
    })
}

function sendSMS(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
    console.log('send SMS end')   
    resolve();
    },1000)
    })
}


function logout(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
    console.log('logout end')   
    resolve();
    },1000)
    })
}

async function f1(){
    try{
    await login();
    await getData();
    await calculateData();
    await sendSMS();
    await logout();
    }
    catch(err){
        console.log('Error'+err)
    }
}