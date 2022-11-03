export const products = [ 
    {
        id: 1,
        title: 'Vainilla Latte',
        price: 2000,
        stock: 10,
        description:"Café espresso con leche al vapor y toques de vainilla.",
        category: 'Cafe Caliente',
        img: './img/vainilla.jpg',
    },
    {
        id: 2,
        title: 'Caramel Macchiato ice',
        price: 200,
        stock: 5,
        description:"Hielo, vainilla y leche manchada con espresso, finalizada con el característico dibujo de caramelo.",
        category: 'Cafe Frio',
        img: 'img/caramelice.jpg',
    },
    {
        id: 3,
        title: 'Shaken Lemonade Green Tea',
        price: 3000,
        stock: 7,
        description:"Nuestro té verde combinado con limón y mezclado con hielo.",
        category: 'Bebida Fria',
        img: './img/starbucks-green-tea.jpg',
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
