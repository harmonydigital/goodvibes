
function initApp(user){
 
  userView=document.getElementById('user')
  

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