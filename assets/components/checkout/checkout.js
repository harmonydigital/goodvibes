formcheckout=document.getElementById('checkoutform')
totalfinesh=document.getElementById("totalfinesh")
// itensTotal=document.getElementById("totalfinesh")
inpuMMesa=document.getElementById('inputMesa')
whatsappId=document.getElementById('whatsappId')
inpuMWhats="" 

console.log('checkout',relogio())
function showNumber(){

    var n=100;
    return n+=1
  
}
getCheckout=()=>{ 
 

    select=document.getElementById('selectValidate')
    text = select.options[select.selectedIndex].text;
    containerCheckout=document.getElementById('checkout')
    containerCheckout.setAttribute("class", "checkout") 
    selectCheck=document.getElementById('selectCheckout')
    optionsCheck=selectCheck.options[selectCheck.selectedIndex].text
    observacaoPedido='Nenhuma observação'
    retiradavalue=0

    

    areaObs.addEventListener('change', function(event){
        
        observacaoPedido=event.target.value
        obs=observacaoPedido
        obsData={'observacaoPedido':observacaoPedido}
        // allordersBuy.push(obsData)
        console.log(obs)

        // prodsSelct.push(obsData) 
      

    })
    allordersBuy=[{ 
        idPedido:Math.floor(Math.random() * 1000).toString(),
        data:dataHora(),
        hora:relogio(),
        itens:prodsSelct,
        observacao:obs

    }]
    // VALIDA CAMPO HOME
    if(text=="Mesa"){
        mesaCheck=document.getElementById('selectMesaCheckout')
        
    }

    // VALIDA CAMPO CHECKOUT 
    if(optionsCheck=="Mesa"){ 
        mesaCheck.parentNode.style.cssText="display:flex"   

    }
    containerCheckout.style.cssText="display:block"




    
}


formaRetirada=()=>{
       
    retiradavalue=document.getElementById('selectCheckout').value
    setMesa=document.getElementById('setMesa') 
    clickpague=document.getElementById('clickpague')


    if(retiradavalue=='mesa'){
        setMesa.style.cssText="display:flex"   
        whatsappId.style.cssText="display:none"  
        clickpague.style.cssText="display:none"  

    }else if(retiradavalue=='balcao'){

        setMesa.style.cssText="display:none"  
        whatsappId.style.cssText="display:block"  
        clickpague.style.cssText="display:block"   
        inpuMVaue=0
    }

    //Mesa Digitada
    setMesa.addEventListener('focusout', function(e){ 
        inpuMVaue=document.getElementById('inputMesa').value.toString()   
    })

    //whats Digitado
    whatsappId.addEventListener('focusout', function(e){
              inpuMWhats=e.target.value.toString()  
          
    })
}


window.onload=()=>{
    
    ordersLabDeliveryArr=[] 
    recebePedidos=[]


    const date = new Date();
    // console.log(date)

   
 
}
