import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

  const services = [
    { icon: 'ShoppingCart', title: 'Розничные продажи', description: 'Свежая клубника для семьи' },
    { icon: 'Package', title: 'Оптовые поставки', description: 'Для магазинов и кафе' },
    { icon: 'Calendar', title: 'Предзаказы', description: 'Забронируйте урожай заранее' },
    { icon: 'Truck', title: 'Доставка', description: 'Привезем в день заказа' }
  ];

  const advantages = [
    { icon: 'Leaf', title: 'Экологично', description: 'Без химических удобрений' },
    { icon: 'Heart', title: 'С любовью', description: 'Каждая ягодка отобрана вручную' },
    { icon: 'Award', title: '15+ лет опыта', description: 'Проверенные временем методы' },
    { icon: 'Users', title: '500+ клиентов', description: 'Довольных покупателей' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* 1. Герой-секция */}
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
              <Link to="/catalog">
                <Button size="lg" className="bg-white text-strawberry hover:bg-white/90 text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
              </Link>
              <Link to="/preorders">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Предзаказ на сезон
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {advantages.slice(0, 3).map((advantage, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Icon name={advantage.icon} size={32} className="text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-sm text-white/80">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. О нашей клубнике */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
                  {advantages.map((advantage, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-strawberry mb-2">
                        {advantage.title.includes('15+') ? '15+' : 
                         advantage.title.includes('500+') ? '500+' : 
                         advantage.title.includes('100%') ? '100%' : '4'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {advantage.title.includes('15+') ? 'лет опыта' : 
                         advantage.title.includes('500+') ? 'довольных семей' : 
                         advantage.title.includes('100%') ? 'натурально' : 'сорта клубники'}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link to="/about">
                    <Button className="bg-strawberry hover:bg-strawberry-dark">
                      Узнать больше о нас
                    </Button>
                  </Link>
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

      {/* 3. Наши услуги */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Наши услуги</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Предлагаем широкий спектр услуг для всех любителей свежей клубники
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-strawberry-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={service.icon} size={32} className="text-strawberry" />
                    </div>
                    <CardTitle className="text-xl text-garden-dark">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Сорта и цены */}
      <section className="py-20 bg-white">
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
              <Link to="/varieties">
                <Button size="lg" className="bg-strawberry hover:bg-strawberry-dark text-white mr-4">
                  Все сорта
                </Button>
              </Link>
              <Link to="/prices">
                <Button size="lg" variant="outline">
                  Прайс-лист
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Процесс выращивания */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Как мы выращиваем клубнику</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: 'Sprout', title: 'Посадка', description: 'Высаживаем рассаду в подготовленную почву' },
                { icon: 'Droplets', title: 'Уход', description: 'Регулярный полив и натуральные подкормки' },
                { icon: 'Sun', title: 'Созревание', description: 'Ягоды созревают под теплым солнцем' },
                { icon: 'Hand', title: 'Сбор', description: 'Ручной сбор только спелых ягод' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-strawberry rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-garden-dark mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/growing-process">
                <Button className="bg-garden-dark hover:bg-garden text-white">
                  Подробнее о процессе
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Галерея */}
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
            </div>
            
            <div className="text-center mt-12">
              <Link to="/gallery">
                <Button className="bg-strawberry hover:bg-strawberry-dark">
                  Посмотреть все фото
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Отзывы */}
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
            
            <div className="text-center mt-12">
              <Link to="/reviews">
                <Button className="bg-strawberry hover:bg-strawberry-dark">
                  Все отзывы
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Сезонная информация */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Сезон клубники 2024</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Май - Июнь
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600">Ранние сорта: Клери, Альба</p>
                  <p className="text-sm text-gray-600 mt-2">Первые ягоды сезона, особенно ароматные</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <Icon name="Sun" size={20} className="mr-2" />
                    Июль - Август
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600">Основной сезон: Виктория, Мальвина</p>
                  <p className="text-sm text-gray-600 mt-2">Пик урожая, самые сладкие ягоды</p>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700 flex items-center">
                    <Icon name="Leaf" size={20} className="mr-2" />
                    Сентябрь
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-600">Ремонтантные: Альбион</p>
                  <p className="text-sm text-gray-600 mt-2">Второй урожай, для заготовок</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/season-calendar">
                <Button className="bg-garden-dark hover:bg-garden">
                  Календарь сезона
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Рецепты и применение */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Рецепты с нашей клубникой</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">Попробуйте эти простые и вкусные рецепты</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Клубничное варенье', time: '45 мин', difficulty: 'Легко', category: 'Заготовки' },
                { name: 'Клубничный пирог', time: '1.5 часа', difficulty: 'Средне', category: 'Выпечка' },
                { name: 'Клубничный смузи', time: '5 мин', difficulty: 'Очень легко', category: 'Напитки' }
              ].map((recipe, index) => (
                <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 bg-strawberry-light rounded-lg mb-4 flex items-center justify-center">
                      <Icon name="ChefHat" size={48} className="text-strawberry" />
                    </div>
                    <CardTitle className="text-xl text-garden-dark">{recipe.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{recipe.category}</Badge>
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
            
            <div className="text-center mt-12">
              <Link to="/recipes">
                <Button className="bg-strawberry hover:bg-strawberry-dark">
                  Все рецепты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Контакты и призыв к действию */}
      <section className="py-20 bg-strawberry text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы попробовать нашу клубнику?</h2>
            <p className="text-xl mb-8 text-white/90">
              Свяжитесь с нами прямо сейчас и закажите свежую клубнику с доставкой
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Icon name="Phone" size={32} className="text-white mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Позвоните</h3>
                <p className="text-white/80">+7 (999) 123-45-67</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Icon name="MessageCircle" size={32} className="text-white mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-white/80">Быстрые ответы</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Icon name="MapPin" size={32} className="text-white mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Приезжайте</h3>
                <p className="text-white/80">ул. Садовая, 15</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacts">
                <Button size="lg" className="bg-white text-strawberry hover:bg-white/90 text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </Link>
              <Link to="/catalog">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Перейти в каталог
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}