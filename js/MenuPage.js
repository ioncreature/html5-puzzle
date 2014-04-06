/**
 * @author Marenin Alex
 * March 2014
 */
 

inherits( MenuPage, Page );


function MenuPage(){
    MenuPage.super_.apply( this, arguments );
}


MenuPage.prototype.puzzlePreviews = {
    panda: 'assets/panda.png',
    owl: 'assets/owl.png',
    star: 'assets/star.png',
    panda1: 'assets/panda.png',
    owl1: 'assets/owl.png',
    star1: 'assets/star.png',
    panda2: 'assets/panda.png',
    owl2: 'assets/owl.png',
    star2: 'assets/star.png',
    panda3: 'assets/panda.png',
    owl3: 'assets/owl.png',
    star3: 'assets/star.png'
};


MenuPage.prototype.initPage = function(){
    this.addHeader();
//    this.addPuzzlePreviews();
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
    MenuPage.super_.prototype.hide.call( this );
};