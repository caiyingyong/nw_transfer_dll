/*var system = require('./addon');

setInterval(function () {
  console.log(system.getIdleTime());
}, 1000);*/

var ref = require("ref");
var ffi = require('ffi');
console.log(ffi);
console.log(ref);
var Test = ffi.Library('./testDll',{
    'init':['int',[]],
    'hello':['int',[]]
});
var init = Test.init();
var hello = Test.hello();
console.log(init + "-----" + hello);


