/**
 * @author Marenin Alex
 * March 2014
 */
 

inherits( PuzzlePart, PIXI.Sprite );


function PuzzlePart(){
    PuzzlePart.super_.apply( this, arguments );
}


PuzzlePart.prototype.setDestinationPoint = function( point ){
    this.destination = point;
};