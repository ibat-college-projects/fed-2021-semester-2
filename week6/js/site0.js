$(function () {

    //console.log(`Jquery goodness is loaded`);
    applyStriped();
    init();
})

// Attach listeners to buttons etc when doc has loaded
function init() {

    $('#btnToggle').on('click', toggle);

    $('#btnParaOne').on('click', function () {

        const currentDate = new Date();
        const shortDate = currentDate.toDateString();

        $('p')[0].innerHTML = `<em>Hello there! ${shortDate}</em>`;

    })

    $('#btnHideFirst').on('click', function () {
        $('p:first').hide();
    });


    $('#btnShowFirst').on('click', function () {
        $('p:first').show();
    });

    $('#btnAppend').on('click', function () {
        $("<p>And here is additional text 1</p>").insertAfter('#lastPara');
        $("<p>And here is additional text 2</p>").insertAfter('#lastPara');
        $("<p>And here is additional text 3</p>").insertAfter('#lastPara');
    });

    $('#btnStyle').on('click', function () {
        $('p:first').css("font-style","italic");
    });

}

function applyStriped() {

    //  $(target).doStuff(with options);

    $('p.second').addClass('striped');

}

function toggle() {

    $('body div p').toggleClass('striped');

}