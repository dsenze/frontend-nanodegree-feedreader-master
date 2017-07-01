/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* are defined
            - test if allFeed variable is defined
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* has valid URLs
            - test loops through allFeeds and verifies URL is defined, not empty and contains HTTP/HTTPS
         */
        it('has valid URLs',
            function() {
                allFeeds.forEach(function(feed) {
                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).not.toBe(0);
                    expect(feed.url).toMatch(/^((http|https):\/\/)/);
                });
            });

        /* has name defined
            - test loops through allFeeds and verifies name is defined, is string, not empty.
         */
        it('has name defined',
            function() {
                allFeeds.forEach(function(feed) {
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
                    expect(typeof feed.name).toBe("string");
                    expect(feed.name).not.toMatch(/^\s*$/g); //not match empty string
                });
            });
    });

    describe('The Menu', function() {
        var menu_icon = $('.menu-icon-link');

        /* Menu hidden by default
            - test ensures menu element is hidden by default. And verify this by check if body has menu-hidden class assigned.
        */
        it('Menu hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);

        });

        /* menu changes visibility
            - test ensures the menu changes visibility when the menu icon is clicked. 
            - test verifiy this by check if body has menu-hidden class assigned.
        */
        it('menu changes visibility', function() {
            // click on button
            menu_icon.click();
            // expect .menu-hidden class to disapear;
            expect($("body").hasClass("menu-hidden")).not.toBe(true);
            // click again
            menu_icon.click();
            // expect .menu-hidden to be added to body again.
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        var entryList = $(".entry-link");
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });

        });

        /* at least a single .entry element exist
                   - test ensures atleast a single .entry element exist after loadfeed() function.
                   - test verifies no changes to index.html are made to faulty success this test.
        */
        it('at least a single .entry element exist', function(done) {
            expect(entryList.length).toBe(0);
            expect($(".entry-link").length).toBeGreaterThan(0);
            done();
        });
    });


    describe('New Feed Selection', function() {
        var firstElementUrl, firstElementUrlUpdated;
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstElementUrl = $(".entry-link:first")[0].href;
                loadFeed(1, function() {
                    firstElementUrlUpdated = $(".entry-link:first")[0].href;
                    done();
                });
            });

        });

        /* content changes
                   - test ensures a new feeds is loaded by loadfeed function and that content actually changes.
                   - test runs loadFeed saves first Elements.href (URL) into variable
                   - test run loadFeed again with new input, saves first elements.href (URL) into variable.
                   - test OK! if both variables match an URL and they do not match eachother.
        */
        it('content changes', function(done) {
            expect(firstElementUrl).toMatch(/^((http|https):\/\/)/);
            expect(firstElementUrlUpdated).toMatch(/^((http|https):\/\/)/);
            expect(firstElementUrl).not.toBe(firstElementUrlUpdated);
            done();
        });
    });
}());