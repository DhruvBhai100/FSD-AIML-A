function login(){
    waitforeightseconds();
    console.log('Login end')
}

function getData(){
    waitforeightseconds();
    console.log('Get Data end')
}

function calculateData(){
    waitforthreeeconds();
    console.log('Calculate Data end')
}

function sendSMS(){
    waitforoneseconds();
    console.log('Send SMS end')
}

function logout(){
    waitforoneseconds();
    console.log('logout end')
}

function waitforoneseconds(){
    const ms=new Date().getTime()+1000;
    while(new Date().getTime()<ms)
    {}
}

function waitforeightseconds(){
    const ms=new Date().getTime()+8000;
    while(new Date().getTime()<ms)
    {}
}

function waitforthreeeconds(){
    const ms=new Date().getTime()+3000;
    while(new Date().getTime()<ms)
    {}
}

login();
getData();
calculateData();
sendSMS();
logout();
