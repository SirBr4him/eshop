import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

const items = [
  {
    name: 'Air Jordan 4 “Super Nintendo”',
    description: 'Great fit, super comfy',
    image: 'https://i.imgur.com/cYeomek.png',
    price: 255,
    sku: '123',
  },
  {
    name: 'Air jordan 4 Cement',
    description: 'Awesome for cold days',
    image: 'https://i.imgur.com/OGW9naM.jpeg',
    price: 188,
    sku: '456',
  },
  {
    name: 'Air Jordan Off-White 5',
    description: 'A little fancier',
    image: 'https://i.imgur.com/BShhvX1.jpg',
    price: 325,
    sku: '789',
  },
];

async function main() {
  for (let item of items) {
    await prisma.product.create({ data: item });
  }
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
