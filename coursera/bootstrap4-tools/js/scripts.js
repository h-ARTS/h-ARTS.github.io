jQuery(function($) {
    $('[data-toggle="popover"]').each(function(i,el) {
        var contentElementId = $(el).data().target,
            contentHtml = $(contentElementId).html();
        
        $(el).popover({
            title: "Search",
            content: contentHtml,
            html: true,
            trigger: 'focus'
        });
    })
});