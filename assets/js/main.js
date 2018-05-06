/*
 * INK. Templates (Personal Portofolio)
 * Created by : THEMES FARADAY
 * Version : 1.1
 */


/* INDEX OF CONTENTS JAVASCRIPT
==================================================
01. PRELOADER
02. PARALLAX BACKGROUND EFFECT
03. TEXT ROTATE
04. HOME ARROW DOWN
05. NAVIGATION
06. MOBILE NAVIGATION
07. SMOTH SCROLL
08. PORTFOLIO FILTER IMAGE
09. TESTIMONIAL SLIDER
10. SCROLL ON TOP BUTTON
11. ANIMATION EFFECT
*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        const skills = [
            { 
                name: 'HTML5',
                value: 90,
                class: 'progress-bar-success'
            },
            { 
                name: 'CSS3',
                value: 70,
                class: 'progress-bar-info'
            },
            { 
                name: 'Javascript/ES6',
                value: 70,
                class: 'progress-bar-warning'
            },
            { 
                name: 'NodeJS',
                value: 60,
                class: ''
            },
            { 
                name: 'Mongo/Mongoose',
                value: 70,
                class: 'progress-bar-success'
            },            
            { 
                name: 'Angular1.5',
                value: 80,
                class: 'progress-bar-info'
            },            
            { 
                name: 'Angular4/5',
                value: 40,
                class: 'progress-bar-warning'
            },            
            { 
                name: 'Typescript',
                value: 40,
                class: ''
            },            
            { 
                name: 'Bootstrap',
                value: 80,
                class: 'progress-bar-success'
            },            
            { 
                name: 'Material',
                value: 80,
                class: 'progress-bar-info'
            },            
            { 
                name: 'AWS',
                value: 70,
                class: 'progress-bar-warning'
            },            
            { 
                name: 'Keen.io',
                value: 80,
                class: ''
            },
            { 
                name: 'Intercom.io',
                value: 80,
                class: 'progress-bar-success'
            },            
            { 
                name: 'VideoJS/360',
                value: 60,
                class: 'progress-bar-info'
            },            
            { 
                name: 'Filestack',
                value: 70,
                class: 'progress-bar-warning'
            },            
            { 
                name: 'Muut',
                value: 80,
                class: ''
            },
            { 
                name: 'Paypal/Braintree',
                value: 80,
                class: 'progress-bar-success'
            },  
            { 
                name: 'React/Redux',
                value: 80,
                class: 'progress-bar-info'
            },        
        ];

        const portfolios = [
            {
                class: 'javascript',
                imgSrc: 'assets/img/portfolio/portfolio-1.jpg',
                imgAlt: 'GA Project 1',
                title: 'GA Project 1: John Titor',
                description: 'John Titor: The Time Traveler is a HTML5 (mobile responsive) canvas game made with vanilla javascript/jQuery.',
                githubURL: 'https://github.com/pujoey/John-Titor',
                siteURL: 'http://pujoey.github.io/John-Titor/index.html',
            },
            {
                class: 'rails',
                imgSrc: 'assets/img/portfolio/portfolio-2.jpg',
                imgAlt: 'GA Project 2',
                title: 'GA Project 2: Train',
                description: 'Ruby on Rails project. This app is for personal trainers to keep track of clients sessions with calendar and for clients to keep track of their own goals and progress.',
                githubURL: 'https://github.com/pujoey/train',
                siteURL: 'https://glacial-lowlands-2707.herokuapp.com/',
            },
            {
                class: 'node',
                imgSrc: 'assets/img/portfolio/portfolio-3.jpg',
                imgAlt: 'GA Project 3',
                title: 'GA Project 3: RESTful Crawl',
                description: 'Node and Express app.  This website is a place where you can create, share or join food crawls near you!',
                githubURL: 'https://github.com/seb-sal/Resfulcrawl',
                siteURL: 'https://fast-brook-3166.herokuapp.com/',
            },
            {
                class: 'angular node',
                imgSrc: 'assets/img/portfolio/portfolio-4.jpg',
                imgAlt: 'GA Project 4',
                title: 'GA Project 4: Tempify',
                description: 'MEAN App. This app allows you to control your NEST thermostat to view current indoor temperature and set new target temperature.',
                githubURL: 'https://github.com/seb-sal/Resfulcrawl',
                siteURL: 'https://fast-brook-3166.herokuapp.com/',
            },
            {
                class: 'angular node',
                imgSrc: 'assets/img/portfolio/portfolio-5.jpg',
                imgAlt: 'GIBLIB App',
                title: 'GIBLIB App',
                description: 'MEAN stack 360° HLS streaming videoJS player | Filestack | elasticsearch | Keen.io | Intercom.io CRM | Muut | Braintree for payment gateway',
                githubURL: 'https://github.com/Giblib/giblib-frontend',
                siteURL: 'https://giblib.com',
            },
            {
                class: 'react',
                imgSrc: 'assets/img/portfolio/portfolio-6.jpg',
                imgAlt: 'Todo/Calc/Chat',
                title: 'React Todo/Calc/Chat',
                description: 'React Todo/Calc/Chat',
                githubURL: 'https://github.com/pujoey/react-todo-calc-chat',
                siteURL: 'https://react-training-todo.firebaseapp.com/',
            },
        ].reverse();


        /* 01. PRELOADER
        ==================================================*/

        $(window).on('load', function () {
            $("#status").fadeOut();
            $("#preloader").delay(500).fadeOut("slow");
        })


        /* 02. PARALLAX BACKGROUND EFFECT
        ==================================================*/

        var parallax = function () {
            $(window).stellar();
        };

        $(function () {
            parallax();
        });


        /* 03. TEXT Typed
        ==================================================*/

        $(document).on('ready', function () {
            var typed = new Typed('#typed', {
                strings: [
                    "Joey Lin",
                    "Frontend Developer @GIBLIB",
                    "Gamer",
                    "Foodie",
                    "Nice to meet you (〃∀〃)~♡ ",
                    "（づ¯ ³ ¯）づ",
                    "(ˊ● ω ●ˋ)",
                    "（◎`·ω·'）人（'·ω·`*）",
                    "づ(・ω・)づ  ",
                    "(’・ω・‘) ",
                    "(ゝ∀･)",
                    "ლ(・ω・ლ)",
                    "（ノ≧∀≦）ノ",
                    "(・∀・)  ",
                    "(◕‿◕)",
                    "（♡∀♡）",
                    "Σ（゜ロ゜;）",
                    "(*゜Д゜)ゞ”",
                    "ヽ（・∀・）ノ",
                    "（▼皿▼＃",
                    "ヽ（＃`Д`）ノ",
                    "♡（*'∀`*）人（*'∀`*）♡",
                    "(((*°▽° *）八（* °▽°*)))♪",
                    "Σ(・ω・ノ)ノ ┴─┴",
                    "ヽ（'Д`）人（'Д`）人（'Д`）ノ ",
                ],
                startDelay: 2000,
                typeSpeed: 40,
                smartBackspace: true,
                loop: true,
                loopCount: 3,
              });
        });


        /* 04. HOME ARROW DOWN
        ==================================================*/

        var arrowBounce = function () {
            var arrow = $(".arrow");
            if (arrow.hasClass("lift")) {
                arrow.removeClass("lift");
            } else {
                arrow.addClass("lift");
            }
        };

        var darkArrowBounce = function () {
            var arrow = $(".dark-arrow");
            if (arrow.hasClass("lift")) {
                arrow.removeClass("lift");
            } else {
                arrow.addClass("lift");
            }
        };

        setInterval(arrowBounce, 800);
        setInterval(darkArrowBounce, 800);

        /* 05. NAVIGATION
        ==================================================*/

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('#navigation').addClass('navigation-background');
            } else {
                $('#navigation').removeClass('navigation-background');
            }
        });


        /* 06. MOBILE NAVIGATION
        ==================================================*/

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });


        /* 07. SMOTH SCROLL
        ==================================================*/

        $('a.smoth-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


        /* 09. TESTIMONIAL SLIDER
        ==================================================*/

        // $('.flexslider').flexslider({
        //     animation: "fade",
        //     directionNav: false
        // });


        /* 10. SCROLL ON TOP BUTTON
        ==================================================*/

        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        $('.scroll-to-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


        /* 11. ANIMATION EFFECT
        ==================================================*/

        AOS.init({
            duration: 1200,
            once: true,
            disable: 'mobile'
        });

        /* 12. APPEND HTML TO SKILLS
        ==================================================*/
        let skillsHTML = skills.reduce((prev, curr) => {
            return prev + 
                '<div class="col-md-3 col-sm-6">' +
                    '<div class="progress">' + 
                        '<div class="progress-bar progress-bar-striped ' + curr.class + '" role="progressbar" style="width: ' + curr.value + '%" aria-valuenow="' + curr.value + '" aria-valuemin="0" aria-valuemax="100">' + curr.name + '</div>' +
                    '</div>' +
                '</div>';
        }, '')
        $('#skill-items').append(skillsHTML);

        /* 13. APPEND HTML TO PORTFOLIO
        ==================================================*/
        let portfolioHTML = portfolios.reduce((prev, curr) => {
            return prev + 
            '<div class="grid mix col-md-4 col-sm-6 col-xs-12 ' + curr.class + '">' +
                '<figure class="port-desc">' +
                    '<img src="' + curr.imgSrc + '" class="img-responsive" alt="' + curr.imgAlt + '" />' +
                    '<figcaption>' +
                        '<h4>' + curr.title +  '</h4>' +
                        '<p>' + curr.description + '</p>' +
                        '<div class="fig-links text-center">' +
                            '<a href="' + curr.githubURL + '" target="_blank" title="View on Github">' +
                                '<i class="fa fa-github fa-3x"></i>' +
                            '</a>&nbsp;&nbsp;&nbsp;' +
                            '<a href="' + curr.siteURL + '" target="_blank" title="Launch">' +
                                '<i class="fa fa-link fa-3x"></i>' +
                            '</a>' +
                        '</div>' +
                    '</figcaption>' +
                '</figure>' + 
            '</div>';
        }, '');
        console.log(portfolioHTML)
        $('#portfolio-items').append(portfolioHTML);

        /* 08. PORTFOLIO FILTER IMAGE
        ==================================================*/
        $('#portfolio-items').mixItUp();
        


    });

})(jQuery);
