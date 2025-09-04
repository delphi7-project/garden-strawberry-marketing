import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('varieties');

  const varieties = [
    { name: 'Виктория', price: '300₽/кг', description: 'Сладкая, ароматная, крупная', season: 'Июнь-Июль' },
    { name: 'Альбион', price: '350₽/кг', description: 'Ремонтантная, плодоносит до осени', season: 'Июнь-Август' },
    { name: 'Клери', price: '280₽/кг', description: 'Ранняя, сочная, отлично хранится', season: 'Май-Июнь' },
    { name: 'Мальвина', price: '320₽/кг', description: 'Поздняя, очень сладкая', season: 'Июль-Август' }
  ];

  const reviews = [
    { name: 'Мария П.', text: 'Покупаем у бабушки Олеси уже третий год! Клубника просто волшебная - сладкая, ароматная. Дети в восторге!', rating: 5 },
    { name: 'Владимир С.', text: 'Отличное качество, всегда свежая. Доставка быстрая. Рекомендую всем!', rating: 5 },
    { name: 'Анна К.', text: 'Лучшая клубника в городе! Варенье получается невероятное. Спасибо за такой труд!', rating: 5 }
  ];

  const recipes = [
    { name: 'Клубничное варенье', time: '45 мин', difficulty: 'Легко' },
    { name: 'Клубничный пирог', time: '1.5 часа', difficulty: 'Средне' },
    { name: 'Клубничный смузи', time: '5 мин', difficulty: 'Очень легко' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Герой-секция */}
      <section className="relative overflow-hidden bg-gradient-to-br from-strawberry-light to-strawberry py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                <Icon name="Leaf" size={48} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Садовая клубника от Бабушки Олеси
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Выращиваем с любовью экологически чистую клубнику в собственном саду. 
              Сезон 2024: июнь — август. Принимаем предзаказы!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-strawberry hover:bg-white/90 text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Предзаказ на сезон
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Icon name="MapPin" size={32} className="text-white mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Свой сад</h3>
                <p className="text-sm text-white/80">Выращиваем на собственном участке</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Icon name="Heart" size={32} className="text-white mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">С любовью</h3>
                <p className="text-sm text-white/80">Каждая ягодка выращена с заботой</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Icon name="Truck" size={32} className="text-white mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Доставка</h3>
                <p className="text-sm text-white/80">Привезем свежую клубнику к вам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О нашей клубнике */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">О нашей клубнике</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-garden-dark mb-6">История семейного дела</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Уже более 15 лет я, бабушка Олеся, выращиваю клубнику на своем участке. 
                  Начинала с небольших грядок для внуков, а теперь мой сад радует множество семей 
                  по всему городу.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Мы не используем химические удобрения - только натуральные подкормки, 
                  компост и много любви. Каждая ягодка проходит ручной отбор, 
                  поэтому к вам попадает только самая лучшая клубника.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-strawberry mb-2">15+</div>
                    <div className="text-sm text-gray-600">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-strawberry mb-2">4</div>
                    <div className="text-sm text-gray-600">сорта клубники</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-strawberry mb-2">100%</div>
                    <div className="text-sm text-gray-600">натурально</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-strawberry mb-2">500+</div>
                    <div className="text-sm text-gray-600">довольных семей</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden h-96">
                  <img 
                    src="/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg" 
                    alt="Садовый участок с клубникой" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Сорта и цены */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Наши сорта клубники</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Выращиваем четыре проверенных временем сорта, каждый со своим неповторимым вкусом
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {varieties.map((variety, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                  <CardHeader className="pb-4">
                    <div className="w-full h-32 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src="/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg" 
                        alt={`Клубника ${variety.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-garden-dark">{variety.name}</CardTitle>
                    <div className="text-2xl font-bold text-strawberry">{variety.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{variety.description}</p>
                    <Badge variant="secondary" className="bg-garden-light text-garden-dark">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {variety.season}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-strawberry hover:bg-strawberry-dark text-white">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Сделать заказ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Наш сад и ягоды</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src="/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg" 
                  alt="Свежие ягоды клубники в корзине"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src="/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg" 
                  alt="Садовый участок с клубникой"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src="/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg" 
                  alt="Спелые ягоды клубники крупным планом"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-strawberry-light rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full flex items-center justify-center text-strawberry">
                  <div className="text-center">
                    <Icon name="Image" size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-70">Фото 4</p>
                  </div>
                </div>
              </div>
              <div className="aspect-square bg-strawberry-light rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full flex items-center justify-center text-strawberry">
                  <div className="text-center">
                    <Icon name="Image" size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-70">Фото 5</p>
                  </div>
                </div>
              </div>
              <div className="aspect-square bg-strawberry-light rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full flex items-center justify-center text-strawberry">
                  <div className="text-center">
                    <Icon name="Image" size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-70">Фото 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Отзывы покупателей</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                    <div className="font-semibold text-garden-dark">{review.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Контакты и доставка */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Контакты и доставка</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-garden-dark mb-6">Как нас найти</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Icon name="MapPin" size={24} className="text-strawberry mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Адрес:</div>
                      <div className="text-gray-600">Московская область, г. Подольск, ул. Садовая, 15</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Phone" size={24} className="text-strawberry mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Телефон:</div>
                      <div className="text-gray-600">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Clock" size={24} className="text-strawberry mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Время работы:</div>
                      <div className="text-gray-600">Ежедневно с 8:00 до 20:00 (сезон)</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-garden-light/20 rounded-lg p-6">
                  <h4 className="font-semibold text-garden-dark mb-3">Способы связи:</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Звонок
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Send" size={16} className="mr-2" />
                      Telegram
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-garden-dark mb-6">Условия доставки</h3>
                <div className="space-y-6">
                  <Card className="border-0 bg-strawberry-light/30">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Icon name="Truck" size={24} className="text-strawberry mr-3" />
                        <h4 className="font-semibold text-garden-dark">Доставка по городу</h4>
                      </div>
                      <p className="text-gray-600 mb-2">Бесплатно при заказе от 1 кг</p>
                      <p className="text-sm text-gray-500">Доставка в течение дня заказа</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 bg-garden-light/20">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Icon name="Calendar" size={24} className="text-garden-dark mr-3" />
                        <h4 className="font-semibold text-garden-dark">Предзаказы</h4>
                      </div>
                      <p className="text-gray-600 mb-2">Принимаем заказы на следующий сезон</p>
                      <p className="text-sm text-gray-500">Скидка 10% при предоплате</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 bg-yellow-50">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Icon name="Star" size={24} className="text-yellow-600 mr-3" />
                        <h4 className="font-semibold text-garden-dark">Самовывоз</h4>
                      </div>
                      <p className="text-gray-600 mb-2">Приезжайте к нам в сад</p>
                      <p className="text-sm text-gray-500">Дегустация и выбор ягод на месте</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Рецепты */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Рецепты с нашей клубникой</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">Попробуйте эти простые и вкусные рецепты</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recipes.map((recipe, index) => (
                <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 bg-strawberry-light rounded-lg mb-4 flex items-center justify-center">
                      <Icon name="ChefHat" size={48} className="text-strawberry" />
                    </div>
                    <CardTitle className="text-xl text-garden-dark">{recipe.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {recipe.time}
                      </div>
                      <div className="flex items-center">
                        <Icon name="BarChart" size={14} className="mr-1" />
                        {recipe.difficulty}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Посмотреть рецепт
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-garden-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Садовая клубника от Бабушки Олеси</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Выращиваем с любовью натуральную клубнику уже более 15 лет. 
                Присоединяйтесь к нашей семье довольных покупателей!
              </p>
            </div>
            
            <Separator className="bg-gray-600 mb-8" />
            
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-sm text-gray-400">© 2024 Бабушка Олеся. Все права защищены.</p>
              </div>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Send" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}