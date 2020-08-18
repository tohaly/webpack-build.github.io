# Музей для каждого

Version: v.0.0.1

_COVID 19 Сейчас проект заморожен в связи с пандемией._

## Описание Проекта
Промо лэндинг, для всероссийской акции "Музей для всех".
Данный проект был сделан в рамках благотворительного конкурса, был отобран лучшим, и опубликован в сети. Ссылка на проект http://xn--b1adccgnpd5cn4a0j.xn--p1ai/ .

## Ссылка на проект gh-pages
https://tohaly.github.io/museum-for-everyone.github.io/

## Что было сделанно
- Верстка по макету `figma` с использованием `HTML`, `CSS`, `БЭМ`;
- Логика: `JavaScript`;
- Настроен вебпак:
    - html: `HtmlWebpackPlugin`;
    - обработка css: `css-loader`, `style-loader`, `postcss-loader`, `autoprefixer`, `cssnano`, `mini-css-extract-plugin`;
    - обработка изображений: `file-loader`, `image-webpack-loader`;
    - обработка шрифтов: `file-loader`;
    - сборка JS: `babel`;
- Кодстайлинг: `prettier`, `eslint`, `airbnb/base`;
- Реализован собственный счетчик дней:);
- Слайдер сделан при помощи утилиты [Tiny slider](https://github.com/ganlanyuan/tiny-slider);
- Скрол рализован при помощи [scroll-to-element](https://github.com/willhoag/scroll-to-element);

## Использование

### Локальный запуск проекта
1. Склонировать репозиторий
    ```
        git clone https://github.com/tohaly/museum-for-everyone.github.io.git
    ```
2. Доставить отсутствющие модули npm
    ```
        npm i
    ```
3. Запустить локальный сервер
    ```
        npm run dev
    ```

### Публикация на GitHub Pages

1. Сделать форк проекта
2. Склонировать репозиторий
3. Доставить отсутствующие модули npm
   ```
       npm i
   ```
4. Собрать проект
   ```
       npm run build
   ```
5. Запушить собранный проект на GitHub
   ```
       npm run deploy
   ```
   
### Публикация на GitHub Pages
1. Сделать форк проекта
2. Склонировать репозиторий
    ```
        git clone https://github.com/tohaly/museum-for-everyone.github.io.git
    ```
3. Доставить отсутствующие модули npm
    ```
        npm i
    ```
4. Собрать проект
    ```
        npm run build
    ```
5. Запушить собранный проект на GitHub
    ```
        npm run deploy
    ```

### Внесение изменений
1. При необходимости, после внесения изменений, запустить тестирование
    ```
        npm run eslint
    ```
2. Для автоматического исправления можно воспользоваться командой:
    ```
        npm run eslintFix
    ```

## В планах

- [ ] Наполнение новостями;
- [ ] Добавить раздел с афишей;
