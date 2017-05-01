/* app.js
 *
 * This is our RSS feed reader application. It grabs trough rsstojson due to deprecation of 
 * GoogleFeed Reader API. It also uses the Handlebars templating library and jQuery.
 */
/**
 * The names and URLs to all of the feeds we'd like available.
 */ 
var allFeeds = [
    {
        name: 'Smashing Magazine',
        url: 'https://www.smashingmagazine.com/feed/'
    }, {
        name: 'CSS Tricks',
        url: 'https://css-tricks.com/feed/'
    }, {
        name: 'HTML5 Rocks',
        url: 'http://feeds.feedburner.com/html5rocks'
    }, {
        name: 'Linear Digressions',
        url: 'http://feeds.feedburner.com/udacity-linear-digressions'
    }
];

/* This function starts up our application. The Feeds
 * is loaded asynchonously and will then call this
 * function when it is loaded.
 */
function init() {
    // Load the first feed we've defined (index of 0).
    loadFeed(0);
}

/**
 * This function has beed changed due to deprecation of Google Feed Reader API.
 * Now it loads trough rsstojson which converts all of the feeds into json object 
 */
function loadFeed(id, cb) {
    var feedUrl = allFeeds[id].url,
        feedName = allFeeds[id].name;

    $.ajax({
        type: "POST",
        url: "https://rsstojson.udacity.com/parseFeed",
        data: JSON.stringify({url: feedUrl}),
        contentType: "application/json",
        success: function(result, status) {

            /* If loading the feed did not result in an error,
             * get started making the DOM manipulations required
             * to display the feed entries on screen.
             */
            var container = $('.feed'),
                title = $('.header-title'),
                entries = result.feed.entries,
                entriesLen = entries.length,
                entryTemplate = Handlebars.compile($('.tpl-entry').html());

            title.html(feedName);   // Set the header text
            container.empty();      // Empty out all previous entries

            entries.forEach(function(entry) {
                container.append(entryTemplate(entry));
            });

            if (cb) {
                cb();
            }

        },
        error: function(result, status, err) {

            if (cb) {
                cb();
            }

        },
        dataType: "json"
    });

}

/* All of this functionality is heavily reliant upon the DOM, so we
 * place our code in the $() function to ensure it doesn't execute
 * until the DOM is ready.
 */
$(function() {
    var container = $('.feed'),
        feedList = $('.feed-list'),
        feedItemTemplate = Handlebars.compile($('.tpl-feed-list-item').html()),
        feedId = 0,
        menuIcon = $('.menu-icon-link');

    /* Loop through all of our feeds, assigning an id property to
     * each of the feeds based upon its index within the array.
     * Then parse that feed against the feedItemTemplate (created
     * above using Handlebars) and append it to the list of all
     * available feeds within the menu.
     */
    allFeeds.forEach(function(feed) {
        feed.id = feedId;
        feedList.append(feedItemTemplate(feed));

        feedId++;
    });

    /* When a link in our feedList is clicked on, we want to hide
     * the menu, load the feed, and prevent the default action
     * (following the link) from occuring.
     */
    feedList.on('click', 'a', function() {
        var item = $(this);

        $('body').addClass('menu-hidden');
        loadFeed(item.data('id'));
        return false;
    });

    /* When the menu icon is clicked on, we need to toggle a class
     * on the body to perform the hiding/showing of our menu.
     */
    menuIcon.on('click', function() {
        $('body').toggleClass('menu-hidden');
    });
}());
