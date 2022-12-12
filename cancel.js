const countDate = new Date("Sep 26 2022 20:00:00").getTime();

var x = setInterval(function(){
    let now = new Date().getTime();

    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = d + "d " + hrs + "h " + min + "m " + sec + "s ";

    if(distance < 0){
        clearInterval(x);
        document.getElementById('Text1').innerHTML = "The Underground";
        document.getElementById('timer').innerHTML = "The Game Underground got canceled";
    }
})




