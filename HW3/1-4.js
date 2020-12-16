'use strict';

// 4 Перед вами находится массив с продуктами в интернет - магазине.Вам нужно:
//     1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
//     2 Отсортируйте товары по цене(от низкой цены к высокой), можете использовать метод sort
//     https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0

// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

products.filter(checkPhoto);

function checkPhoto(obj) {
    let photo = obj.photos;
    if (photo.Array > 0) {
        console.log(obj)
    } else if (photo !== undefined) {
        console.log(obj);
    }
}


