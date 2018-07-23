const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function (event) {
    if ($(':checked').length === 0) {
        event.preventDefault();
        alert('Please check "Allow PDF downloads box"');
    }
});

$('#links').append($pdfCheckbox);

$('a').each(function () {
    const url = $(this).attr('href');
    $(this).parent().append("(${url})");
});