/** 
 @type {HTMLInputElement}
 @type {HTMLInputElement}
*/
const input_username = document.getElementById('username');
const input_password = document.getElementById('password');

const bt = document.getElementById('submitbt');
const fg = document.getElementById('forget');


bt.addEventListener("click" , () =>{

    const name = input_username.value;
    const password = input_password.value;

    if(password.length>=8){
    
        if(name!=""){
            console.log(name);
            console.log(password);
            const url = './login_suceed.html';           
            window.location.href = url;
        }
        else{
            alert("輸入不能為空白！");
        }
    }
    else{
        alert("輸入不能為空白！");
    }
})

fg.addEventListener('click',()=>{
    alert("你真的好可憐 你怎麼不去問你父母 喔對了，你是孤兒！GAY");
})
