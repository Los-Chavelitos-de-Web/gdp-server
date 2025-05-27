import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Crear usuarios
  // await prisma.user.create({
  //   data: {
  //     name: '',
  //     email: '',
  //     password: '',
  //     role: 'ADMIN',
  //   },
  // });

  // await prisma.user.create({
  //   data: {
  //     name: '',
  //     email: '',
  //     password: '',
  //   },
  // });

  // Crear productos
  await prisma.product.createMany({
    data: [
      {
        title: 'Casio Vintage A168',
        description:
          'Reloj digital clásico con luz LED y correa de acero inoxidable.',
        utlImg: 'https://example.com/images/casio-vintage-a168.jpg',
        brand: 'Casio',
        price: 49.99,
        stock: 100,
      },
      {
        title: 'Seiko 5 Automatic',
        description:
          'Reloj automático con diseño elegante y resistencia al agua.',
        utlImg: 'https://example.com/images/seiko-5.jpg',
        brand: 'Seiko',
        price: 129.99,
        stock: 50,
      },
      {
        title: 'Rolex Submariner',
        description:
          'Icónico reloj de buceo de lujo con movimiento automático.',
        utlImg: 'https://example.com/images/rolex-submariner.jpg',
        brand: 'Rolex',
        price: 8999.99,
        stock: 5,
      },
      {
        title: 'Timex Weekender',
        description: 'Reloj casual con correa de nylon intercambiable.',
        utlImg: 'https://example.com/images/timex-weekender.jpg',
        brand: 'Timex',
        price: 39.99,
        stock: 80,
      },
      {
        title: 'G-Shock GA-2100',
        description: 'Reloj resistente a golpes y al agua, con diseño moderno.',
        utlImg: 'https://example.com/images/gshock-ga2100.jpg',
        brand: 'G-Shock',
        price: 99.99,
        stock: 60,
      },
      {
        title: 'Tissot PRX',
        description: 'Reloj suizo con diseño retro y movimiento de cuarzo.',
        utlImg: 'https://example.com/images/tissot-prx.jpg',
        brand: 'Tissot',
        price: 379.99,
        stock: 30,
      },
      {
        title: 'Fossil Grant Chronograph',
        description: 'Reloj cronógrafo con correa de cuero genuino.',
        utlImg: 'https://example.com/images/fossil-grant.jpg',
        brand: 'Fossil',
        price: 89.99,
        stock: 45,
      },
      {
        title: 'Citizen Eco-Drive',
        description: 'Reloj impulsado por luz, sin necesidad de batería.',
        utlImg: 'https://example.com/images/citizen-eco.jpg',
        brand: 'Citizen',
        price: 199.99,
        stock: 40,
      },
      {
        title: 'Daniel Wellington Classic',
        description: 'Diseño minimalista con correa de cuero negra.',
        utlImg: 'https://example.com/images/dw-classic.jpg',
        brand: 'Daniel Wellington',
        price: 149.99,
        stock: 65,
      },
      {
        title: 'Omega Speedmaster',
        description: 'El legendario “Moonwatch” con cronógrafo profesional.',
        utlImg: 'https://example.com/images/omega-speedmaster.jpg',
        brand: 'Omega',
        price: 6499.99,
        stock: 8,
      },
      {
        title: 'MVMT Chrono Gunmetal',
        description: 'Estilo urbano con acabado metálico oscuro.',
        utlImg: 'https://example.com/images/mvmt-chrono.jpg',
        brand: 'MVMT',
        price: 119.99,
        stock: 70,
      },
      {
        title: 'Bulova Lunar Pilot',
        description: 'Edición inspirada en el reloj usado en la Luna.',
        utlImg: 'https://example.com/images/bulova-lunar.jpg',
        brand: 'Bulova',
        price: 499.99,
        stock: 20,
      },
      {
        title: 'Hamilton Khaki Field',
        description: 'Reloj militar robusto con movimiento automático.',
        utlImg: 'https://example.com/images/hamilton-khaki.jpg',
        brand: 'Hamilton',
        price: 549.99,
        stock: 18,
      },
      {
        title: 'Swatch Originals',
        description: 'Estilo colorido y divertido con diseño clásico.',
        utlImg: 'https://example.com/images/swatch-originals.jpg',
        brand: 'Swatch',
        price: 69.99,
        stock: 90,
      },
      {
        title: 'Garmin Fenix 7',
        description: 'Reloj multideportivo con GPS y métricas avanzadas.',
        utlImg: 'https://example.com/images/garmin-fenix7.jpg',
        brand: 'Garmin',
        price: 699.99,
        stock: 12,
      },
      {
        title: 'Apple Watch Series 9',
        description:
          'Reloj inteligente con pantalla siempre activa y sensores de salud.',
        utlImg: 'https://example.com/images/apple-watch-s9.jpg',
        brand: 'Apple',
        price: 399.99,
        stock: 25,
      },
      {
        title: 'Samsung Galaxy Watch6',
        description: 'Smartwatch con funciones de salud y conectividad LTE.',
        utlImg: 'https://example.com/images/samsung-watch6.jpg',
        brand: 'Samsung',
        price: 329.99,
        stock: 35,
      },
      {
        title: 'Luminox Navy SEAL',
        description: 'Reloj táctico con iluminación autosuficiente.',
        utlImg: 'https://example.com/images/luminox-navyseal.jpg',
        brand: 'Luminox',
        price: 299.99,
        stock: 22,
      },
      {
        title: 'Orient Bambino V5',
        description: 'Reloj automático de vestir con estilo vintage.',
        utlImg: 'https://example.com/images/orient-bambino.jpg',
        brand: 'Orient',
        price: 149.99,
        stock: 55,
      },
      {
        title: 'Nixon Time Teller',
        description: 'Diseño moderno minimalista en múltiples colores.',
        utlImg: 'https://example.com/images/nixon-time-teller.jpg',
        brand: 'Nixon',
        price: 99.99,
        stock: 75,
      },
    ],
  });

  console.log('🌱 Seeds cargados correctamente con todos los productos.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
