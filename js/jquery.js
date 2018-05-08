$('#rating').on('change', addFilm);

function addFilm() {
    var filmName = $('#film')[0].value;
    var stars = $('#rating')[0].options[rating.options.selectedIndex].value;
    
    if(filmName) {
        $('#rating-list').append("<div><h3>" + filmName + "</h3</div>");  
        $('#rating-list').append("<div><h3>" + stars + " stars</h3></div>");
    };
};