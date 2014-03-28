/**
 * @author Marenin Alex
 * March 2014
 */
 

inherits( PuzzleScreen, Screen );


/**
 * @constructor
 * @extends Screen
 */
function PuzzleScreen(){
    Screen.super_.apply( this, arguments );
}


PuzzleScreen.prototype.addPuzzle = function( puzzle ){
    this.puzzle = puzzle;
};