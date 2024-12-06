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
        xPercent:110,
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

//hero

const heroDescTxt = new SplitType('.sc-hero .hero-content .content-collect .collect-desc', { types: 'words, chars', });
const heroMainTxt = new SplitType('.sc-hero .hero-content .content-main', { types: 'words, chars', });

const introMotion = gsap.timeline({
    paused:true,
})

introMotion
.from('.sc-hero .hero-content .content-main .char', {yPercent:100, stagger:0.1})
.from('.sc-hero .hero-content .content-collect .collect-desc .char', {yPercent:100, stagger:0.01})


gsap.to('.sc-hero .hero-bg',{
    scrollTrigger:{
        trigger:".sc-hero", //기준
        start:"0% 0%", //.sc-hero의 시작지점, window의 시작지점
        end:"100% 80%", //.sc-hero의 끝지점, window의 끝지점
        //markers: true,
        scrub:0,
    },
    scale:1,
});



let mhero = gsap.matchMedia();

mhero.add("(min-width: 769px)", () => {

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

});

let mmhero = gsap.matchMedia();

mmhero.add("(min-width: 769px)", () => {

    const scrollParagraph = new SplitType('.sc-hero .hero-content .content-paragraph .title', {types: 'lines, words, char',});
    const scrollParagraph2 = new SplitType('.sc-hero-about .about-text .title', {types: 'lines, words, char',});
    const scrollParagraph3 = new SplitType('.sc-hero-about .about-text .title', {types: 'lines, words, char',});
    const scrollParagraph4 = new SplitType('.sc-hero-about .about-text .desc', {types: 'lines, words, char',});
    const scrollParagraph5 = new SplitType('.sc-briefing .briefing-area .col-right .desc', {types: 'words, char',});
    const scrollParagraph6 = new SplitType('.sc-newsletter .newsletter-text', {types: 'lines, words, char',});
    
/*
    scr = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-hero .hero-content .content-paragraph',
            start: "20% 100%",
            scurb: true,
            //markers:true,
        },
    })
    scr.from ('.sc-hero .hero-content .content-paragraph .title .char',{
        duration:1,
        yPercent:110,
        stagger:0.01,
    })
*/
    $('[data-scroll="paragraph"]').each(function(i, el){
        scr = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "20% 100%",
                scurb: 0,
                //markers:true,
            },
        })
        scr.from ($(this).find('.char'),{
            duration:1,
            yPercent:110,
            stagger:0.005,
        })
    })
});



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


//featured
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

        a.fromTo($(this).find('.back'),
            { x: "10%" },
            { x: "-10%" }

        );

        a.to($(this).find('.front'),{     
            xPercent:-70,
            delay: -.5
        });

    })
    
   
});

mmShowcase.add("(max-width: 768px)", () => {

    
    $('.sc-showcase .showcase-item .content-thumb').each(function(){

        b = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "0% 100%",
                end: "100% -100%",
                scrub:true,
                //markers:true,
            },
        })

        
        b.fromTo($(this).find('.back'), 
            { y:"-20%" },
            { y:"20%" },
        );

        b.to($(this).find('.front'),{     
            yPercent:-10,
            delay: -.5
        });
    
    })

});


//showcase-about 
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
    yPercent:200
        
},{
    scrollTrigger:{
        trigger:'.sc-newsletter', //기준
        start:"0% 100%",
        end:"100% -100%", 
        //markers: true,
        scrub:0,
    },
    yPercent:-100
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