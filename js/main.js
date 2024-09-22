$(document).ready(() => {
    // toggle lang dropdown
    $('.lang-switch').click(() => {
        $('.lang-switch-wrap').toggleClass('open');
    });

    // handler for lang dropdown whe user click on list item
    $('.lang-switch-list a').click((e) => {
        e.preventDefault();
        $('.lang-switch-wrap').removeClass('open');
    });

    // handler for show more button
    $('.casino-show-all').click((e) => {
        e.preventDefault();
        $('.more-casino').toggleClass('d-none')
    });

    $('.burger-button').click((e) => {
        e.preventDefault();
        $('.mobile-menu').toggleClass('d-none');
    })
})