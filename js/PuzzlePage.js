/**
 * @author Marenin Alex
 * March 2014
 */
 

inherits( PuzzlePage, Page );


/**
 * @constructor
 * @extends Page
 */
function PuzzlePage(){
    Page.super_.apply( this, arguments );
}


PuzzlePage.prototype.addPuzzle = function( puzzle ){
    this.puzzle = puzzle;
};