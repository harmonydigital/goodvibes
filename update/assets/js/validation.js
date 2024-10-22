 
// validateView=document.getElementById('validation')

// if (localStorage.getItem("lastname")){
//   validateView.style.display="none"
//   initApp(localStorage.getItem("lastname"))
//   inputUserName=localStorage.getItem("lastname")
  
// }

// function validation(event){

//      event.preventDefault()
//      var select=document.getElementById('selectValidate')
//      var selectValue=select.options[select.selectedIndex].value
//      var validateView=document.getElementById('validation')
//      var userView=document.getElementById('user')
//        inputUserName=document.getElementById('userName').value
   
//        text = select.options[select.selectedIndex].text;
 

  
//        if(inputUserName.length>3 & selectValue!=1){
//         localStorage.setItem("lastname", inputUserName);
//         retirada=text;
//         initApp(inputUserName)
     
//       }else{
//         alert('Preencha os Campos')
  
//       }


// }
function initApp(user){
 
  userView=document.getElementById('user')
  console.log(path)

  userView.innerHTML= `   

    <div>
      <a href="javascript:void(0)"  onclick="history.back()"  style="color: white;
      font-size: 1.4rem;
      margin: 0px 20px;">
        <i  class="fa-solid fa-house"></i>
         
      </a>
    </div>
    <div style="padding: 0 15px; ">  
        Olá <strong>`+user +`</strong> 
    </div>
    <div style="position: absolute;top: 0;right: 0;margin: 30px;color: black; ">
      <button id="btnFullScreen" onclick="fullScreen()"><i style="color: black !important" class="fa-solid fa-expand"></i></button>
    </div>
    
  `;
  
}

initApp('Administrador')