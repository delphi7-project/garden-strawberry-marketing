import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function About() {
  const timeline = [
    { year: '2009', event: 'Начало пути', description: 'Посадили первые грядки клубники для внуков' },
    { year: '2012', event: 'Расширение', description: 'Увеличили площадь до 0.5 га, начали продавать соседям' },
    { year: '2015', event: 'Сертификация', description: 'Получили сертификат экологически чистой продукции' },
    { year: '2018', event: 'Новые сорта', description: 'Добавили ремонтантные сорта для продления сезона' },
    { year: '2021', event: 'Доставка', description: 'Запустили службу доставки по городу' },
    { year: '2024', event: 'Сегодня', description: 'Более 500 довольных клиентов, 4 сорта клубники' }
  ];

  const team = [
    {
      name: 'Олеся Петровна',
      role: 'Основатель и главный агроном',
      experience: '15+ лет',
      description: 'Вся моя жизнь связана с землей. Выращиваю клубнику с особой любовью и заботой.',
      image: '/img/43178f6f-a641-41af-b728-7b2bd41eb50e.jpg'
    },
    {
      name: 'Михаил',
      role: 'Помощник по уходу за садом',
      experience: '8 лет',
      description: 'Отвечаю за полив, прополку и подготовку почвы. Знаю каждую грядку.',
      image: '/img/77f1978b-89e3-4349-8489-a4f35d5d906d.jpg'
    },
    {
      name: 'Анна',
      role: 'Менеджер по продажам',
      experience: '3 года',
      description: 'Помогаю клиентам выбрать лучшую клубнику и организую доставку.',
      image: '/img/edef60eb-97b2-4379-bb00-9b38dc14bc41.jpg'
    }
  ];

  const values = [
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Используем только натуральные удобрения и органические методы защиты растений'
    },
    {
      icon: 'Heart',
      title: 'Любовь к делу',
      description: 'Каждая ягодка выращена с душой и проходит тщательный отбор'
    },
    {
      icon: 'Users',
      title: 'Семейные ценности',
      description: 'Наше дело передается из поколения в поколение'
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Никогда не идем на компромиссы в вопросах качества продукции'
    }
  ];

  const achievements = [
    { number: '15+', label: 'лет опыта' },
    { number: '500+', label: 'довольных клиентов' },
    { number: '4', label: 'сорта клубники' },
    { number: '100%', label: 'натуральная продукция' },
    { number: '2', label: 'га садовых участков' },
    { number: '0', label: 'химических удобрений' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Герой-секция */}
      <section className="relative py-20 bg-gradient-to-br from-garden-light to-garden text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">О нас</h1>
            <p className="text-xl mb-8 text-white/90">
              История семейного дела, которое началось с любви к земле и желания 
              делиться натуральными продуктами с людьми
            </p>
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                <Icon name="Users" size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Наша история</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Путь от небольших грядок для внуков до процветающего семейного бизнеса, 
                который радует сотни семей свежей и вкусной клубникой
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-strawberry-light"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="bg-white border-strawberry-light hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge className="bg-strawberry text-white">{item.year}</Badge>
                            <CardTitle className="text-garden-dark">{item.event}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-strawberry rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Наша команда</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Люди, которые с любовью выращивают для вас лучшую клубнику
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-garden-dark">{member.name}</CardTitle>
                    <p className="text-strawberry font-semibold">{member.role}</p>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      Опыт: {member.experience}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 italic">"{member.description}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Наши ценности</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-strawberry-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={value.icon} size={32} className="text-strawberry" />
                  </div>
                  <h3 className="text-xl font-bold text-garden-dark mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="py-20 bg-strawberry text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Наши достижения</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-xl text-white/90">
                Цифры, которые говорят о нашем опыте и качестве
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-white/80">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Сертификаты и награды */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-garden-dark mb-6">Сертификаты и награды</h2>
              <div className="w-24 h-1 bg-strawberry mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Сертификат экологической чистоты',
                  year: '2015',
                  description: 'Подтверждает отсутствие химических удобрений и пестицидов'
                },
                {
                  title: 'Лучший производитель года',
                  year: '2020',
                  description: 'Награда от ассоциации садоводов Московской области'
                },
                {
                  title: 'Качество продукции',
                  year: '2023',
                  description: 'Сертификат соответствия ГОСТ для ягодной продукции'
                }
              ].map((cert, index) => (
                <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" size={32} className="text-yellow-600" />
                    </div>
                    <CardTitle className="text-garden-dark">{cert.title}</CardTitle>
                    <Badge className="bg-strawberry text-white w-fit mx-auto">{cert.year}</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-garden-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Присоединяйтесь к нашей семье</h2>
            <p className="text-xl mb-8 text-white/90">
              Станьте частью истории семейного дела и наслаждайтесь 
              натуральной клубникой, выращенной с любовью
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="bg-strawberry hover:bg-strawberry-dark text-lg px-8">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать клубнику
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}