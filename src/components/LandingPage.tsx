
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle, ArrowRight, Star } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Навигация */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="font-bold text-2xl text-blue-600">BrandName</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Главная</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Возможности</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Отзывы</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Контакты</a>
          </div>
          <div>
            <Button variant="link" className="text-blue-600">Войти</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Регистрация</Button>
          </div>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Лучшее решение для вашего бизнеса</h1>
            <p className="text-xl mb-8 text-blue-100">Мы предлагаем инновационные продукты, которые помогут вашему бизнесу расти и развиваться.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Начать бесплатно <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Работа в команде" 
                className="rounded-md mb-6"
              />
              <div className="text-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Повышение эффективности</h3>
                  <span className="text-blue-600 flex items-center">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
                <p className="text-gray-600 mb-4">Оптимизируйте рабочие процессы и увеличьте производительность.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Мы предлагаем широкий спектр функций, которые сделают ваш бизнес более успешным</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Интуитивный интерфейс", 
                desc: "Простой в использовании интерфейс, который не требует специальных навыков." 
              },
              { 
                title: "Мощная аналитика", 
                desc: "Получайте детальные отчеты и аналитику для принятия обоснованных решений." 
              },
              { 
                title: "Интеграции", 
                desc: "Легко интегрируется с популярными сервисами и инструментами." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-6">
                  <CheckCircle className="text-blue-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Наши клиенты довольны сотрудничеством с нами. Вот что они говорят о нашем продукте</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Иван Петров", 
                company: "ООО 'Технологии'", 
                text: "Этот продукт значительно упростил наши бизнес-процессы. Мы экономим время и ресурсы." 
              },
              { 
                name: "Анна Смирнова", 
                company: "ИП Смирнова", 
                text: "Я очень довольна сервисом. Техподдержка всегда оперативно отвечает на вопросы." 
              },
              { 
                name: "Сергей Иванов", 
                company: "ЗАО 'Прогресс'", 
                text: "Мы используем этот продукт уже более года и видим значительный рост эффективности." 
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-full w-12 h-12 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">Присоединяйтесь к тысячам компаний, которые уже используют наш продукт для развития своего бизнеса.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BrandName</h3>
              <p className="text-gray-400">Инновационные решения для вашего бизнеса</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Функции</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Цены</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Интеграции</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Документация</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Блог</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Обучение</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">info@brandname.com</li>
                <li className="text-gray-400">+7 (800) 123-45-67</li>
                <li className="text-gray-400">г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 BrandName. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Условия использования</a>
              <a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
