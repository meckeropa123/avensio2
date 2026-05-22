import { Category, Product } from '../types';

export const categories: Category[] = ['электроника', 'одежда', 'дом', 'спорт', 'красота', 'детские товары'];

export const products: Product[] = [
  { id: 1, name: 'Смартфон Nova X', category: 'электроника', price: 59990, rating: 4.8, isPopular: true, description: 'Флагманский смартфон с OLED-экраном и быстрой зарядкой.', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800' },
  { id: 2, name: 'Беспроводные наушники AirBeat', category: 'электроника', price: 12990, rating: 4.6, isNew: true, description: 'Шумоподавление и до 30 часов работы.', image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800' },
  { id: 3, name: 'Худи Urban Soft', category: 'одежда', price: 4990, rating: 4.4, description: 'Тёплое и мягкое худи на каждый день.', image: 'https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=800' },
  { id: 4, name: 'Кроссовки Sprint Pro', category: 'спорт', price: 8990, rating: 4.7, isPopular: true, description: 'Легкие кроссовки для бега и тренировок.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800' },
  { id: 5, name: 'Увлажняющий крем PureSkin', category: 'красота', price: 1990, rating: 4.5, description: 'Интенсивное увлажнение на 24 часа.', image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=800' },
  { id: 6, name: 'Набор посуды HomeChef', category: 'дом', price: 15990, rating: 4.3, description: 'Стильный набор из 8 предметов для кухни.', image: 'https://images.unsplash.com/photo-1584990347449-a6f5f8d8cb67?w=800' },
  { id: 7, name: 'Детский конструктор SmartBlocks', category: 'детские товары', price: 3490, rating: 4.9, isPopular: true, description: 'Развивающий конструктор для детей от 4 лет.', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800' },
  { id: 8, name: 'Умные часы Pulse 2', category: 'электроника', price: 14990, rating: 4.2, isNew: true, description: 'Мониторинг активности и сна, водозащита.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800' },
];
