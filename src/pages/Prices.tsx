import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Prices() {
  const [activeTab, setActiveTab] = useState('retail');

  const retailPrices = [
    {
      category: 'Свежая клубника',
      items: [
        { name: 'Клубника Виктория', price: 300, unit: 'кг', season: 'Июнь-Июль', available: true },
        { name: 'Клубника Альбион', price: 350, unit: 'кг', season: 'Июнь-Август', available: true },
        { name: 'Клубника Клери', price: 280, unit: 'кг', season: 'Май-Июнь', available: false },
        { name: 'Клубника Мальвина', price: 320, unit: 'кг', season: 'Июль-Август', available: false }
      ]
    },
    {
      category: 'Переработанная продукция',
      items: [
        { name: 'Клубничное варенье', price: 450, unit: '0.5л банка', season: 'Круглый год', available: true },
        { name: 'Клубничный сок', price: 200, unit: '1л бутылка', season: 'Круглый год', available: true },
        { name: 'Клубничное пюре', price: 180, unit: '0.3л банка', season: 'Круглый год', available: true },
        { name: 'Сушеная клубника', price: 800, unit: 'кг', season: 'Круглый год', available: true }
      ]
    },
    {
      category: 'Замороженная продукция',
      items: [
        { name: 'Замороженная клубника целая', price: 250, unit: 'кг', season: 'Круглый год', available: true },
        { name: 'Замороженная клубника резаная', price: 230, unit: 'кг', season: 'Круглый год', available: true },
        { name: 'Клубничная смесь для смузи', price: 280, unit: 'кг', season: 'Круглый год', available: true }
      ]
    }
  ];

  const wholesalePrices = [
    {
      category: 'Свежая клубника (от 10 кг)',
      items: [
        { name: 'Клубника Виктория', price: 250, unit: 'кг', discount: '17%', minOrder: '10 кг' },
        { name: 'Клубника Альбион', price: 300, unit: 'кг', discount: '14%', minOrder: '10 кг' },
        { name: 'Клубника Клери', price: 240, unit: 'кг', discount: '14%', minOrder: '10 кг' },
        { name: 'Клубника Мальвина', price: 270, unit: 'кг', discount: '16%', minOrder: '10 кг' }
      ]
    },
    {
      category: 'Переработанная продукция (от 20 шт)',
      items: [
        { name: 'Клубничное варенье', price: 380, unit: '0.5л банка', discount: '16%', minOrder: '20 шт' },
        { name: 'Клубничный сок', price: 170, unit: '1л бутылка', discount: '15%', minOrder: '20 шт' },
        { name: 'Клубничное пюре', price: 150, unit: '0.3л банка', discount: '17%', minOrder: '20 шт' }
      ]
    },
    {
      category: 'Замороженная продукция (от 50 кг)',
      items: [
        { name: 'Замороженная клубника', price: 200, unit: 'кг', discount: '20%', minOrder: '50 кг' },
        { name: 'Клубничная смесь', price: 220, unit: 'кг', discount: '21%', minOrder: '50 кг' }
      ]
    }
  ];

  const seasonalPrices = [
    {
      month: 'Май',
      varieties: [
        { name: 'Клери (ранняя)', price: 350, status: 'Предзаказ' }
      ]
    },
    {
      month: 'Июнь',
      varieties: [
        { name: 'Клери', price: 280, status: 'В сезоне' },
        { name: 'Виктория', price: 300, status: 'В сезоне' },
        { name: 'Альбион', price: 350, status: 'В сезоне' }
      ]
    },
    {
      month: 'Июль',
      varieties: [
        { name: 'Виктория', price: 300, status: 'Пик сезона' },
        { name: 'Альбион', price: 350, status: 'В сезоне' },
        { name: 'Мальвина', price: 320, status: 'Начало сезона' }
      ]
    },
    {
      month: 'Август',
      varieties: [
        { name: 'Альбион', price: 350, status: 'В сезоне' },
        { name: 'Мальвина', price: 320, status: 'Пик сезона' }
      ]
    }
  ];

  const deliveryPrices = [
    { zone: 'В пределах города', distance: 'до 15 км', price: 'Бесплатно', minOrder: 'от 1 кг' },
    { zone: 'Ближние районы', distance: '15-30 км', price: '200₽', minOrder: 'от 2 кг' },
    { zone: 'Дальние районы', distance: '30-50 км', price: '400₽', minOrder: 'от 5 кг' },
    { zone: 'Область', distance: 'свыше 50 км', price: 'По договоренности', minOrder: 'от 10 кг' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Герой-секция */}
      <section className="py-20 bg-gradient-to-br from-strawberry-light to-strawberry text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Цены и прайс-лист</h1>
            <p className="text-xl mb-8 text-white/90">
              Актуальные цены на всю нашу продукцию. Специальные предложения для оптовых покупателей.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                <Icon name="DollarSign" size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Навигация по типам цен */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="retail">Розничные цены</TabsTrigger>
                <TabsTrigger value="wholesale">Оптовые цены</TabsTrigger>
                <TabsTrigger value="seasonal">Сезонные цены</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
              </TabsList>

              {/* Розничные цены */}
              <TabsContent value="retail" className="mt-8">
                <div className="space-y-8">
                  {retailPrices.map((category, categoryIndex) => (
                    <Card key={categoryIndex} className="bg-white border-0">
                      <CardHeader>
                        <CardTitle className="text-2xl text-garden-dark flex items-center">
                          <Icon name="ShoppingCart" size={24} className="mr-3 text-strawberry" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Наименование</TableHead>
                                <TableHead>Цена</TableHead>
                                <TableHead>Единица</TableHead>
                                <TableHead>Сезон</TableHead>
                                <TableHead>Наличие</TableHead>
                                <TableHead>Действие</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {category.items.map((item, itemIndex) => (
                                <TableRow key={itemIndex}>
                                  <TableCell className="font-medium">{item.name}</TableCell>
                                  <TableCell className="text-2xl font-bold text-strawberry">
                                    {item.price}₽
                                  </TableCell>
                                  <TableCell>{item.unit}</TableCell>
                                  <TableCell>
                                    <Badge variant="secondary">{item.season}</Badge>
                                  </TableCell>
                                  <TableCell>
                                    <Badge variant={item.available ? "default" : "destructive"}>
                                      {item.available ? 'В наличии' : 'Нет в наличии'}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    <Button 
                                      size="sm" 
                                      className="bg-strawberry hover:bg-strawberry-dark"
                                      disabled={!item.available}
                                    >
                                      Заказать
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Оптовые цены */}
              <TabsContent value="wholesale" className="mt-8">
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Icon name="Info" size={20} className="text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">Условия оптовых продаж</h3>
                  </div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Минимальный заказ указан для каждой категории</li>
                    <li>• Скидки действуют при соблюдении минимального объема</li>
                    <li>• Предоплата 50% при заказе свыше 50 кг</li>
                    <li>• Бесплатная доставка при заказе от 20 кг</li>
                  </ul>
                </div>

                <div className="space-y-8">
                  {wholesalePrices.map((category, categoryIndex) => (
                    <Card key={categoryIndex} className="bg-white border-0">
                      <CardHeader>
                        <CardTitle className="text-2xl text-garden-dark flex items-center">
                          <Icon name="Package" size={24} className="mr-3 text-strawberry" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Наименование</TableHead>
                                <TableHead>Оптовая цена</TableHead>
                                <TableHead>Единица</TableHead>
                                <TableHead>Скидка</TableHead>
                                <TableHead>Мин. заказ</TableHead>
                                <TableHead>Действие</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {category.items.map((item, itemIndex) => (
                                <TableRow key={itemIndex}>
                                  <TableCell className="font-medium">{item.name}</TableCell>
                                  <TableCell className="text-2xl font-bold text-green-600">
                                    {item.price}₽
                                  </TableCell>
                                  <TableCell>{item.unit}</TableCell>
                                  <TableCell>
                                    <Badge className="bg-green-100 text-green-800">
                                      -{item.discount}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>{item.minOrder}</TableCell>
                                  <TableCell>
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                      Заказать оптом
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Сезонные цены */}
              <TabsContent value="seasonal" className="mt-8">
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Icon name="Calendar" size={20} className="text-blue-600 mr-2" />
                    <h3 className="font-semibold text-blue-800">Сезонность цен</h3>
                  </div>
                  <p className="text-sm text-blue-700">
                    Цены на клубнику зависят от сезона созревания. В пик сезона цены минимальные, 
                    в начале и конце сезона - выше среднего.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {seasonalPrices.map((month, monthIndex) => (
                    <Card key={monthIndex} className="bg-white border-0">
                      <CardHeader>
                        <CardTitle className="text-xl text-garden-dark text-center">
                          {month.month}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {month.varieties.map((variety, varietyIndex) => (
                            <div key={varietyIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                              <div className="flex justify-between items-start mb-2">
                                <span className="font-medium text-sm">{variety.name}</span>
                                <span className="text-lg font-bold text-strawberry">
                                  {variety.price}₽
                                </span>
                              </div>
                              <Badge 
                                variant={
                                  variety.status === 'Пик сезона' ? 'default' :
                                  variety.status === 'В сезоне' ? 'secondary' :
                                  'outline'
                                }
                                className="text-xs"
                              >
                                {variety.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Доставка */}
              <TabsContent value="delivery" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Тарифы доставки */}
                  <Card className="bg-white border-0">
                    <CardHeader>
                      <CardTitle className="text-2xl text-garden-dark flex items-center">
                        <Icon name="Truck" size={24} className="mr-3 text-strawberry" />
                        Тарифы доставки
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Зона</TableHead>
                              <TableHead>Расстояние</TableHead>
                              <TableHead>Стоимость</TableHead>
                              <TableHead>Мин. заказ</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {deliveryPrices.map((zone, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{zone.zone}</TableCell>
                                <TableCell>{zone.distance}</TableCell>
                                <TableCell className="font-bold text-strawberry">
                                  {zone.price}
                                </TableCell>
                                <TableCell>{zone.minOrder}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Условия доставки */}
                  <Card className="bg-white border-0">
                    <CardHeader>
                      <CardTitle className="text-2xl text-garden-dark flex items-center">
                        <Icon name="Clock" size={24} className="mr-3 text-strawberry" />
                        Условия доставки
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-1">Время доставки</h4>
                            <p className="text-sm text-gray-600">В день заказа с 9:00 до 18:00</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-1">Предварительный звонок</h4>
                            <p className="text-sm text-gray-600">За 30 минут до прибытия</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-1">Упаковка</h4>
                            <p className="text-sm text-gray-600">В специальных контейнерах</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold mb-1">Оплата</h4>
                            <p className="text-sm text-gray-600">Наличными или картой курьеру</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Специальные предложения */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-garden-dark mb-6">Специальные предложения</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-800 flex items-center">
                    <Icon name="Gift" size={24} className="mr-3" />
                    Предзаказ на сезон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-700 mb-4">
                    Скидка 10% при предоплате до начала сезона
                  </p>
                  <Badge className="bg-yellow-200 text-yellow-800 mb-4">
                    Действует до 1 мая
                  </Badge>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    Оформить предзаказ
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 flex items-center">
                    <Icon name="Users" size={24} className="mr-3" />
                    Семейная скидка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">
                    5% скидка при заказе от 5 кг для постоянных клиентов
                  </p>
                  <Badge className="bg-green-200 text-green-800 mb-4">
                    Постоянная акция
                  </Badge>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Стать постоянным клиентом
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-800 flex items-center">
                    <Icon name="Star" size={24} className="mr-3" />
                    Первый заказ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 mb-4">
                    Скидка 15% на первый заказ для новых клиентов
                  </p>
                  <Badge className="bg-purple-200 text-purple-800 mb-4">
                    Для новичков
                  </Badge>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Сделать первый заказ
                  </Button>
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
            <h2 className="text-3xl font-bold mb-6">Готовы сделать заказ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Выберите подходящий тариф и наслаждайтесь свежей клубникой уже сегодня
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="bg-white text-strawberry hover:bg-white/90 text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Перейти в каталог
                </Button>
              </Link>
              <Link to="/wholesale">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="Package" size={20} className="mr-2" />
                  Оптовые заказы
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}