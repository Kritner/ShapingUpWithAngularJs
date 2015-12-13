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

    app.controller("ReviewController", function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
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
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'the best! the best! the best! the best! the best! the best! the best! the best!',
                    author: 'dgrohl@gmail.com'
                },
                {
                    stars: 4,
                    body: "People don't think the universe be like it is, but it do.",
                    author: 'ntyson@gmail.com'
                },
                {
                    stars: 1,
                    body: "this gem is terribad.  C'THULU FHTAGN",
                    author: "defNotCthulu@gmail.com"
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