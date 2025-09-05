import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  const quickLinks = [
    { name: 'О нас', href: '/about' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Сорта', href: '/varieties' },
    { name: 'Цены', href: '/prices' },
    { name: 'Доставка', href: '/delivery' },
    { name: 'Отзывы', href: '/reviews' }
  ];

  const services = [
    { name: 'Предзаказы', href: '/preorders' },
    { name: 'Оптовые продажи', href: '/wholesale' },
    { name: 'Консультации', href: '/consultation' },
    { name: 'Мастер-классы', href: '/workshops' },
    { name: 'Экскурсии', href: '/tours' },
    { name: 'Рецепты', href: '/recipes' }
  ];

  return (
    <footer className="bg-garden-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-strawberry rounded-full flex items-center justify-center">
                <Icon name="Leaf" size={16} className="text-white" />
              </div>
              <div className="font-bold">Бабушка Олеся</div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Выращиваем натуральную клубнику с любовью уже более 15 лет. 
              Каждая ягодка проходит ручной отбор.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                <Icon name="Phone" size={16} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                <Icon name="MessageCircle" size={16} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                <Icon name="Send" size={16} />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                <Icon name="Mail" size={16} />
              </Button>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="text-strawberry mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  Московская область,<br />
                  г. Подольск, ул. Садовая, 15
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-strawberry flex-shrink-0" />
                <div className="text-gray-300">+7 (999) 123-45-67</div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-strawberry flex-shrink-0" />
                <div className="text-gray-300">8:00 - 20:00 ежедневно</div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-strawberry flex-shrink-0" />
                <div className="text-gray-300">olesya@strawberry.ru</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-600 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 sm:mb-0">
            © 2024 Садовая клубника от Бабушки Олеси. Все права защищены.
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}