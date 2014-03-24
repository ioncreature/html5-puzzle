/**
 * @author Marenin Alex
 * March 2014
 */

var consts = {
    width: window.innerWidth,
    height: window.innerHeight,
    puzzleWidth: 256,
    puzzleHeight: 256
};

var assets = {
    rabbit: PIXI.Texture.fromImage( './assets/rabbit.png' ),
    monkey: PIXI.Texture.fromImage( './assets/monkey.png' ),
    rhino: PIXI.Texture.fromImage( './assets/rhino.png' )
};
 
var center = new PIXI.Point( consts.width / 2, consts.height / 2 ),
    stage = new PIXI.Stage( 0x567686 ),
    renderer = PIXI.autoDetectRenderer( consts.width, consts.height );

document.body.appendChild( renderer.view );

requestAnimFrame( function animate(){
    requestAnimFrame( animate );
    renderer.render( stage );
});


var puzzles = [],
    puzzleAims = [];
Object.keys( assets ).forEach( function( key, i, array ){
    var scale = consts.width / 3 / consts.puzzleWidth,
        puzzleAim = new PIXI.Sprite( assets[key] );

    puzzleAim.name = key;
    puzzleAim.alpha = 0.5;
    puzzleAim.anchor.x = 0.5;
    puzzleAim.anchor.y = 0.5;
    puzzleAim.scale.x = scale;
    puzzleAim.scale.y = scale;

    puzzleAim.position.x = consts.width / array.length * ( i + 0.5 );
    puzzleAim.position.y = center.y;

    puzzleAims.push( puzzleAim );
    stage.addChild( puzzleAim );
    console.log( puzzleAim );
});