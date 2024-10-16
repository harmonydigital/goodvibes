 
validateView=document.getElementById('validation')
validateView.style.cssText='background-image:url("assets/images/harmony_yellow_drink.gif")'
if (localStorage.getItem("lastname")){
  validateView.style.display="none"
  initApp(localStorage.getItem("lastname"))
  inputUserName=localStorage.getItem("lastname")
  
}

function exitSection(){

  localStorage.removeItem("lastname");
  localStorage.removeItem("idClient");

  location.reload() 

  
}

function validation(event){

     event.preventDefault()
     var select=document.getElementById('selectValidate')
     var selectValue=select.options[select.selectedIndex].value
     var validateView=document.getElementById('validation')
     var userView=document.getElementById('user')
       inputUserName=document.getElementById('userName').value
   
       text = select.options[select.selectedIndex].text;
 

  
       if(inputUserName.length>3 ){
        // if(inputUserName.length>3 & selectValue!=1){ CONSULTA CAMPO SELECT RETIRADA
        

          idClient=Math.floor(Math.random() * 2000)

          localStorage.setItem("lastname", inputUserName);
          localStorage.setItem("idClient", idClient);
          retirada=text;
         
          initApp(inputUserName)


     
      }else{
        alert('Preencha os Campos')
  
      }


}
function initApp(user){
 
  userView=document.getElementById('user')

  console.log('user',user)

  if(user=="1533#"){

    user="Administrador"
        userView.innerHTML= `  

                <!--VALIDATION -->
                <div class="bg-light p-5 rounded mt-3">
                  <h1>Olá, `+user +`</h1>
                  <p class="lead">Altere seu cardápio, adicione novos produtos e gerencie seus pedidos.</p>
                  <a class="btn btn-lg btn-primary" href="/admin/admin.html" role="button">Gerenciar </a>
                </div>


                <div > 
                 
                  <div style="position: absolute;top: 0;right: 0;margin: 25px;color: black; ">
                  <button onclick=" exitSection()" ><i class="fa-solid fa-right-from-bracket"></i> sair</button>
                  <button id="btnFullScreen" onclick="fullScreen()"><i style="color: black !important" class="fa-solid fa-expand"></i></button>

              </div>
          
        `;
}else{
  userView.innerHTML= `   
 
                <div class="container"> 
                  <!-- VALIDATION.JS -->
                  <i style="color:black;" class="fa-regular fa-user"></i>
                  Olá <strong>`+user +`,</strong>
                  </div>
                  <div style="position: absolute;top: 0;right: 0;margin: 25px;color: black; ">
                  <button onclick=" exitSection()" ><i class="fa-solid fa-right-from-bracket"></i> sair</button>
                  <button id="btnFullScreen" onclick="fullScreen()"><i style="color: black !important" class="fa-solid fa-expand"></i></button>
                
              </div>

              <div class="container">
              <div class="mt-3">
                 <h2>O que deseja pedir hoje?</h2>
              </div>
              </div>
               
          
        `;
}
  setTimeout(function init(){
    validateView.style.display="none"
    document.getElementsByTagName('body')[0].style.cssText="overflow:auto;"
 }, 1000);
}