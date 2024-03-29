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


/**
 * @override
 */
Page.prototype.initPage = function(){};


Page.prototype.setGame = function( game ){
    this.game = game;
};


/**
 * @returns {Game}
 */
Page.prototype.getGame = function(){
    return this.game;
};


/**
 * @param {string} pageName
 * @param pageParam
 */
Page.prototype.goTo = function( pageName, pageParam ){
    this.getGame().goTo( pageName, pageParam );
};


Page.prototype.goBack = function(){
    this.getGame().goBack();
};


Page.prototype.show = function(){
    this.visible = true;
};


Page.prototype.hide = function(){
    this.visible = false;
};