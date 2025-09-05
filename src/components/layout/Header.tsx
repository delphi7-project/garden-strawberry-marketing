import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Сорта', href: '/varieties' },
    { name: 'Цены', href: '/prices' },
    { name: 'Доставка', href: '/delivery' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Контакты', href: '/contacts' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-strawberry rounded-full flex items-center justify-center">
              <Icon name="Leaf" size={20} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-garden-dark">Бабушка Олеся</div>
              <div className="text-xs text-gray-600">Садовая клубника</div>
            </div>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-strawberry text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Кнопки действий */}
          <div className="flex items-center space-x-2">
            <Button size="sm" className="hidden sm:flex bg-strawberry hover:bg-strawberry-dark">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
            
            {/* Мобильное меню */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-left transition-colors ${
                        isActive(item.href)
                          ? 'bg-strawberry text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button className="w-full bg-strawberry hover:bg-strawberry-dark">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать звонок
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}