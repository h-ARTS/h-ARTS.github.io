/**
 * Project Assignment JavaScript and jQuery
 * Author: Hanan Mufti
 */

function SketchPad(num, bgcolor) {
    this.num = num;
    this.bgcolor = bgcolor;
}

SketchPad.prototype.init = function() {

    if (this.num && this.bgcolor) {
        this.num;
        this.bgcolor;
    } else {
        // Default values
        this.num = 20;
        this.bgcolor = '#000000';
    }

    this.render();

}

SketchPad.prototype.render = function() {
    
    var squared = this.num * this.num;

    for (var i = 0; i < squared; i++) {

        if (i % this.num === 0) {
            $('<div class="block"></div>').appendTo('#sketch');
        } else {
            $('<div class="block"></div>').appendTo('#sketch');
        }

    }

    jQuery('.block').css({ 'width': 600 / this.num, 'height': 600 / this.num, 'background-color': this.bgcolor });

}

SketchPad.prototype.reset = function() {

    $('#sketch').empty();
    this.num = 0;

    while( this.num < 1 || this.num > 64 ) {
        this.num = prompt('Select size between 1 and 64');
    }

    this.init();
    
}

SketchPad.prototype.colorize = function() {
    
    var codes = '0123456789ABCDEF',
        color = '#';

    for (var c = 0; c < 6; c++) {
        color += codes[Math.floor(Math.random() * 16)];
    }

    return color;

}

jQuery(document).ready(function($) {

    sketchpad = new SketchPad(10);
    sketchpad.init();

    $('#reset').click(function(e) {
        e.preventDefault();

        sketchpad.reset();
        mouseMove();
    });

    function mouseMove() {

        $('.block').mouseover(function() {
            $(this).css('background-color', sketchpad.colorize());
        });

    }

    mouseMove();

});