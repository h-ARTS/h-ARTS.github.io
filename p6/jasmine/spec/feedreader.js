/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        /**
         * Test 1
         */
        it('are defined.', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /**
         * Test 2
         * Loops through allFeeds to make sure the url are valid and defined!
         */ 
        it('should have valid URL and it is defined too.', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
        /**
         * Test 3
         * Loops through allFeeds object to ensure that the names are defined and it's not empty!
         */
        it('should have a name defined AND it is not empty.', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        var feedList = $('body').attr('class');
        /**
         * Test 4
         * Make sure the feedList is hidden by default!
         */ 
        it('should be hidden by default.', function () {
            expect(feedList).toEqual('menu-hidden');
        });
        /**
         * Test 5
         * Make sure when the menu icon has the function to open and close it!
         */ 
        it('should be visible when the menu icon is clicked.', function () {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();

            expect($('body').attr('class')).toEqual("");
            menuIcon.click(); //again menu clicked and it should be closed

            expect($('body').attr('class')).not.toEqual("");
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        // Before the Test begins, the loadFeed should be done!
        beforeEach(function (done) {
            window.loadFeed(0, done);
        });
        /**
         * Test 6
         * The entries of this Feed should appear!
         */ 
        it('should load at least single valid entry element.', function () {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function () {
        var containerFeed = $('.feed');
        beforeEach(function (done) {
            containerFeed.empty();
            done();
        });
        /**
         * Test 7
         * Makes sure that the new feeds getting loaded
         */ 
        it('should load new feeds.', function () {
            loadFeed(0);
            expect(containerFeed.length).toBeGreaterThan(0);
            this.firstHTML = containerFeed.html();
        });
        /**
         * Test 8
         * Makes sure that when new feeds getting loaded, the content gets update
         */ 
        it('should update the content, when the new feeds been loaded.', function () {
            loadFeed(1);
            expect(containerFeed.length).toBeGreaterThan(0);
            this.secondHTML = containerFeed.html();
            expect(this.firstHTML).not.toEqual(this.secondHTML);
        });
    });
}());