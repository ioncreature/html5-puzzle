/**
 * @author Marenin Alex
 * March 2014
 */


/**
 * @param {Function} ctor
 * @param {Function} superCtor
 */
function inherits( ctor, superCtor ){
    ctor.super_ = superCtor;
    ctor.prototype = Object.create( superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}


/**
 * @param {Array} array
 * @returns {Array}
 */
function randomize( array ){
    var arr = array.concat(), i = arr.length, j, x;
    while ( i ){
        j = Math.random() * i | 0;
        x = arr[--i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}