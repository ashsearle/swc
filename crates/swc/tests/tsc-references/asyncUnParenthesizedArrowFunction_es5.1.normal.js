//// [asyncUnParenthesizedArrowFunction_es5.ts]
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _ts_generator from "@swc/helpers/src/_ts_generator.mjs";
var x = function() {
    var _ref = _async_to_generator(function(i) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        someOtherFunction(i)
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return function x(i) {
        return _ref.apply(this, arguments);
    };
}();
var x1 = function() {
    var _ref = _async_to_generator(function(i) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        someOtherFunction(i)
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return function x1(i) {
        return _ref.apply(this, arguments);
    };
}();
