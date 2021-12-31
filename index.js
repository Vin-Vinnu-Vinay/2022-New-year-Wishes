let uname = document.getElementById('uname');
let mobile = document.getElementById('mobile');
let loginPage = document.getElementById('card');
let messge = document.getElementById('clickHere');
let framePic = document.getElementById('frame');
let frndName;
let frndImage = document.getElementById('frnd');
let mesageToFrnd = document.getElementById('message');

const onLogin = () =>{
    if(frndName.uname===uname.value && frndName.mobile===Number(mobile.value)){
        loginPage.style.display = 'none';
        messge.style.display = '';
        messge.innerHTML = `<h1 id="textName" style="font-size: 50px;" >Welcome
         ${frndName.name} click here to know my opinion about you</h1>`;
         frndImage.setAttribute('src',frndName.image);
         mesageToFrnd.innerHTML = frndName.message;
    }
    else{
        alert("I think you are not our batch 😅")
    }    
}

const onTextClick = () => {
    messge.style.display = 'none';
    framePic.style.display = '';
}

const onChangeName = () =>{
    datas.find(e=>{
        if(uname.value===e.uname){
            frndName = e;
        }
    })
}