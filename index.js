/**
 * @author Marenin Alex
 * March 2014
 */
 

var game = new Game({
    assets: [
        'assets/monkey.png',
        'assets/rabbit.png',
        'assets/rhino.png',
        'assets/menu-top.png',
        'assets/menu-right.png'
    ],
    container: document.body,
    width: window.innerWidth,
    height: window.innerHeight,
    pages: {
        menu: MenuPage,
        puzzle: PuzzlePage
    },
    rootPage: 'menu'
});


setTimeout( function(){
    console.log( 'game start' );
    game.start();
}, 200 );

