function pad ( val ) { return val > 9 ? val : "0" + val; }
        setInterval( function(){
            if (sec != 0){
                $("#seconds").html(pad(--sec%60));
                $("#minutes").html(pad(parseInt(sec/60,10)));
            }else{
                $("#seconds").html("00");
                // $('.card').eq(i).find('button').text('Booked!').attr('disabled', true);
            }
        }, 1000);

