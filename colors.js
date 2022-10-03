var Body = {
	setColor: function(color) {
 $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
  $('body').css('backgroundColor', color);
  }
 }

// var Body = {
//     setColor: function(color) {
//       document.querySelector('body').style.color = color;
//    },
   
//    setBackgroundColor: function(color) {
//       document.querySelector('body').style.backgroundColor = color;
//    }
   
//    }
   
   


   var Links = {
    setColor: function(color) {
        $('a').css('color', color);
    //  var alist = document.querySelectorAll('a');
    //  var i = 0;
    //  while(i < alist.length) {
    //  alist[i].style.color = color;
    //  i = i + 1;
    //        }
       }
       
   }
   
//    $('a')는 이 웹페이지에 있는 모든 <a> 태그를 jQuery로 제어하겠다는 뜻. 



       function nightDayHandler(self) {
   var target = document.querySelector('body');
           if (self.value === 'night') {
               Body.setBackgroundColor('black');
               Body.setColor('white');
                       self.value = 'day'
                       Links.setColor('powderblue');
               
           } else {
               Body.setBackgroundColor('skyblue');
               Body.setColor('black');
                       self.value = 'night'
                       Links.setColor('blue');
   
               }
   }

// 슬라이더


var mySwiper = new Swiper('.swiper-container', {
    // 슬라이드를 버튼으로 움직일 수 있습니다.
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        
    // 현재 페이지를 나타내는 점이 생깁니다. 클릭하면 이동합니다.
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    
    // 현재 페이지를 나타내는 스크롤이 생깁니다. 클릭하면 이동합니다.
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
        
    // 3초마다 자동으로 슬라이드가 넘어갑니다. 1초 = 1000
      autoplay: {
        delay: 3000,
      },
    });

    // 네비 엔터키검색
    function submit() {
      if (window.event.keyCode == 13) {
          alert(document.getElementById('submit').value + '로 검색하시겠습니까 ?');
      }
    }
    function submit() {
          alert(document.getElementById('submit').value + '로 검색하시겠습니까 ?');
    }