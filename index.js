/**
 * @author Marenin Alex
 * March 2014
 */
 

var game = new Game({
    assets: [
        'assets/header.png',
        'assets/sidebar.png',
        'assets/home.png',
        'assets/next.png',
        'assets/star.png',
        'assets/star-preview.png',
        'assets/panda.png',
        'assets/panda-preview.png',
        'assets/owl.png',
        'assets/owl-preview.png'
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

