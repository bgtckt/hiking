# Hiking Life
Учебный проект для портфолио соискателя на должность **junior frontend developer**.<br>Представляет собой интерфейс сайта компании, организующей пешие туры.
___
## Особенности разработки
1. Разметка выполнена согласно ***методологии БЭМ***;
2. Применена ***адаптивная верстка***;
3. Файлы стилей написаны с использованием  ***препроцессора LESS***;
4. Скрипты реализованы с соблюдением ***модульного подхода***;
5. Разработка производилась при помощи ***таск-менеджера Gulp***;
6. С целью улучшения производительности выполнено следующее:
   - минификация *.сss* и *.js* файлов;
   - сжатие изображений без потери качества;
   - предварительная загрузка шрифтов.
7. В процессе разработки производилась работа с ***GIT*** через консоль:
   - создание репозитория;
   - работа в отдельной ветке для каждой крупной задачи;
   - сохранение изменений в удаленном репозитории.
8. При разработке использован фреймворк ***Vue.js***.
___
## Особенности проекта
1. Сеточные элементы выполнены с иcпользованием flex-контейнеров;
2. В разметке использованы Vue-компоненты с применением<br> Vue-директив для реализации повторяющихся элементов;
3. Данные для элементов раздела "resources" внесены в соответствующие<br> JSON-файлы;
4. Загрузка элементов раздела "resources" происходит по fetch-запросу<br> к удаленному хостингу с JSON-файлами;
5. Раздел "gallery" выполнен с применением Retina-ready подхода.
6. Написаны скрипты для реализации следующего функционала:
   - навигация при помощи главного меню;
   - открытие/закрытие главного меню в мобильной версии;
   - слайдер для выбора уровня навыков;
   - загрузка данных с удаленного хостинга и отрисовка элементов на странице;
   - слайдер для переключения между элементами разделов;
   - открытие/закрытие popup-окон.
___
## Сборка и запуск
1. Установить [Node.js](https://nodejs.org/en/)
2. Установить Gulp: `npm install --global gulp-cli`
3. Установить все необходимые пакеты (в корне проекта): `npm i`
4. Инициализировать сборку и запуск проекта: `gulp`
___
![alt text](/source/img/hiking_screencast.gif?raw=true)
