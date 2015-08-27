Template.worksThree.rendered = function() {
    $('#current-project .project-image').css('height', $('#current-project').width());
    $('#past-project .project-image').css('height', $('#past-project').width());
    $('#next-project .project-image').css('height', $('#next-project').width());
};

$( window ).resize(function() {
    $('#current-project .project-image').css('height', $('#current-project').width());
    $('#past-project .project-image').css('height', $('#past-project').width());
    $('#next-project .project-image').css('height', $('#next-project').width());
});