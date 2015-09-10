var async = require('async');

function HAPICreator(req, res, next){

    var funcs = [];
    this.add = function(func) {

        funcs.push(function (n) {
            func(req, res, n);
        });

    };

    this.run = function(callbackObj) {

        async.waterfall(funcs, function(err, req, res, n) {
            if (err) {
                next(err);
            }
        });
    }
}

module.exports = HAPICreator;