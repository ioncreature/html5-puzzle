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
    renderer = PIXI.autoDetectRenderer( consts.width, consts.height ),
    scale = consts.width / (Object.keys(assets).length + 2) / consts.puzzleWidth,
    dropRadius = consts.puzzleWidth * scale / 3;

document.body.appendChild( renderer.view );

requestAnimFrame( function animate(){
    requestAnimFrame( animate );
    renderer.render( stage );
});


var puzzles = [],
    puzzleAims = [];

Object.keys( assets ).forEach( function( name, i, array ){
    var puzzleAim = new PIXI.Sprite( assets[name] );
    puzzleAim.alpha = 0.5;
    puzzleAim.anchor.x = 0.5;
    puzzleAim.anchor.y = 0.5;
    puzzleAim.scale.x = scale;
    puzzleAim.scale.y = scale;
    puzzleAim.position.x = consts.width / ( array.length + 1 ) * ( i + 0.5 );
    puzzleAim.position.y = center.y;
    puzzleAims.push( puzzleAim );

    var puzzle = new PIXI.Sprite( assets[name] );
    puzzle.interactive = true;
    puzzle.buttonMode = true;
    puzzle.anchor.x = 0.5;
    puzzle.anchor.y = 0.5;
    puzzle.scale.x = scale;
    puzzle.scale.y = scale;
    puzzle.position.x = consts.width - (consts.puzzleWidth * scale * puzzle.anchor.x );
    puzzle.position.y = consts.height / array.length * ( i + 0.5 );
    puzzle.startPosition = puzzle.position.clone();
    puzzles.push( puzzle );
    puzzle.mousedown = puzzle.touchstart = function( data ){
        this.dragging = true;
        this.data = data;
    };
    puzzle.mouseup = puzzle.mouseupoutside = puzzle.touchend = puzzle.touchendoutside = function(){
        this.dragging = false;
        this.data = false;
        if ( distance(puzzleAim.position, puzzle.position) < dropRadius )
            this.position = puzzleAim.position.clone();
        else
            this.position = this.startPosition.clone();
    };
    puzzle.mousemove = puzzle.touchmove = function(){
        if ( this.dragging )
            this.position = this.data.getLocalPosition( this.parent ).clone();
    };
});

puzzleAims.forEach( function( puzzle ){
    stage.addChild( puzzle );
});

puzzles.forEach( function( puzzle ){
    stage.addChild( puzzle );
});


/**
 * @param {PIXI.Point} p1
 * @param {PIXI.Point} p2
 * @returns {number}
 */
function distance( p1, p2 ){
    return Math.sqrt( Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) );
}