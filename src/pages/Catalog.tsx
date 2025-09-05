import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Клубника Виктория',
      price: 300,
      unit: 'кг',
      description: 'Сладкая, ароматная, крупная ягода. Идеальна для употребления в свежем виде.',
      season: 'Июнь-Июль',
      category: 'fresh',
      inStock: true,
      image: '/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg',
      characteristics: ['Крупная', 'Сладкая', 'Ароматная'],
      weight: '1 кг'
    },
    {
      id: 2,
      name: 'Клубника Альбион',
      price: 350,
      unit: 'кг',
      description: 'Ремонтантный сорт, плодоносит с июня до осени. Отличается высокой урожайностью.',
      season: 'Июнь-Август',
      category: 'fresh',
      inStock: true,
      image: '/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg',
      characteristics: ['Ремонтантная', 'Урожайная', 'Плотная'],
      weight: '1 кг'
    },
    {
      id: 3,
      name: 'Клубника Клери',
      price: 280,
      unit: 'кг',
      description: 'Ранний сорт, первые ягоды сезона. Сочная и отлично хранится.',
      season: 'Май-Июнь',
      category: 'fresh',
      inStock: true,
      image: '/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg',
      characteristics: ['Ранняя', 'Сочная', 'Лежкая'],
      weight: '1 кг'
    },
    {
      id: 4,
      name: 'Клубника Мальвина',
      price: 320,
      unit: 'кг',
      description: 'Поздний сорт, очень сладкая. Завершает клубничный сезон.',
      season: 'Июль-Август',
      category: 'fresh',
      inStock: false,
      image: '/img/f200270e-cee4-424c-a945-a66bcddce97f.jpg',
      characteristics: ['Поздняя', 'Очень сладкая', 'Крупная'],
      weight: '1 кг'
    },
    {
      id: 5,
      name: 'Клубничное варенье',
      price: 450,
      unit: 'банка 0.5л',
      description: 'Домашнее варенье из нашей клубники. Без консервантов и красителей.',
      season: 'Круглый год',
      category: 'processed',
      inStock: true,
      image: '/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg',
      characteristics: ['Домашнее', 'Без консервантов', 'Натуральное'],
      weight: '0.5 л'
    },
    {
      id: 6,
      name: 'Замороженная клубника',
      price: 250,
      unit: 'кг',
      description: 'Быстрозамороженная клубника. Сохраняет все полезные свойства.',
      season: 'Круглый год',
      category: 'frozen',
      inStock: true,
      image: '/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg',
      characteristics: ['Быстрая заморозка', 'Полезная', 'Удобная'],
      weight: '1 кг'
    },
    {
      id: 7,
      name: 'Клубничный сок',
      price: 200,
      unit: 'бутылка 1л',
      description: 'Натуральный сок прямого отжима. Без добавления сахара.',
      season: 'Круглый год',
      category: 'processed',
      inStock: true,
      image: '/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg',
      characteristics: ['Прямой отжим', 'Без сахара', 'Натуральный'],
      weight: '1 л'
    },
    {
      id: 8,
      name: 'Клубничное пюре',
      price: 180,
      unit: 'банка 0.3л',
      description: 'Нежное пюре для детского питания. Без добавок.',
      season: 'Круглый год',
      category: 'processed',
      inStock: true,
      image: '/img/f200270e-cee4-424c-a945-a66bcddce97f.jpg',
      characteristics: ['Детское питание', 'Нежное', 'Без добавок'],
      weight: '0.3 л'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || product.category === filterBy;
    return matchesSearch && matchesFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const categories = [
    { id: 'all', name: 'Все товары', count: products.length },
    { id: 'fresh', name: 'Свежая клубника', count: products.filter(p => p.category === 'fresh').length },
    { id: 'frozen', name: 'Замороженная', count: products.filter(p => p.category === 'frozen').length },
    { id: 'processed', name: 'Переработанная', count: products.filter(p => p.category === 'processed').length }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Герой-секция */}
      <section className="py-20 bg-gradient-to-br from-strawberry-light to-strawberry text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Каталог продукции</h1>
            <p className="text-xl mb-8 text-white/90">
              Выберите из нашего ассортимента свежую клубнику и продукты из неё
            </p>
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                <Icon name="ShoppingCart" size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Поиск товаров..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Категория" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">По названию</SelectItem>
                    <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={filterBy} onValueChange={setFilterBy}>
              <TabsList className="grid w-full grid-cols-4">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Каталог товаров */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="Search" size={64} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-600 mb-2">Товары не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white relative">
                    {!product.inStock && (
                      <div className="absolute top-2 right-2 z-10">
                        <Badge variant="destructive">Нет в наличии</Badge>
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg text-garden-dark">{product.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-strawberry">
                          {product.price}₽
                        </div>
                        <div className="text-sm text-gray-500">
                          за {product.unit}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.characteristics.map((char, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {char}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Icon name="Calendar" size={14} className="mr-1" />
                          {product.season}
                        </div>
                        <div className="flex items-center">
                          <Icon name="Package" size={14} className="mr-1" />
                          {product.weight}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-strawberry hover:bg-strawberry-dark"
                          disabled={!product.inStock}
                        >
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          {product.inStock ? 'В корзину' : 'Нет в наличии'}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Информация о заказе */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-garden-dark">
                    <Icon name="Truck" size={24} className="mr-3 text-strawberry" />
                    Доставка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Бесплатная доставка от 1 кг</p>
                  <p className="text-sm text-gray-500">В день заказа по городу</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-garden-dark">
                    <Icon name="Shield" size={24} className="mr-3 text-strawberry" />
                    Качество
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">100% натуральная продукция</p>
                  <p className="text-sm text-gray-500">Ручной отбор каждой ягоды</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-garden-dark">
                    <Icon name="Phone" size={24} className="mr-3 text-strawberry" />
                    Поддержка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Консультации по выбору</p>
                  <p className="text-sm text-gray-500">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-strawberry text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна помощь с выбором?</h2>
            <p className="text-xl mb-8 text-white/90">
              Наши специалисты помогут подобрать идеальную клубнику для ваших потребностей
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacts">
                <Button size="lg" className="bg-white text-strawberry hover:bg-white/90 text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </Link>
              <Link to="/preorders">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Оформить предзаказ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}