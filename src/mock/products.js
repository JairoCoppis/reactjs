export const products = [ 
    {
        id: 1,
        title: 'Remera verde',
        price: 2000,
        stock: 10,
        description:"lorem1",
        category: 'Remeras',
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera4_wyfums.jpg',
    },
    {
        id: 2,
        title: 'Billetera',
        price: 200,
        stock: 5,
        description:"lorem2",
        category: 'Billeteras',
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/billetera2C_bf0hvq.jpg',
    },
    {
        id: 3,
        title: 'Camisas',
        price: 3000,
        stock: 7,
        description:"lorem3",
        category: 'Camisas',
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372705/camisa2_tmojul.jpg',
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
