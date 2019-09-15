export default myModule;

//Module pattern
var myModule = (function () {
    'use strict'

    var _privateProperty = 'Hello World';
    function _privateMethod() {
        console.log(_privateProperty)
    }


    return {
        publicMethod: function() {
            _privateProperty();
        }
    }
})();