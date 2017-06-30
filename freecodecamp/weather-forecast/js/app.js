jQuery(document).ready(function($) {

    "use strict";

    function Weather(temp, city, countryCode, summary, mainSummary, id) {
        this.temp = temp;
        this.city = city;
        this.countryCode = countryCode;
        this.summary = summary;
        this.mainSummary = mainSummary;
        this.id = id;
    }

    var weather = new Weather();

    var controller = {
        getData: function(unit) {
            var lat, lon, units;

            $.ajax({
                url:'http://ip-api.com/json',
                success: function(data) {
                    lat = data.lat;
                    lon = data.lon;
                    weather.city = data.city;
                    
                    switch (unit) {
                        case "metric":
                            units = "&units=metric";
                            break;
                        case "imperial":
                            units = "&units=imperial";
                            break;
                    }   

                    $.ajax({
                        url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + units + "&appid=d8de442e265f955c706a6de99df5396e",
                        success: function(json) {
                            weather.temp = Math.floor(json.main.temp) + '°';
                            weather.countryCode = json.sys.country;
                            weather.summary = json.weather[0].description;
                            weather.mainSummary = json.weather[0].main;
                            weather.id = json.weather[0].id;
                            view.render();
                        },
                        error: function(err) {
                            throw new Error("Can't load anything!");
                        }
                    });
                }
            });
        }
    };

    var view = {
        run: function() {
            controller.getData("metric");
            $('input[type="checkbox"').on('change', function() {
                if ($(this).is(':checked')) {
                    controller.getData("imperial");
                    $('em.celsius').removeClass('celsius').addClass('fahrenheit');
                } else {
                    controller.getData("metric");
                    $('em.fahrenheit').removeClass('fahrenheit').addClass('celsius');
                }
            })
        },
        render: function() {
            var main = weather.mainSummary.toLowerCase();
            $('#temp>h2').text(weather.temp);
            $('#city').text(weather.city);
            $('#code').text(weather.countryCode);
            $('#summary').text(weather.summary);

            if (weather.id === 801) {
                $('body').addClass('partly-cloudy');
                $('#summary-class').addClass('partly-cloudy');
            } else {
                $('body').addClass(main);
                $('#summary-class').addClass(main);
            }
        }
    };

    view.run();

});
