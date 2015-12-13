(function () {

    var app = angular.module("gemStore", []);

    app.controller("StoreController", function () {
        this.products = gems;
    });

    app.controller("PanelController", function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    var gems = [
        {
            name: 'Dodecohedron',
            price: 2.95,
            description: 'Oh man this gem is SICK!',
            canPurchase: true,
            soldOut: true,
            images: [
                {
                    full: 'dodecohedron-01-full.jpg',
                    thumb: 'dodecohedron-01-thumb.jpg'
                },
                {
                    full: 'dodecohedron-02-full.jpg',
                    thumb: 'dodecohedron-02-thumb.jpg'
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'This gem looks like the pentagon!',
            canPurchase: false,
            images: [
                {
                    full: 'pentagonal-01-full.jpg',
                    thumb: 'pentagonal-01-thumb.jpg'
                },
                {
                    full: 'pentagonal-02-full.jpg',
                    thumb: 'pentagonal-02-thumb.jpg'
                }
            ]
        }
    ];

})();