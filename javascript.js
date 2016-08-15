$(document).ready(function() {
            

    
    ///////////////////////////////////////////  NAV BAR  ////////////////////////////////////////////////  

    //NAV BAR STYLING CHANGE WHEN USER SCROLLS
    $(document).scroll(function() {

        //Get number of pixels we scroll away from the top of screen
        var scroll = $(document).scrollTop();
        //console.log(scroll);

        //If we are further then 30 pixels then...
        if (scroll >= 30) {


            //Change the main nav bar css
            $(".nav_bar").css(
                {
                    "background": "#FFFFFF",
                    "color": "#8d8d8d",
                    "border-bottom": "solid",
                    "border-width": "1px",
                    "border-color": "#e3e3e3",
                    "box-shadow": "0px 1px 5px #e3e3e3"
                });

            //Change the individual links in nav bar
            $(".nav_links li a").css("color", "#8d8d8d");
            $(".nav_links li a").css("background", "#FFFFFF");



            //Change default hover that we have in our original CSS
            $(".link").hover(function() { 
               $(".nav_links li a").css("background", "#FFFFFF");
            });


        }

        else {

            //Change the main nav bar css back to original
            $(".nav_bar").css(
                {
                    "background": "none",
                    "color": "#FFFFFF",
                    "border": "hidden",
                    "box-shadow": "none"
                });

            //Change links and link background back to original
            $(".nav_links li a").css("color", "#FFFFFF");
            $(".nav_links li a").css("background", "none");

            //Change the link hover back to it's default
            $(".link").hover(function() {
               $(".nav_links li a").css("background", "none");
            });

        } //End else

    }); //END NAV STYLING FOR SCROLLING 





  ///////////////////////////////////////////  PROJECTS SECTION VIEWER  /////////////////////////////////////////////////////  

    //MAKE ALL OF MY PROJECTS INTO VARIABLES IN ORDER TO LOOP THROUGH THEM TO DISPLAY
    var front_end = [
        {
            url: "http://codepen.io/aball6412/full/oLmOQJ/",
            img: "/images/dungeon_crawler.png",
            title: "ROGUELIKE DUNGEON CRAWLER GAME",
            preview: "Just as it sounds. Play a classic Roguelike Dungeon Crawler game by clicking below!!",
            skills: ["Javascript", "React.js", "Bootstrap", "HTML", "SASS"]
        },
        {
            url: "http://codepen.io/aball6412/full/YWdQAL/",
            img: "/images/game_of_life.png",
            title: "GAME OF LIFE",
            preview: "The Game of Life is a cellular automaton that simulates how life evolves. Check it out!",
            skills: ["Javascript", "React.js", "Bootstrap", "HTML", "SASS"]
        },
        {
            url: "http://codepen.io/aball6412/full/pyqRjK/",
            img: "/images/simon_game.png",
            title: "SIMON GAME",
            preview: "Your goal is to remember twenty in a row. If you choose to accept this mission, visit the link below.",
            skills: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery"]
        },
        {
            url: "http://codepen.io/aball6412/full/RaqMVV/",
            img: "/images/tic_tac_toe.png",
            title: "TIC TAC TOE",
            preview: "It's the ultimate game. A classic. Try your best to beat the computer, but I'm not betting on it!",
            skills: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery"]
        },
        {
            url: "https://codepen.io/aball6412/full/PNdYYW/",
            img: "/images/pomodoro_clock.png",
            title: "POMODORO CLOCK",
            preview: "The best way to be productive is to simply get started. So go. Get started. Use the Pomodoro Clock below!",
            skills: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery"]
        },
        {
            url: "http://codepen.io/aball6412/full/XKRJAW/",
            img: "/images/camper_leaderboard.png",
            title: "CAMPER LEADERBOARD",
            preview: "Add lots of React.js and a dash of Free Code Camp's API and you have yourself a Camper Leaderboard! Click below to see which campers have the most points.",
            skills: ["React.js", "Javascript", "jQuery", "Bootstrap", "SASS", "HTML", "FreeCodeCamp-API"]
        },
        {
            url: "http://codepen.io/aball6412/full/EyWRbR/",
            img: "/images/markdown_previewer.png",
            title: "MARKDOWN PREVIEWER",
            preview: "Simple app that shows the basics of React (and SASS)! Check it out!",
            skills: ["React.js", "Javascript", "Bootstrap", "SASS"]
        },
        {
            url: "http://codepen.io/aball6412/full/VaBVOV/",
            img: "/images/calculator.png",
            title: "JAVASCRIPT CALCULATOR",
            preview: "Click below to do some quick math!",
            skills: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery"]
        },
        {
            url: "http://codepen.io/aball6412/full/PNQOep/",
            img: "/images/quote_generator.png",
            title: "RANDOM QUOTE MACHINE",
            preview: "Click a button, get a quote! There will never be a lack of inspiration generated from this page.",
            skills: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Forismatic API"]
        },

//                {
//                    url: "http://codepen.io/aball6412/full/ZWxYzw/",
//                    img: "http://codemzy.github.io/img/projects/portfolio_fe_calculator.jpg",
//                    title: "LOCAL WEATHER",
//                    preview: "Will it rain? Is it blistering hot? Check the link below to find out!",
//                    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Open Weather Map API"]
//                },

        {
            url: "http://codepen.io/aball6412/full/YqaZjx/",
            img: "/images/wikipedia_viewer.png",
            title: "WIKIPEDIA VIEWER",
            preview: "No need to go to Wikipedia.com. I connected to their API so you can search right here!",
            skills: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Wikipedia API"]
        },

        {
            url: "http://codepen.io/aball6412/full/vGjKKM/",
            img: "/images/twitchtv.png",
            title: "TWITCH.TV",
            preview: "Who is currently streaming on Twitch.tv? Find out here.",
            skills: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery", "Twitch.tv API"]
        }
    ];


    var back_end = [
        {
            url: "https://fcc-url-short-ms.herokuapp.com/",
            img: "/images/short_url.png",
            title: "SHORT URL",
            preview: "I hate long URL's. That's why we've decided to make them short for you!",
            skills: ["Javascript", "Node.js", "Express.js", "MongoDB"]
        },

        {
            url: "https://img-search-abstract-layer.herokuapp.com/",
            img: "/images/image_search.png",
            title: "IMAGE SEARCH",
            preview: "Need to search for an image and get the JSON data for that image? This microservice can do just that. Beware, the JSON can look rough if you don't have a JSON viewer plugin installed.",
            skills: ["Javascript", "Node.js", "Express.js", "MongoDB", "Imgur API"]
        },

        {
            url: "https://file-metad-microservice.herokuapp.com/",
            img: "/images/file_size.png",
            title: "FILE SIZE",
            preview: "How big is your file? This microservice will give you the low down.",
            skills: ["Javascript", "Node.js", "Express.js"]
        },

        {
            url: "https://quiet-lake-40342.herokuapp.com/",
            img: "/images/timestamp.png",
            title: "TIME STAMP",
            preview: "Easily convert unix timestamps to natural date format and vice versa.",
            skills: ["Javascript", "Node.js", "Express.js"]
        }
    ];


    var full_stack = [
        {
            url: "https://modedevtest.herokuapp.com/",
            img: "/images/psd-mockup.png",
            title: "PHOTOSHOP MOCKUP IMPLEMENTATION",
            preview: "After being provided a Photoshop mockup, I was able to turn it into an exact replica of the site. Including, backend functionality of the email signup process.",
            skills: ["Javascript", "Bootstrap", "Apache", "PHP", "MySQL", "Responsive Design"]

        },
        {
            url: "https://nightlife-coord-app.herokuapp.com/",
            img: "/images/nightlife_app.png",
            title: "NIGHTLIFE COORDINATION",
            preview: "A nightlife coordination full stack app, log in with Twitter and register your attendence at venues in any town or city.",
            skills: ["Javascript", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Yelp API"]
        },

        {
            url: "https://vote-app.herokuapp.com/",
            img: "/images/voting_app.png",
            title: "VOTE APP",
            preview: "A voting app built with the MEAN stack. Vote on polls or add your own polls.",
            skills: ["Javascript", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Chart.js"]
        }
    ];



    $(".full_stack").click(function() {

        //Clear out anything that might previously have been in target div
        $(".target").html("");

        //Create variable to hold the html string
        var project_str = "";
        var skills_str = "";


        //Loop through projects and add objects to the html string
        for (var i in full_stack) {



            //Get coding skills and put in skills_str
            var skill_list = full_stack[i].skills;

            for (var j=0; j<= skill_list.length-1; j++) {

                if (j === (skill_list.length -1)) {
                    skills_str += skill_list[j];
                }
                else {
                    skills_str += skill_list[j] + ", ";
                }
            }



            project_str += "<div class='project_img col-md-8'>" +

                        "<div class='browser col-md-12'>" + 
                            "<div class='browser_buttons col-md-3''>" +
                                "<div class='circles'></div>" +
                                "<div class='circles'></div>" +
                                "<div class='circles'></div>" +
                            "</div>" +
                            "<div class='browser_url col-md-9'>" +
                                "<p>" + full_stack[i].url + "</p>" +
                            "</div>" +

                        "</div> <!-- end browser -->" + 


                       "<div class='browser_image col-md-12'>" + 
                            "<img src='" + full_stack[i].img + "' />" +

                        "</div> <!-- end browser img -->" + 



                    "</div> <!-- end project image -->" + 


                    "<div class='project_desc col-md-4'>" +

                        "<h1>" + full_stack[i].title + "</h1><br />" +
                        "<p>" + full_stack[i].preview + "</p> <br />" +

                        "<div class='project_link'>" +
                            "<button onclick=window.open('" + full_stack[i].url + "') type='button' class='btn btn-primary'>VISIT</button>" +
                        "</div> <br />" +

                        "<div class='skills_used'>" + 
                            "<code>" + skills_str + "</code>" +
                        "</div>" + 

                    "</div> <!-- end project description -->";


                //Clear skills_str for next project
                skills_str = "";

        } //End for loop


        //Add the HTML to the target div
        $(".target").html(project_str);

        //Make sure other link's borders are hidden
        //Change current click's border to solid;
        $(".front_end").css("border-bottom", "none");
        $(".back_end").css("border-bottom", "none");
        $(".full_stack").css("border-bottom", "solid");

        //$(".full_stack").animate({ borderBottom: "solid" }, 1000);


    }); //End Full Stack Click





    $(".front_end").click(function() {

        //Clear out anything that might previously have been in target div
        $(".target").html("");

        //Create variable to hold the html string
        var project_str = "";
        var skills_str = "";

        for (var i in front_end) {


            //Get coding skills and put in skills_str
            var skill_list = front_end[i].skills;

            for (var j=0; j<= skill_list.length-1; j++) {

                if (j === (skill_list.length -1)) {
                    skills_str += skill_list[j];
                }
                else {
                    skills_str += skill_list[j] + ", ";
                }
            }



            project_str += "<div class='project_img col-md-8'>" +

                        "<div class='browser col-md-12'>" + 
                            "<div class='browser_buttons col-md-3''>" +
                                "<div class='circles'></div>" +
                                "<div class='circles'></div>" +
                                "<div class='circles'></div>" +
                            "</div>" +
                            "<div class='browser_url col-md-9'>" +
                                "<p>" + front_end[i].url + "</p>" +
                            "</div>" +

                        "</div> <!-- end browser -->" + 


                       "<div class='browser_image col-md-12'>" + 
                            "<img src='" + front_end[i].img + "' />" +

                        "</div> <!-- end browser img -->" + 



                    "</div> <!-- end project image -->" + 


                    "<div class='project_desc col-md-4'>" +

                        "<h1>" + front_end[i].title + "</h1><br />" +
                        "<p>" + front_end[i].preview + "</p> <br />" +

                        "<div class='project_link'>" +
                            "<button onclick=window.open('" + front_end[i].url + "') type='button' class='btn btn-primary'>VISIT</button>" +
                        "</div> <br />" +

                        "<div class='skills_used'>" + 
                            "<code>" + skills_str + "</code>" +
                        "</div>" + 

                    "</div> <!-- end project description -->";


            //Clear skills_str for next project
            skills_str = "";

        } //End for loop


        //Add the HTML to the target div
        $(".target").html(project_str);

        //Make sure other link's borders are hidden
        //Change current click's border to solid;
        $(".front_end").css("border-bottom", "solid");
        $(".back_end").css("border-bottom", "none");
        $(".full_stack").css("border-bottom", "none");

    }); //End Front End Click







    $(".back_end").click(function() {

        //Clear out anything that might previously have been in target div
        $(".target").html("");

        //Create variable to hold the html string
        var project_str = "";
        var skills_str = "";

        for (var i in back_end) {


            //Get coding skills and put in skills_str
            var skill_list = back_end[i].skills;

            for (var j=0; j<= skill_list.length-1; j++) {

                if (j === (skill_list.length -1)) {
                    skills_str += skill_list[j];
                }
                else {
                    skills_str += skill_list[j] + ", ";
                }
            }


            project_str += "<div class='project_img col-md-8'>" +

                        "<div class='browser col-md-12'>" + 
                            "<div class='browser_buttons col-md-3''>" +
                                "<div class='circles'></div>" +
                                "<div class='circles'></div>" +
                                "<div class='circles'></div>" +
                            "</div>" +
                            "<div class='browser_url col-md-9'>" +
                                "<p>" + back_end[i].url + "</p>" +
                            "</div>" +

                        "</div> <!-- end browser -->" + 


                       "<div class='browser_image col-md-12'>" + 
                            "<img src='" + back_end[i].img + "' />" +

                        "</div> <!-- end browser img -->" + 



                    "</div> <!-- end project image -->" + 


                    "<div class='project_desc col-md-4'>" +

                        "<h1>" + back_end[i].title + "</h1><br />" +
                        "<p>" + back_end[i].preview + "</p> <br />" +

                        "<div class='project_link'>" +
                            "<button onclick=window.open('" + back_end[i].url + "') type='button' class='btn btn-primary'>VISIT</button>" +
                        "</div> <br />" +

                        "<div class='skills_used'>" + 
                            "<code>" + skills_str + "</code>" +
                        "</div>" + 

                    "</div> <!-- end project description -->";


            //Clear skills_str for next project
            skills_str = "";

        } //End for loop


        //Add the HTML to the target div
        $(".target").html(project_str);

        //Make sure other link's borders are hidden
        //Change current click's border to solid;
        $(".front_end").css("border-bottom", "none");
        $(".back_end").css("border-bottom", "solid");
        $(".full_stack").css("border-bottom", "none");


    }); //End Back End Click



    //Style project links on hover
    $(".full_stack").hover(
        function() { 
            $(".full_stack h4").css("color", "#d35fea"); 
            $(".full_stack h4").css("cursor", "pointer");
        },
        function() {
            $(".full_stack h4").css("color", "#455a64");
        }
    );

    $(".front_end").hover(
        function() { 
            $(".front_end h4").css("color", "#d35fea"); 
            $(".front_end h4").css("cursor", "pointer"); 
        },
        function() {
            $(".front_end h4").css("color", "#455a64");
        }
    );

    $(".back_end").hover(
        function() { 
            $(".back_end h4").css("color", "#d35fea");
            $(".back_end h4").css("cursor", "pointer");
        },
        function() {
            $(".back_end h4").css("color", "#455a64");
        }
    );

    //Trigger a click of the Full Stack link right away
    //In order to make that the default section that user will see
    $(".full_stack").trigger("click");





    ///////////////////////////////////////////  ANIMATIONS  /////////////////////////////////////////////////////

    //For each of the following nav bar links
    //Find how many pixels from the top of the screen each element is
    //And then animate to that position minus the height of the nav bar (100px right now)

    $(".home").click(function() {
        var scroll = $("#top").offset().top;

        //Don't need to adjust for nav bar for this one because the top is 0
        $("body").animate({ scrollTop: scroll }, 600);
        return false;
    });


    $(".melink").click(function() {

        var scroll = $("#me").offset().top;

        $("body").animate({ scrollTop: (scroll-100) }, 600);
        return false;
    });

    $(".projlink").click(function() {

        var scroll = $("#portfolio").offset().top;

        $("body").animate({ scrollTop: (scroll-100) }, 600);
        return false;
    });

    $(".contactlink").click(function() {

        var scroll = $("#contact").offset().top;

        $("body").animate({ scrollTop: (scroll-100) }, 600);
        return false;
    });
            
            
            
}); //End whole document