require('./scroll-animations.js')

setInterval(function() {
    $('#time').text((new Date).toGMTString())
}, 1000)