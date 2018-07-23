const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function (event) {
    event.preventDefault();
    $(':checked');
});