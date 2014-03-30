/**
 * @author Marenin Alex
 * March 2014
 */


/**
 * @constructor
 */
function Puzzle( width, height ){
    this.width = width;
    this.height = height;
    this.parts = [];
}


Puzzle.prototype.setFullPicture = function( fullPicture ){
    this.fullPicture = fullPicture;
};


Puzzle.prototype.addPuzzlePart = function( puzzlePart ){
    this.parts.push( puzzlePart );
};