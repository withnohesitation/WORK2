//loading


window.onload = function(){
    asd = gsap.timeline({
        onComplete:function(){
            gsap.to('.loading',{autoAlpha:0})
            introMotion.play();
        }
    })
    asd.to('.thumb-box img',{
        delay:2,
        x:0,
        stagger:0.1,
    })
    asd.to('.loading .text .end .char, .logo-text .char',{
        delay:-1.2,
        yPercent:-100,
        stagger:0.1,
    })
    asd.to('.thumb-box img',{
        delay:0.5,
        xPercent:100,
        stagger:{
            from:"end",
            each:0.1,
        },
    })
    asd.to('.loading .text .logo-text .char',{
        delay:-1,
        yPercent:-200,
        stagger:0.1
    })
    
    
    $('.loading .curr').delay(8000).hide();
    $('.loading .end').delay(8000).addClass('on');
}



const heroDescTxt = new SplitType('.sc-hero .hero-content .content-collect .collect-desc', { types: 'words, chars', });
const heroMainTxt = new SplitType('.sc-hero .hero-content .content-main', { types: 'words, chars', });

const introMotion = gsap.timeline({
    paused:true,
    
})
introMotion
.from('.sc-hero .hero-content .content-main .char', {yPercent:100, stagger:0.1})
.from('.sc-hero .hero-content .content-collect .collect-desc .char', {yPercent:100, stagger:0.01})


//const heroDescTxt = new SplitType('.sc-hero .hero-content .content-collect .collect-desc', { types: 'words', });



gsap.to('.sc-hero .hero-bg',{
    scrollTrigger:{
        trigger:".sc-hero", //기준
        start:"0% 0%", //.sc-hero의 시작지점, window의 시작지점
        end:"100% 80%", //.sc-hero의 끝지점, window의 끝지점
        //markers: true,
        scrub:0,
    },
    scale:1,
})

gsap.to('[data-scroll="object1"]',{
    scrollTrigger:{
        trigger:`[data-scroll="object1"]`, //기준
        start:"0% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
    yPercent: -40
})

$('[data-scroll="object2"]').each(function(i, el){
    gsap.to($(this),{
        scrollTrigger:{
            trigger:$(this), //기준
            start:"0% 100%",
            end:"100% 0%", 
            //markers: true,
            scrub:0,
        },
        yPercent: $(this).data('y')
    })
})

//featured 복제 후 붙여넣기
marqueeEl = $('.sc-featured .featured-box').find('ul').clone();
$('.featured-box').append(marqueeEl)

gsap.to('.sc-featured .featured-box ul',20, {
    repeat:-1, //음수값 무한반복
    xPercent:-100,
    ease:"none"
})
gsap.to('.sc-featured .featured-box',{
    scrollTrigger:{
        trigger:'.sc-featured .featured-box', //기준
        start:"0% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
        
    },
    ease:"none",
    xPercent: -40,
})


//showcase

let mmShowcase = gsap.matchMedia();

mmShowcase.add("(min-width: 769px)", () => {

    horiMotion = gsap.to('.sc-showcase .showcase-list',{
        scrollTrigger:{
            trigger:'.sc-showcase', //기준
            start:"0% 0%",
            end:"100% 100%", 
            //markers: true,
            scrub:0,
        },
        xPercent: -85
    })
    
    
    $('.sc-showcase .showcase-item .content-thumb').each(function(){
        
        a = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                containerAnimation: horiMotion,
                start: "0% 100%",
                end: "100% 0%",
                scrub:true,
                //markers:true,
            },
        })
    
        a.to($(this).find('.front'),{     
            xPercent:-50,
        });
    
        a.to($(this).find('.back img'),{     
            xPercent:-10,
            delay: -0.4
        });
        
    
    })
    
   
});

mmShowcase.add("(max-width: 768px)", () => {

    
    $('.sc-showcase .showcase-item .content-thumb').each(function(){
        
        b = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "0% 100%",
                end: "100% 0%",
                scrub:true,
                //markers:true,
            },
        })

        b.to($(this).find('.back img'),{     
            yPercent:-10,
        });

        b.to($(this).find('.front'),{     
            yPercent:-20,
            delay: -.3
        });
    
        
        
    
    })

});
//showcase-about bg
gsap.fromTo('.sc-showcase-about .about-thumb .bg',{
    scale: 1.2,
    yPercent:-100,
        
},{
    scrollTrigger:{
        trigger:'.sc-showcase-about', //기준
        start:"0% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
    scale:1,
    yPercent:0,
})


//arrival
marqueeEl = $('.sc-arrival .arrival-box').find('ul').clone();
$('.arrival-box').append(marqueeEl)

gsap.to('.sc-arrival .arrival-box ul',20, {
    repeat:-1, //음수값 무한반복
    xPercent:100,
    ease:"none"
})
gsap.to('.sc-arrival .arrival-box',{
    scrollTrigger:{
        trigger:'.sc-arrival .arrival-box', //기준
        start:"0% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
        
    },
    ease:"none",
    xPercent: 50,
})

//briefing
gsap.fromTo('.sc-briefing .briefing-area .col-left img',{
    scale: 1.15,
    y:-200
        
},{
    scrollTrigger:{
        trigger:'.sc-briefing .briefing-area .col-left', //기준
        start:"0% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
    scale:1,
    y:100
})

//newsletter
gsap.fromTo('.sc-newsletter .newsletter-card',{
    yPercent:150
        
},{
    scrollTrigger:{
        trigger:'.sc-newsletter', //기준
        start:"50% 100%",
        end:"0% 0%", 
        //markers: true,
        scrub:0,
    },
    yPercent:0
})


//footer
gsap.fromTo('.footer-bg img',{
    scale: 1.25,
    y:-96,
        
},{
    scrollTrigger:{
        trigger:'#footer', //기준
        start:"0% 100%",
        end:"50% 0%",
        //markers: true,
        scrub:0,
        
    },
    scale: 1,
    y:0,
    
})