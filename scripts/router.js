nunjucks.configure('/views', { autoescape: true });

function renderView(view){
    $("#app").html(nunjucks.render(view + '.njk'));
    $(".active").removeClass("active");
    $("#" +view + "-header").addClass("active");
}

routie({
    '/home': function() {
        renderView('home');
    },
    '/about': function() {
        renderView('about');
    },
    '': function(){
        renderView('home')
    }
});