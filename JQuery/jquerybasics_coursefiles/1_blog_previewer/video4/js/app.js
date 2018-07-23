// $("#flashMessage").hide();
// $("#flashMessage").slideDown(1000);
// $("#flashMessage").delay(3000);
// $("#flashMessage").slideUp(1000);



// const title = 'My First Blog Post';
// const content = 'This is my <strong>first</strong> Blog Post.';

// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').html(content);
$("#flashMessage").hide();
$("#previewButton").click(function () {
    const title = $("#blogTitleInput").val();
    const content = $("#blogContentInput").val();

    $("#blogTitlePreview").text(title);
    $('#blogContentPreview').html(content);

    $("#flashMessage")
        .slideDown(1000)
        .delay(3000)
        .slideUp();
});