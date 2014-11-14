(function() {
  'use strict';

  angular.module('demoApp', ['ui.cards'])
  .controller('MainCtrl', function($scope, $timeout, keys) {
    // Parameters
    $scope.parameters = {
      emptyPlaceholderEnabled: false,
      enableExpandOnHover: false,
      expandOnHover: 500
    };

    $scope.keys = keys;

    $scope.list = 
        [{
            "id": 1,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 2,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 3,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 4,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 5,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 6,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 7,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 8,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 9,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         },
         {
            "id": 10,
            "first_name": "John",
            "last_name": "Smith",
            "phone_number": "(123)456-7890",
            "make": "Chevrolet",
            "model": "Impala",
            "model_year": 2014,
            "vin": "1234567890ABCDEF",
            "service_type": "Tow",
            "disablement_addr": "1 Commerce Dr",
            "disablement_city": "Cranbury",
            "disablement_st_cd": "NJ",
            "disablement_postal_cd": "08512",
            "tow_addr": "3456 US-130",
            "tow_city": "South Brunswick",
            "tow_st_cd": "NJ",
            "tow_postal_cd": "08556",
            "create_dtime": "11/11/2014, 8:20AM",
            "service_date": "",
            "eta":  30
         }
        ];

    $scope.callbacks = {
    };

    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      scope.toggle();
    };

  });

})();