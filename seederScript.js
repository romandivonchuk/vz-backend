require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const fs = require('fs');

connectDB();


let shoes = [
    {
        sex: "man",
        id: 1,
        brand: "MADIRO",
        model: '',
        type: "sneakers",
        description: "Жіночі білі шкіряні кросівки з перфорацією",
        barcode: 1,
        price: 1990,
        size: [36, 37, 38],
        color: 'white',
        likes: 0,
        photos: ['images/marido.jpg'],
        sale: '',
    },

    {
        sex: "man",
        id: 2,
        brand: "CARUSO SHOES",
        model: '',
        type: "slippers",
        description: "Жіночі шкіряні шльопанці",
        barcode: 1,
        price: 1990,
        size: [36, 37, 38, 39],
        color: 'black',
        likes: 0,
        photos: ['images/caruso-shoes.jpg'],
        sale: '',
    },

    {
        sex: "man",
        id: 3,
        brand: "BELLANCA",
        model: '',
        type: "sandals",
        description: "Жіночі чорні шкіряні босоніжки",
        barcode: 1,
        price: 2250,
        size: [36, 37, 38, 39],
        color: 'black',
        likes: 0,
        photos: ['images/bellanca.jpg'],
        sale: '',
    },
    {
        sex: "man",
        id: 4,
        brand: "CEVIVO",
        model: '',
        type: "sneakers",
        description: "Чоловічі чорні шкіряні кросівки",
        barcode: 1,
        price: 1120,
        size: [11, 38, 39, 40, 41],
        color: 'blue',
        likes: 0,
        photos: ['images/cevivo.jpg'],
        sale: '',
    },
    {
        sex: "woman",
        id: 5,
        brand: "KASANDRA",
        model: '',
        type: "sneakers",
        description: "Чоловічі білі шкіряні кросівки",
        barcode: 1,
        price: 1500,
        size: [38, 39, 40, 41],
        color: 'white',
        likes: 0,
        photos: ['images/kasandra.jpg'],
        sale: '',
    },
    {
        sex: "woman",
        id: 6,
        brand: "LENO",
        model: '',
        type: "ballet-flats",
        description: "Чорні шкіряні балетки",
        barcode: 1,
        price: 950,
        size: [38, 39, 40, 41],
        color: 'black',
        likes: 0,
        photos: ['images/leno.jpg'],
        sale: '',
    },
    {
        sex: "woman",
        id: 7,
        brand: "MIAS",
        model: '',
        type: "shoes",
        description: "Жовті шкіряні туфлі",
        barcode: 1,
        price: 1350,
        size: [38, 39, 40, 41],
        color: 'yellow',
        likes: 0,
        photos: ['images/mias.jpg'],
        sale: '',
    },
    {
        sex: "children",
        id: 8,
        brand: "YEEZY",
        model: '',
        type: "slippers",
        description: "Зелені тапки з екологічної EVA пени",
        barcode: 1,
        price: 1350,
        size: [38, 39, 40, 41],
        color: 'green',
        likes: 0,
        photos: ['images/yeezy.jpg'],
        sale: '',
    },
    {
        sex: "children",
        id: 9,
        brand: "PAPUCHI",
        model: '',
        type: "sandals",
        description: "Пурпурові босоніжки з шкіри",
        barcode: 1,
        price: 1350,
        size: [38, 39, 40, 41],
        color: 'green',
        likes: 0,
        photos: ['images/papuchi.jpg'],
        sale: '',
    },
]

function converted(array) {

    let encodImgArray = array.map((obj) => {


        let img = fs.readFileSync(`D:/vzyttia/web/shoes/public/${obj.photos[0]}`)
        obj.photos = img.toString('base64')
        return obj

    })

    return encodImgArray

}

shoes = converted(shoes)


const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(shoes)
        console.log('Data import success')
        process.exit()
    } catch (error) {
        console.error('error with data import', error)
        process.exit(1)
    }
};

importData();