import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Varieties() {
  const [selectedVariety, setSelectedVariety] = useState('victoria');

  const varieties = [
    {
      id: 'victoria',
      name: 'Виктория',
      price: '300₽/кг',
      description: 'Классический сорт садовой клубники, известный своим превосходным вкусом и ароматом.',
      fullDescription: 'Виктория - один из самых популярных и проверенных временем сортов клубники. Ягоды крупные, конической формы, ярко-красного цвета с глянцевой поверхностью. Мякоть сочная, сладкая с легкой кислинкой, что создает идеальный баланс вкуса.',
      season: 'Июнь-Июль',
      characteristics: {
        sweetness: 85,
        size: 90,
        aroma: 95,
        yield: 80,
        storage: 70
      },
      features: [
        'Крупные ягоды (до 40г)',
        'Высокие вкусовые качества',
        'Устойчивость к болезням',
        'Хорошая транспортабельность'
      ],
      careInstructions: [
        'Регулярный полив в период созревания',
        'Мульчирование почвы',
        'Подкормка органическими удобрениями',
        'Удаление усов для лучшего плодоношения'
      ],
      image: '/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg',
      gallery: [
        '/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg',
        '/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg',
        '/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg'
      ]
    },
    {
      id: 'albion',
      name: 'Альбион',
      price: '350₽/кг',
      description: 'Ремонтантный сорт американской селекции, плодоносящий с июня до заморозков.',
      fullDescription: 'Альбион - современный ремонтантный сорт, который может давать урожай несколько раз за сезон. Ягоды крупные, удлиненно-конической формы, темно-красного цвета. Отличается высокой урожайностью и отличными товарными качествами.',
      season: 'Июнь-Август',
      characteristics: {
        sweetness: 80,
        size: 95,
        aroma: 75,
        yield: 95,
        storage: 90
      },
      features: [
        'Ремонтантное плодоношение',
        'Очень крупные ягоды (до 60г)',
        'Отличная лежкость',
        'Устойчивость к жаре'
      ],
      careInstructions: [
        'Обильный полив в жаркую погоду',
        'Регулярные подкормки',
        'Удаление первых цветоносов',
        'Защита от вредителей'
      ],
      image: '/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg',
      gallery: [
        '/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg',
        '/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg',
        '/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg'
      ]
    },
    {
      id: 'clery',
      name: 'Клери',
      price: '280₽/кг',
      description: 'Ранний итальянский сорт, открывающий клубничный сезон.',
      fullDescription: 'Клери - ранний сорт итальянской селекции, который созревает одним из первых. Ягоды среднего размера, правильной конической формы, ярко-красного цвета. Мякоть плотная, сочная, с приятным кисло-сладким вкусом.',
      season: 'Май-Июнь',
      characteristics: {
        sweetness: 75,
        size: 70,
        aroma: 80,
        yield: 85,
        storage: 85
      },
      features: [
        'Очень раннее созревание',
        'Дружное плодоношение',
        'Хорошая транспортабельность',
        'Устойчивость к заболеваниям'
      ],
      careInstructions: [
        'Защита от весенних заморозков',
        'Умеренный полив',
        'Профилактика грибковых заболеваний',
        'Своевременная уборка урожая'
      ],
      image: '/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg',
      gallery: [
        '/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg',
        '/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg',
        '/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg'
      ]
    },
    {
      id: 'malvina',
      name: 'Мальвина',
      price: '320₽/кг',
      description: 'Поздний немецкий сорт, завершающий клубничный сезон.',
      fullDescription: 'Мальвина - поздний сорт немецкой селекции, который плодоносит в конце сезона. Ягоды очень крупные, темно-красного цвета с фиолетовым оттенком. Мякоть плотная, очень сладкая, с насыщенным ароматом.',
      season: 'Июль-Август',
      characteristics: {
        sweetness: 95,
        size: 85,
        aroma: 90,
        yield: 75,
        storage: 80
      },
      features: [
        'Позднее созревание',
        'Очень сладкие ягоды',
        'Крупный размер',
        'Насыщенный аромат'
      ],
      careInstructions: [
        'Защита от летней жары',
        'Регулярный полив',
        'Подкормка в период налива ягод',
        'Мульчирование для сохранения влаги'
      ],
      image: '/img/f200270e-cee4-424c-a945-a66bcddce97f.jpg',
      gallery: [
        '/img/f200270e-cee4-424c-a945-a66bcddce97f.jpg',
        '/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg',
        '/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg'
      ]
    }
  ];

  const currentVariety = varieties.find(v => v.id === selectedVariety) || varieties[0];

  return (
    <div className="min-h-screen bg-cream">
      {/* Герой-секция */}
      <section className="py-20 bg-gradient-to-br from-garden-light to-garden text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Сорта клубники</h1>
            <p className="text-xl mb-8 text-white/90">
              Подробная информация о каждом сорте клубники, который мы выращиваем
            </p>
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                <Icon name="Leaf" size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Навигация по сортам */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={selectedVariety} onValueChange={setSelectedVariety}>
              <TabsList className="grid w-full grid-cols-4">
                {varieties.map(variety => (
                  <TabsTrigger key={variety.id} value={variety.id} className="text-sm">
                    {variety.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Детальная информация о сорте */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Изображения */}
              <div>
                <div className="mb-6">
                  <img 
                    src={currentVariety.image} 
                    alt={currentVariety.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {currentVariety.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${currentVariety.name} ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              {/* Информация */}
              <div>
                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-garden-dark mb-2">{currentVariety.name}</h2>
                  <div className="text-3xl font-bold text-strawberry mb-4">{currentVariety.price}</div>
                  <Badge className="bg-garden-light text-garden-dark mb-4">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    {currentVariety.season}
                  </Badge>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentVariety.fullDescription}
                </p>

                {/* Характеристики */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-garden-dark mb-4">Характеристики</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Сладость</span>
                        <span className="text-sm font-medium">{currentVariety.characteristics.sweetness}%</span>
                      </div>
                      <Progress value={currentVariety.characteristics.sweetness} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Размер ягод</span>
                        <span className="text-sm font-medium">{currentVariety.characteristics.size}%</span>
                      </div>
                      <Progress value={currentVariety.characteristics.size} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Аромат</span>
                        <span className="text-sm font-medium">{currentVariety.characteristics.aroma}%</span>
                      </div>
                      <Progress value={currentVariety.characteristics.aroma} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Урожайность</span>
                        <span className="text-sm font-medium">{currentVariety.characteristics.yield}%</span>
                      </div>
                      <Progress value={currentVariety.characteristics.yield} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Лежкость</span>
                        <span className="text-sm font-medium">{currentVariety.characteristics.storage}%</span>
                      </div>
                      <Progress value={currentVariety.characteristics.storage} className="h-2" />
                    </div>
                  </div>
                </div>

                {/* Кнопки действий */}
                <div className="flex gap-4">
                  <Link to="/catalog">
                    <Button className="bg-strawberry hover:bg-strawberry-dark">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Заказать
                    </Button>
                  </Link>
                  <Link to="/contacts">
                    <Button variant="outline">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Консультация
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности сорта */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Особенности */}
              <Card className="bg-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-garden-dark flex items-center">
                    <Icon name="Star" size={24} className="mr-3 text-strawberry" />
                    Особенности сорта
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentVariety.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Уход */}
              <Card className="bg-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-garden-dark flex items-center">
                    <Icon name="Sprout" size={24} className="mr-3 text-garden" />
                    Особенности ухода
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentVariety.careInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Droplets" size={16} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Сравнение сортов */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-garden-dark mb-6">Сравнение сортов</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto"></div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-garden-dark">Характеристика</th>
                    {varieties.map(variety => (
                      <th key={variety.id} className="text-center py-4 px-4 font-bold text-garden-dark">
                        {variety.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Сезон</td>
                    {varieties.map(variety => (
                      <td key={variety.id} className="py-3 px-4 text-center text-sm">
                        {variety.season}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Цена</td>
                    {varieties.map(variety => (
                      <td key={variety.id} className="py-3 px-4 text-center text-sm font-bold text-strawberry">
                        {variety.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Сладость</td>
                    {varieties.map(variety => (
                      <td key={variety.id} className="py-3 px-4 text-center">
                        <Progress value={variety.characteristics.sweetness} className="h-2 w-16 mx-auto" />
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Размер</td>
                    {varieties.map(variety => (
                      <td key={variety.id} className="py-3 px-4 text-center">
                        <Progress value={variety.characteristics.size} className="h-2 w-16 mx-auto" />
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Урожайность</td>
                    {varieties.map(variety => (
                      <td key={variety.id} className="py-3 px-4 text-center">
                        <Progress value={variety.characteristics.yield} className="h-2 w-16 mx-auto" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-strawberry text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Выберите свой идеальный сорт</h2>
            <p className="text-xl mb-8 text-white/90">
              Каждый сорт имеет свои уникальные особенности. Мы поможем выбрать идеальную клубнику для ваших потребностей.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="bg-white text-strawberry hover:bg-white/90 text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать клубнику
                </Button>
              </Link>
              <Link to="/consultation">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}