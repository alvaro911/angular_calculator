(function(){
	angular
	.module('CalculatorApp',[])
	.controller('calculatorCtrl', calcFn);

	function calcFn(){
		var vm = this;
		vm.total='';
		vm.number = function(num){
			vm.total += num;
		};
	}
})(angular);