var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper = new Swiper(".mySwiperTabs", {
          slidesPerView: 3,
          cssMode: true,
           autoplay: {
          delay: 5500,
          disableOnInteraction: false,
          },
          
          });



          generateID=()=>{   

            var currencyHour=relogio().replaceAll(':','').toString() 
            var currencyID=Math.floor(Math.random() * 1000).toString() 
            var ID=currencyID+currencyHour+currencyID

            return ID
          } 

          