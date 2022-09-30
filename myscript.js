function listProfile(key, flag){
fetch(`https://reqres.in/api/users?page=${key}`)
.then(response => response.json())
.then(json => {
    console.log(json);
    console.log('Flag',flag)
    console.log( 'Array length', Object.keys( json.data ).length ) ;
    document.getElementById("increment").disabled = false;
    document.getElementById("increment").style.backgroundColor = "#04AA6D";
    document.getElementById("increment").style.color = "white";
    document.getElementById("decrement").disabled = false;
    document.getElementById("decrement").style.backgroundColor = "#04AA6D";
    document.getElementById("decrement").style.color = "white";
    if(Object.keys( json.data ).length < 1 && flag === -1 ){
        resetKey(key);
        document.getElementById("decrement").disabled = true;
        document.getElementById("decrement").style.backgroundColor = "rgb(235, 235, 235)";
        document.getElementById("decrement").style.color = "white";
        document.getElementById("increment").disabled = false;
        document.getElementById("increment").style.backgroundColor = "#04AA6D";
        document.getElementById("increment").style.color = "white";
        
        return 1;
    }
    else if(Object.keys( json.data ).length < 1 && flag === 1 ){
        resetKey(key);
        document.getElementById("increment").disabled = true;
        document.getElementById("increment").style.backgroundColor = "rgb(235, 235, 235)";
        document.getElementById("increment").style.color = "white";
        document.getElementById("decrement").disabled = false;
        document.getElementById("decrement").style.backgroundColor = "#04AA6D";
        document.getElementById("decrement").style.color = "white";
        return 1;
    }
    const profileArray  =json.data.map(arrayEl => {

        return `
     
            <div class="column">
                    <div class="first_name">${arrayEl.first_name}</div>
                    <div class="email">${arrayEl.email}</div>
             
                    <img src="${arrayEl.avatar}" alt="name" style="width:200px; height:200px">
             
                
            </div>
       
        `
    })
   document.querySelector('.main-container').innerHTML = profileArray.join('');
})
}

let key=1;
let flag= 0;
function resetKey(val){
key = 0;
}

listProfile(key,flag);
function decrement(){
key++;
flag=1;
listProfile(key,flag);
console.log('Key value',key);
}
function increment(){
key--;
flag =-1;
listProfile(key,flag);
console.log('Key value', key);
}

