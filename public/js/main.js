/**

 **/
var window = window || {};

var RESUME = (function (window) {
    var elem,
        regex;

    var MOD = {};

    MOD.prototype = {
        constructor: MOD,
        //Verify name function
        verifyName: function () {
            var value;
            regex = /[^0-9][a-zA-Z]\w*/g;
            elem = document.querySelector("#name");
            value = elem.value;
            if (regex.test(value)) {
                elem.style.border = "1px solid green";
            } else {
                elem.style.border = "1px solid red";
            }
        }
    };

    function email() {
        regex = /a-zA-Z/
    }

    return MOD;

})(window);

console.log(window);