module( "Normal init (no conflicting config)" );
test( "maxStop-only", function() {
    var $testSlide = $("<div id='testSlide'></div>").ioSlider({
        value: 50,
        maxStop: 80
    });
    deepEqual( $testSlide.ioSlider('value'), 50, "ioSlider('value')" );
    deepEqual( $testSlide.ioSlider('option', 'value'), 50, "ioSlider('option', 'value')" );
    deepEqual( $testSlide.ioSlider('option', 'maxStop'), 80, "ioSlider('option', 'maxStop')" );
    deepEqual( $testSlide.ioSlider('option', 'minStop'), false, "ioSlider('option', 'minStop')" );
});
test( "minStop-only", function() {
    var $testSlide = $("<div id='testSlide'></div>").ioSlider({
        value: 50,
        minStop: 20
    });
    deepEqual( $testSlide.ioSlider('value'), 50, "ioSlider('value')" );
    deepEqual( $testSlide.ioSlider('option', 'value'), 50, "ioSlider('option', 'value')" );
    deepEqual( $testSlide.ioSlider('option', 'maxStop'), false, "ioSlider('option', 'maxStop')" );
    deepEqual( $testSlide.ioSlider('option', 'minStop'), 20, "ioSlider('option', 'minStop')" );
});
test( "minStop+maxStop", function() {
    var $testSlide = $("<div id='testSlide'></div>").ioSlider({
        value: 50,
        minStop: 20,
        maxStop: 80
    });
    deepEqual( $testSlide.ioSlider('value'), 50, "ioSlider('value')" );
    deepEqual( $testSlide.ioSlider('option', 'value'), 50, "ioSlider('option', 'value')" );
    deepEqual( $testSlide.ioSlider('option', 'maxStop'), 80, "ioSlider('option', 'maxStop')" );
    deepEqual( $testSlide.ioSlider('option', 'minStop'), 20, "ioSlider('option', 'minStop')" );
});


module( "Conflicting init" );
test( "maxStop-only", function() {
    var $testSlide = $("<div id='testSlide'></div>").ioSlider({
        value: 80,
        maxStop: 50
    });
    deepEqual( $testSlide.ioSlider('value'), 50, "ioSlider('value')" );
    deepEqual( $testSlide.ioSlider('option', 'value'), 50, "ioSlider('option', 'value')" );
    deepEqual( $testSlide.ioSlider('option', 'maxStop'), 50, "ioSlider('option', 'maxStop')" );
    deepEqual( $testSlide.ioSlider('option', 'minStop'), false, "ioSlider('option', 'minStop')" );
});
test( "minStop-only", function() {
    var $testSlide = $("<div id='testSlide'></div>").ioSlider({
        value: 20,
        minStop: 50
    });
    deepEqual( $testSlide.ioSlider('value'), 50, "ioSlider('value')" );
    deepEqual( $testSlide.ioSlider('option', 'value'), 50, "ioSlider('option', 'value')" );
    deepEqual( $testSlide.ioSlider('option', 'maxStop'), false, "ioSlider('option', 'maxStop')" );
    deepEqual( $testSlide.ioSlider('option', 'minStop'), 50, "ioSlider('option', 'minStop')" );
});
test( "minStop+maxStop", function() {
    /*
    This is a strange test case in which the minStop is set greater than the maxStop,
    which should never happen. If it does, the 'value' of the slider is not
    meaningful. However, the maxStop and minStop values should still be reported
    correctly.
    */
    var $testSlide = $("<div id='testSlide'></div>").ioSlider({
        value: 50,
        maxStop: 20,
        minStop: 80
    });
    deepEqual( $testSlide.ioSlider('option', 'maxStop'), 20, "ioSlider('option', 'maxStop')" );
    deepEqual( $testSlide.ioSlider('option', 'minStop'), 80, "ioSlider('option', 'minStop')" );

    // not really meaningful
    // deepEqual( $testSlide.ioSlider('value'), 50, "ioSlider('value')" );
    // deepEqual( $testSlide.ioSlider('option', 'value'), 50, "ioSlider('option', 'value')" );

});

module( "Programmatic value" );
test( "change to less than minStop", function() {
    var $testSlide = $("<div id='testSlide'></div>").ioSlider({
        value: 50,
        minStop: 20,
        maxStop: 80
    });
    $testSlide.ioSlider('value', 10);
    deepEqual( $testSlide.ioSlider('value'), 20, "move below: ioSlider('value')" );
    deepEqual( $testSlide.ioSlider('option', 'value'), 20, "move below: ioSlider('option', 'value')" );

    $testSlide.ioSlider('value', 90);
    deepEqual( $testSlide.ioSlider('value'), 80, "move below: ioSlider('value')" );
    deepEqual( $testSlide.ioSlider('option', 'value'), 80, "move below: ioSlider('option', 'value')" );


});
