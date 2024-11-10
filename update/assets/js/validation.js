
function initApp(user){
 
  userView=document.getElementById('user')
  

  userView.innerHTML= `   
<div class="controls d-flex align-items-center"> 
      <button type="button" class="btn "  onclick="history.back()"> 
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h6> Editar Produtos<i class="bi bi-arrow-down-left"></i></h6>
         <button id="btnFullScreen" onclick="fullScreen()"><i style="color: black !important" class="fa-solid fa-expand"></i></button>
    
    </div>
    
  
    
  `;
  
}

initApp('Administrador')