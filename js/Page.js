/**
 * @author Marenin Alex
 * March 2014
 */
 

inherits( Page, PIXI.SpriteBatch );


/**
 * @constructor
 * @extends PIXI.SpriteBatch
 * @param {Game} game
 */
function Page( game ){
    Page.super_.apply( this, arguments );
}


Page.prototype.setGame = function( game ){
    this.game = game;
};


Page.prototype.getGame = function(){
    return this.game;
};
