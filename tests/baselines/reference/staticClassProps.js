//// [staticClassProps.ts]
class C
{
    public foo() {
        static z = 1;
    }
}



//// [staticClassProps.js]
var C = (function () {
    function C() {
    }
    C.prototype.foo = function () {
    };
    C.z = 1;
    return C;
})();
