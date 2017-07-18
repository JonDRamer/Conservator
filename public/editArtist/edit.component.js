(function() {
  "use strict";

  angular.module("app")
    .component("edit", {
      controller: controller,
      templateUrl: './editArtist/edit.template.html'
    });

  controller.$inject = ['$http'];

  function controller($http) {
    const vm = this;

    vm.$onInit = () => {
      vm.form = false;
      vm.getArtist();
    }

    vm.getArtist = () => {
      $http.get('/artists/${artist.id}')
        .then((artist) => {
          vm.artist = artist.data;
          return artist.data;
        })
    }

    vm.deleteArtist = (artist) => {
      $http.delete(`/artists/${artist.id}`)
        .then((response) => {
          vm.artist.splice(vm.artist.indexOf(artist), 1);
          return response.data;
        });
    };

  }

}());
