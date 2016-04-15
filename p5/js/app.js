

//sets cache for true so Timestamp parameter isn't added to ajax query.
//http://api.jquery.com/jquery.ajaxprefilter/
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    if ( options.dataType == 'jsonp' || originalOptions.dataType == 'jsonp' ) {
        options.cache = true;
    }
});
//This is the viewmodel
var ViewModel = function() {
    var self = this;
    this.listings = ko.observableArray([]);
    var geocoder;
    var myLatlng;

    //loads map
    function initialize() {

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});
        //Standard location to "Zurich" to "my home"
        myLatlng = new google.maps.LatLng(47.405389, 8.399770);
        var mapOptions = {
          zoom: 15,
          center: myLatlng,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
          }
        };
        //if geolocation is avail, set map to current position
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function(position){
                lat = position.coords.latitude;
                lng = position.coords.longitude;
            }, function(error){
                console.log("Error: " + error.message);
            });
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        //Is the content for my Infobox of "Home sweet Home"
        var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Home sweet Home</h1>' +
        '<h4>In Dietikon</h4>' +
        '<div id="bodyContent">' +
        '<p><b>My Home</b>, temporary living with my friend. ' +
        'I moved to this place since march 2016. ' +
        'Now searching for new opportunities in Web Dev industry. ' +
        'Udacity made me possible to become a proffessional Front-End Web Developer for my carrier and continued with other online courses such as AngularJS in codecademy or in codeschool. Without the ability to learn I would never reach this stage. </p>'+
        '<hr>' +
        '<p>This is by the way one of my project called "The neighbourhood map". I hope you are enjoying.<br> Thanks for visiting my place! :)</p>'+
        '<p>Udacity, <a href="https://www.udacity.com">'+
        'www.udacity.com</a></p>'+
        '</div>'+
        '</div>';

        //initializes the contentString
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        //Positioning the marker in my standard location with drop animation and without bounce.
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Home sweet Home'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    };
    //For bouncing the markers of results
    function toggleBounce() {

        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    //Initializes the full map
    google.maps.event.addDomListener(window, 'load', initialize);

    //search function with address and what excaclty like "restaurant"
    this.search = function() {
        var address = $("#address").val();
        var terms = $("#what").val();
        moveMap(address);
        yelp(terms, address);
    };

    //shows the location of map
    var moveMap = function(address) {
        geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
          } else {
              console.log('Geocode was not successful for the following reason: ' + status);
          }
        });
    };

    //Yelp API authentification keys, gives the locations, returns jsonp with results
    var yelp = function(terms, location){
        var auth = {
            consumerKey : "sMc_bXUDXLpO0IvHpIrG_g",
            consumerSecret : "0id8i3-vmxeWLN5DJ9-DxiuHqSs",
            accessToken : "dvNEhY8CDbC8bF4M4tAn_FGgudCA_PG9",
            accessTokenSecret : "QvZMdv3qSnBlFnw4rHkgwzQUujE",
            serviceProvider : {
                signatureMethod : "HMAC-SHA1"
            }
        };
        var accessor = {
            consumerSecret : auth.consumerSecret,
            tokenSecret : auth.accessTokenSecret
        };
        var parameters = [];
        parameters.push(['term', terms]);
        parameters.push(['location', location]);
        parameters.push(['callback', 'cb']);
        parameters.push(['oauth_consumer_key', auth.consumerKey]);
        parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
        parameters.push(['oauth_token', auth.accessToken]);
        parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
        var message = {
            'action' : 'https://api.yelp.com/v2/search',
            'method' : 'GET',
            'parameters' : parameters
        };
        console.log(parameters);
        OAuth.setTimestampAndNonce(message);
        OAuth.SignatureMethod.sign(message, accessor);
        var parameterMap = OAuth.getParameterMap(message.parameters);
        console.log(parameterMap);
        $.ajax({
            'url' : message.action,
            'data' : parameterMap,
            'dataType' : 'jsonp',
            'cached' : true,
            'jsonpCallback' : 'cb',
            
            //resets the listing Array and gives new results from request
            'success' : function(data, textStats, XMLHttpRequest) {
                clearMarkers();
                self.listings.removeAll();
                console.log(data);
                var len = data.businesses.length;
                for (var i = 0; i < len; i++){
                    self.listings.push(new Listing(data.businesses[i]));
                }
                console.log(self.listings());
                showMarkers();
            }
        }).fail(function(e) {
            console.log('something went wrong: ');
            console.log(e.error());
        });
    };
};

//init globals
var map;
var markers = [];

//Marker functions like: clear, show, add, make

var clearMarkers = function() {
    setAllMap( null );
    markers = [];
};
var showMarkers = function() {
    setAllMap( map );
};
var setAllMap = function( map ) {
    var len = markers.length;
    for (var i = 0; i < len; i++){
        markers[i].setMap( map );
    }
};
var addMarker = function( marker ) {
    markers.push( marker );
};
var makeMarker = function( coords, info ) {
    var myLatLng = new google.maps.LatLng( coords.latitude, coords.longitude );
    var infowindow = new google.maps.InfoWindow({
        content: info
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        animation: google.maps.Animation.DROP,
    });
    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close(map, marker);
    });
    return marker;
};
var bounce = function( marker ) {
    marker.setAnimation( google.maps.Animation.BOUNCE );
};
var stopBounce = function( marker ) {
    marker.setAnimation( null );
};


//Listing model
//https://www.yelp.co.uk/developers/documentation/v2/search_api
var Listing = function( data ) {
    this.display_phone = ko.observable( data.display_phone );
    this.image_url = ko.observable( data.image_url );
    this.location = ko.observable( data.location.address[0] );
    this.name = ko.observable( data.name );
    this.url = ko.observable( data.url );
    this.snippet_text = ko.observable( data.snippet_text );
    this.marker = makeMarker( data.location.coordinate, data.name + "<br>" + data.location.address[0] );
    addMarker( this.marker );
    //animates marker when mouseover Div
    this.show = function() {
        bounce(this.marker);
    };
    this.hide = function() {
        stopBounce(this.marker);
    };
};

ko.applyBindings(new ViewModel());






