/**
 * @author Marenin Alex
 * March 2014
 */
 

inherits( PuzzlePage, Page );


/**
 * @constructor
 * @extends Page
 */
function PuzzlePage(){
    Page.super_.apply( this, arguments );
}


PuzzlePage.prototype.initPage = function(){
    var game = this.getGame();
    this.rightMenu = PIXI.Sprite.fromImage( 'assets/sidebar.png' );
    this.addChild( this.rightMenu );
    var scale = game.width * 0.25 / this.rightMenu.width;
    this.rightMenu.scale.x = scale;
    this.rightMenu.scale.y = scale;
    this.rightMenu.anchor.x = 0.5;
    this.rightMenu.anchor.y = 0.5;
    this.rightMenu.position.x = game.width - (game.width * 0.2 / 2);
    this.rightMenu.position.y = game.height / 2;
};


PuzzlePage.prototype.addPuzzle = function( puzzle ){
    this.puzzle = puzzle;
};