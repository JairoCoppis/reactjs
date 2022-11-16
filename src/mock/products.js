export const products = [ 
    {
        id: 1,
        title: 'Vainilla Latte',
        price: 1400,
        stock: 10,
        description:"Café espresso con leche al vapor y toques de vainilla.",
        category: 'Cafe Caliente',
        img: 'https://res.cloudinary.com/dxqgdgglu/image/upload/v1667513249/Page/vainilla_im84k6.jpg',
    },
    {
        id: 2,
        title: 'Caramel Macchiato ice',
        price: 1000,
        stock: 5,
        description:"Hielo, vainilla y leche manchada con espresso, finalizada con el característico dibujo de caramelo.",
        category: 'Cafe Frio',
        img: 'https://res.cloudinary.com/dxqgdgglu/image/upload/v1667513248/Page/caramelice_bmhxp8.jpg',
    },
    {
        id: 3,
        title: 'Shaken Lemonade Green Tea',
        price: 800,
        stock: 7,
        description:"Nuestro té verde combinado con limón y mezclado con hielo.",
        category: 'Bebida Fria',
        img: 'https://res.cloudinary.com/dxqgdgglu/image/upload/v1667513257/Page/starbucks-green-tea_sdojjq.jpg',
    },
];

export const getProducts = (categoryName) => {
    return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
            (prod) => prod.category === categoryName
        );
        const ref = categoryName ? prodFiltrados : products;
        setTimeout(() => {
            res(ref);
        }, 500);
    });
};

export const getProduct = (idProd) => {
    return new Promise((res, rej) => {
        const product = products.find((prod) => prod.id === +idProd);
        setTimeout(() => {
            res(product);
        }, 500);
    });
};