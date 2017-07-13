(function() {
  "use strict";

  angular.module("app")
    .component("startACollection", {
      controller: controller,
      templateUrl: './startACollection/startACollection.template.html'
    });

  controller.$inject = ['$state', '$http'];

  function controller($state, $http) {
    const vm = this;

    vm.$onInit = () => {
      vm.form = true;
      vm.confirmation = false;
    }

    vm.submitOrder = (consultation) => {

      vm.order = {
        name: vm.consultation.name.$viewValue,
        email: vm.consultation.email.$viewValue,
        city: vm.consultation.city.$viewValue,
        state: vm.consultation.state.$viewValue,
        style: vm.consultation.style.$viewValue,
        url: vm.consultation.url.$viewValue,
        space: vm.consultation.space.$viewValue,
        budget: vm.consultation.budget.$viewValue,
        timeline: vm.consultation.timeline.$viewValue
      }

      $http.post("/collectors", vm.order);
      delete vm.customer;
      vm.consultation.$setPristine();
      vm.form = false;
      vm.confirmation = true;
    } //end of submitOrder function

  } //end of controller function
}());