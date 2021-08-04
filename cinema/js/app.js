$(function () {

    setupSeatingArea(10, 10)
    setUpSeatingHandler();

})

function setupSeatingArea(row, col) {

    var htmlString = [];
    for (i = 0; i < row; i++) {


        for (j = 0; j < col; j++) {

            htmlString.push(createSeat(i, j));

        }
        htmlString.push(createRow());

    }

    $('#seatingArea').html(htmlString.join(" "))


}

function createSeat() {

    const seat = "<div class='seat available'></div>";

    return seat;
}

function createRow() {

    var seat = '<div class="end"></div>'
    return seat;
}


function setUpSeatingHandler() {

    const maxBookingAllowed = 3;

    $('.seat').on('click', function () {


        if (!$(this).hasClass("reserved") && !$(this).hasClass("aisle")) {

            if (!$(this).hasClass("selected")) {

                if ($(".selected").length >= maxBookingAllowed) return;
                const currentRow = $(this).data("row")
                const currentSeat = $(this).data("col")

                $(this).addClass("selected")
                const totalBookings = $(".selected").length
                $('#messagePanel').html(`${currentRow}-${currentSeat} : # ${totalBookings}`);

            } else {
                const totalBookings = $(".selected").length
                $('#messagePanel').html(`# ${totalBookings}`);
                $(this).removeClass("selected");

            }



        } else {
            $('#messagePanel').html(``);
        }




    })


}