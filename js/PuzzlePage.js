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
    this.initSidebar();
    this.initHomeButton();
};


PuzzlePage.prototype.initSidebar = function(){
    var game = this.getGame();
    this.sidebar = PIXI.Sprite.fromImage( 'assets/sidebar.png' );
    var scale = game.width * 0.25 / this.sidebar.width;
    this.sidebar.scale.x = scale;
    this.sidebar.scale.y = scale;
    this.sidebar.anchor.x = 0.5;
    this.sidebar.anchor.y = 0.5;
    this.sidebar.position.x = game.width - (game.width * 0.2 / 2);
    this.sidebar.position.y = game.height / 2;
    this.addChild( this.sidebar );
};


PuzzlePage.prototype.initHomeButton = function(){
    var page = this;
    this.homeButton = PIXI.Sprite.fromImage( 'assets/home.png' );
    this.homeButton.buttonMode = true;
    this.homeButton.interactive = true;
    var scale = game.height * 0.15 / this.homeButton.height;
    this.homeButton.scale.x = scale;
    this.homeButton.scale.y = scale;
    this.homeButton.position.x = this.homeButton.width / 4;
    this.homeButton.position.y = game.height - ( this.homeButton.height * 1.5 );
    this.homeButton.mouseup = this.homeButton.click = this.homeButton.tap = function(){
        page.goBack();
    };
    this.addChild( this.homeButton );
};


PuzzlePage.prototype.addPuzzle = function( puzzle ){
    this.puzzle = puzzle;
};