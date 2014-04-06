/**
 * @author Marenin Alex
 * March 2014
 */
 

inherits( MenuPage, Page );


/**
 * @constructor
 * @extends Page
 */
function MenuPage(){
    MenuPage.super_.apply( this, arguments );
}


MenuPage.prototype.puzzlePreviews = {
    panda: 'assets/panda-preview.png',
    owl: 'assets/owl-preview.png',
    star: 'assets/star-preview.png',
    panda1: 'assets/panda-preview.png',
    owl1: 'assets/owl-preview.png',
    star1: 'assets/star-preview.png',
    panda2: 'assets/panda-preview.png',
    owl2: 'assets/owl-preview.png',
    star2: 'assets/star-preview.png',
    panda3: 'assets/panda-preview.png',
    owl3: 'assets/owl-preview.png',
    star3: 'assets/star-preview.png'
};


MenuPage.prototype.initPage = function(){
    this.addHeader();
    this.addPuzzlePreviews();
};


MenuPage.prototype.addHeader = function(){
    this.header = PIXI.Sprite.fromImage( 'assets/header.png' );
    this.addChild( this.header );
    var scale = this.getGame().width / this.header.width;
    this.header.scale.x = scale;
    this.header.scale.y = scale;
};


MenuPage.prototype.addPuzzlePreviews = function(){
    var page = this;
    this.previewContainer = document.createElement( 'div' );
    this.previewContainer.className = 'preview-container';
    Object.keys( this.puzzlePreviews ).forEach( function( name ){
        var p = document.createElement( 'img' );
        p.className = 'preview';
        p.puzzleName = name;
        p.src = this.puzzlePreviews[name];
        p.addEventListener( 'click', function(){
            page.goTo( 'puzzle', this.puzzleName );
        });
        this.previewContainer.appendChild( p );
    }, this );
    document.body.appendChild( this.previewContainer );
};


MenuPage.prototype.hide = function(){
    if ( this.previewContainer )
        this.previewContainer.style.display = 'none';
    MenuPage.super_.prototype.hide.call( this );
};


MenuPage.prototype.show = function(){
    if ( this.previewContainer )
        this.previewContainer.style.display = 'block';
    MenuPage.super_.prototype.show.call( this );
};