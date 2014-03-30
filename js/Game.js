/**
 * @author Marenin Alex
 * March 2014
 */


/**
 * @param {{assets: [string], rootPage: string, pages: Object, container: HTMLElement, width: number, height: number}} params
 * @constructor
 */
function Game( params ){
    var game = this;
    this.rootPage = params.rootPage;
    this.initView( params.container, params.width, params.height );
    this.loadAssets( params.assets, function(){
        game.initPages( params.pages );
    });
}


/**
 * @param {HTMLElement} container
 * @param {number} width
 * @param {number} height
 * @private
 */
Game.prototype.initView = function( container, width, height ){
    this.container = container;
    this.stage = new PIXI.Stage( 0x000000 );
    this.renderer = PIXI.autoDetectRenderer( width, height );
    this.container.appendChild( this.renderer.view );
    this.renderer.render( this.stage );
    Object.defineProperties( this, {
        width: {
            get: function(){
                return width;
            }
        },
        height: {
            get: function(){
                return height;
            }
        }
    });
};


/**
 * @param {Array} assets
 * @param {Function} callback
 * @private
 */
Game.prototype.loadAssets = function( assets, callback ){
    this.loaded = false;
    this.loader = new PIXI.AssetLoader( assets );
    this.loader.onComplete = callback;
    this.loader.load();
};


/**
 * @param {Object.<string, Function>} pages
 * @private
 */
Game.prototype.initPages = function( pages ){
    this.pages = {};
    for ( var k in pages )
        if ( pages.hasOwnProperty(k) ){
            this.pages[k] = new pages[k]( this );
            this.pages[k].setGame( this );
            this.pages[k].initPage();
            this.stage.addChild( this.pages[k] );
            this.pages[k].hide();
        }
    this.pageStack = [];
    this.goTo( this.rootPage );
};


Game.prototype.start = function(){
    var game = this;
    game.started = true;
    requestAnimFrame( function animate(){
        game._newFrame();
        game.renderer.render( game.stage );
        game.started && requestAnimFrame( animate );
    }.bind(game) );
};


Game.prototype.pause = function(){
    this.started = false;
};


/**
 * @param {string} pageName
 */
Game.prototype.goTo = function( pageName ){
    this.pageStack = this.pageStack || [];
    var prev = this.currentPage;
    prev && prev.hide();
    this.currentPage = this.pages[pageName];
    this.currentPage.show();
    this.pageStack.push( this.currentPage );
};


Game.prototype.goBack = function(){
    this.pageStack = this.pageStack || [];
    if ( this.pageStack.length > 1 ){
        var prev = this.pageStack.pop();
        prev.hide();
        this.currentPage = this.pageStack[this.pageStack.length - 1];
        this.currentPage.show();
    }
};


/**
 * @private
 */
Game.prototype._newFrame = function(){
    this.update && this.update();
    var page = this.currentPage;
    page.update && page.update();
};