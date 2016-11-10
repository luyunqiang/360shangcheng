$(function(){
	 var swiper = new Swiper('.banner-box .swiper-container',{
	 	loop:true,
	 	autoplay:2000,
	 	pagination:'.swiper-pagination',
	 });
	  var myswiper = new Swiper('.chanpin2-box .swiper-container',{
	  	slidesPerView : 3,
        slidesPerGroup : 3,
	  })

	  var toTop=$('.to-top');
	  document.documentElement.scrollTop=1;
	    if (document.documentElement.scrollTop==1) {
	      var scrllobj=document.documentElement;
	    }else{
	      var scrllobj=document.body;
	    }
	    // if (scrllobj.scrollTop<(300+"px")){
	    // 	toTop.css({display:"none"})
	    // }else{
	    // 	toTop.css({display:"block"})
	    // }
	  toTop.click(function(){
	  	scrllobj.scrollTop=0;
	  	
	  })
})