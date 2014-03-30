/**
 * @author Marenin Alex
 * March 2014
 */
 

inherits( MenuPage, Page );


function MenuPage(){
    MenuPage.super_.apply( this, arguments );
}


MenuPage.prototype.initPage = function(){
    var game = this.getGame();
    this.topMenu = PIXI.Sprite.fromImage( 'assets/menu-top.png' );
    this.addChild( this.topMenu );
    var scale = game.height * 0.2 / this.topMenu.height;
    this.topMenu.scale.x = scale;
    this.topMenu.scale.y = scale;
    this.topMenu.anchor.x = 0.5;
    this.topMenu.anchor.y = 0.5;
    this.topMenu.position.x = game.width / 2;
    this.topMenu.position.y = game.height * 0.2 / 2;
};