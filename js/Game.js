/**
 * @author Marenin Alex
 * March 2014
 */


/**
 * @param {{assets: [string], rootPage: string, pages: Object, view: HTMLElement, width: number, height: number}} params
 * @constructor
 */
function Game( params ){
    this.rootPage = params.rootPage;
    this.initView( params.view, params.width, params.height );
    this.loadAssets( params.assets );
    this.initPages( params.pages );
}


Game.prototype.loadAssets = function( assets ){
    this.loaded = false;
    this.loader = new PIXI.AssetLoader( assets );
    this.loader.onComplete = this.onAssetsLoaded.bind( this );
    this.loader.load();
};


/**
 * @param {Object.<string, Function>} pages
 */
Game.prototype.initPages = function( pages ){
    this.pages = {};
    for ( var k in pages )
        if ( pages.hasOwnProperty(k) ){
            this.pages[k] = new Page( this );
            this.pages[k].setGame( this );
        }
};


Game.prototype.initView = function( view, width, height ){
    this.view = view;
    this.stage = new PIXI.Stage( 0x000000 );
    this.renderer = PIXI.autoDetectRenderer( width, height );

};


Game.prototype.start = function(){

};


Game.prototype.pause = function(){

};


Game.prototype.onAssetsLoaded = function(){
    this.loaded = true;
};