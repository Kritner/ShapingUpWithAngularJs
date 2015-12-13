(function () {

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecohedron',
            price: 2.95,
            description: 'Oh man this gem is SICK!',
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'This gem looks like the pentagon!',
            canPurchase: false
        }
    ];

})();