$(function () {

    init();
})

// Attach listeners to buttons etc when doc has loaded
function init() {

    $('#btnDemo').on('click', function () {
        $('#messagePanel').html('hello world');
    });

    $('#btnAge').on('click', function () {
        const age = $('#tbAge').val();
        $('#messagePanel').html(`Your age is ${age}`);
    });


    $('#btnAdd').on('click', function () {
        const number1 = $('#tbNum1').val();
        const number2 = $('#tbNum2').val();
        const total = parseInt(number1) + parseInt(number2);
        $('#messagePanel').html(`Your total is ${total}`);
    });

    setUpPizzaOptions()


}

function setUpPizzaOptions() {

$('#selectMeatOptions').on('click',function () {

    $('input:checkbox').not(this).prop('checked',this.checked);

    let numberOfChecked = $('input:checkbox:checked').not(this).length;

    $('#messagePanel').html(`Total Options selected ${numberOfChecked}`);
});


}
