/**
 * @author Marenin Alex
 * March 2014
 */
 

var game = new Game({
    view: document.body,
    assets: [
        'assets/monkey.png',
        'assets/rabbit.png',
        'assets/rhino.png'
    ],
    pages: {
        menu: MenuPage,
        puzzle: PuzzlePage
    },
    rootPage: 'menu'
});


setTimeout( function(){
    game.start();
}, 200 );

