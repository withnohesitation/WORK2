//스크롤
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 800)
})

//split
const headTxt = new SplitType('#header .gnb .nav-item a', { types: 'words, chars', });

$('.menu-toggle').click(function(){

    if($(this).hasClass('on')){
        menuMotion1.reverse();
        $('.gnb').stop().delay(500).slideUp();
        lenis.start();
        $('.header-util').removeClass('on');
        $('body').removeClass('hidden');
        
    }else{
        menuMotion1.play();
        $('.gnb').stop().slideDown();
        lenis.stop();
        $('.header-util').addClass('on');
        $('body').addClass('hidden');
    }

    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
    
})

$('.dimmed').click(function(){
    if ($('body').hasClass('hidden')) {
        $('.menu-toggle').removeClass('on')
        menuMotion1.reverse();
        $('.gnb').stop().delay(500).slideUp();
        $('.dimmed').stop().slideUp();
        $('.header-util').removeClass('on');
        lenis.start();
    } else {
        $('.menu-toggle').addClass('on')
    }
})

menuMotion1 = gsap.to('#header .gnb .nav-item a .char', {
    opacity:1,
    y:0,
    stagger:0.02,
    paused: true,
})
