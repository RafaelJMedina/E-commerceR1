const products = [
    {
        id: '1',
        title: 'Notebook Gamer',
        price: 150000,
        description: 'Notebook potente para gaming y trabajo.',
        category: 'tecnologia',
        img: 'https://placehold.co/300',
        stock: 10
    },
    {
        id: '2',
        title: 'Auriculares Bluetooth',
        price: 5000,
        description: 'Auriculares con cancelación de ruido.',
        category: 'tecnologia',
        img: 'https://placehold.co/300',
        stock: 20
    },
    {
        id: '3',
        title: 'Camiseta Deportiva',
        price: 2000,
        description: 'Camiseta transpirable para entrenamiento.',
        category: 'ropa',
        img: 'https://placehold.co/300',
        stock: 50
    },
    {
        id: '4',
        title: 'Pantalón Jean',
        price: 4500,
        description: 'Pantalón de jean clásico y cómodo.',
        category: 'ropa',
        img: 'https://placehold.co/300',
        stock: 30
    },
    {
        id: '5',
        title: 'Pelota de Fútbol',
        price: 3000,
        description: 'Pelota profesional número 5.',
        category: 'deportes',
        img: 'https://placehold.co/300',
        stock: 15
    },
    {
        id: '6',
        title: 'Raqueta de Tenis',
        price: 12000,
        description: 'Raqueta ligera para principiantes.',
        category: 'deportes',
        img: 'https://placehold.co/300',
        stock: 8
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};
