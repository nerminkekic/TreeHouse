$(document).ready(function (evt) {

  $('form').submit(function (evt) {
    evt.preventDefault();
    var $searchField = $('#search');
    var $submitButton = $('#submit');

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("searching...")
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var userSearch = $('#search').val();
    var flickrOptions = {
      tags: userSearch,
      format: "json"
    };

    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function (i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $searchField.prop("disabled", false);
      $submitButton.prop("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end form event

}); // end ready