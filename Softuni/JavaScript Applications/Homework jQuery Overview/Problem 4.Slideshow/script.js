(function () {
    var index = 1;
    var intervalInMillisec = 5000;

    $(document).ready(function () {
        $('#button-left').on('click', previousSlide);
        $('#button-right').on('click', nextSlide);
        nextSlide();

        setInterval(function () {
            $('#button-right').trigger('click');
        }, intervalInMillisec);

    });


    function previousSlide() {
        switch (index) {
            case 1:
                index = 5;
                $('#images-container').children().hide();
                $('#image1').fadeIn(1000);
                break;
            case 2:
                index--;
                $('#images-container').children().hide();
                $('#image2').fadeIn(1000);
                break;
            case 3:
                index--;
                $('#images-container').children().hide();
                $('#image3').fadeIn(1000);
                break;
            case 4:
                index--;
                $('#images-container').children().hide();
                $('#image4').fadeIn(1000);
                break;
            case 5:
                index--;
                $('#images-container').children().hide();
                $('#image5').fadeIn(1000);
                break;
            default :
                $('#error-list').append($('<li>').html("Invalid Index"));
        }
    }

    function nextSlide() {
        switch (index) {
            case 1:
                index++;
                $('#images-container').children().hide();
                $('#image1').fadeIn(1000);
                break;
            case 2:
                index++;
                $('#images-container').children().hide();
                $('#image2').fadeIn(1000);
                break;
            case 3:
                index ++;
                $('#images-container').children().hide();
                $('#image3').fadeIn(1000);
                break;
            case 4:
                index++;
                $('#images-container').children().hide();
                $('#image4').fadeIn(1000);
                break;
            case 5:
            index = 1;
            $('#images-container').children().hide();
            $('#image5').fadeIn(1000);
            break;
            default :
                $('#error-list').append($('<li>').html("Invalid Index"));
        }
    }
}());