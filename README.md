<p align="center">
  <img alt="Школа Анализа Данных" src="./shad.png" width="60" />
</p>
<h1 align="center">
  Учебник по машинному обучению «Школы Анализа Данных»
</h1>

## 🚀 Как работать с проектом?

1. **Склонируйте репозиторий.**

    ```shell
    git clone git@github.com:yandexdataschool/ML-Handbook.git
    ```

2. **Запустите локально.**

    Перейдите в каталог сайта и запустите его.

    ```shell
    cd ml-handbook/
    npm run develop
    ```

3. **Откройте редактор и начните работу!**

    Сайт теперь работает на http://localhost:8000!

    Отредактируйте любой файл в папке `./src` чтобы видеть обновление сайта в режиме реального времени!


4. **Работа с контентом**

    Контент страниц находится в папке `./src/pages/chapters/*` и повторяет такую же структуру для страниц сайта.
    Т.е., например, страница из `./src/pages/chapters/intro.mdx` будет доступна по адресу
   `http://localhost:8000/chapters/intro`.

    Или, например, `./src/pages/chapters/ansamblees/intro.mdx` будет доступна по адресу
   `http://localhost:8000/chapters/ansamblees/intro`.

    Файлы должны иметь расширение `*.mdx`. MDX – это расширенный формат для маркдауна.
    Он позволяет использовать интерактивные (`React`) компоненты прямо внутри маркдаун разметки.
    Это упрощает работу с содержимым. Инструкция по тому, какие компоненты можно использовать внутри MDX будет чуть
   позже.

    В начале каждого MDX-файла есть раздел, который называется frontmatter:
    ```
    ---
    title: Ансамбли в машинном обучении
    author: pavel_gubko
    ---
    ```
    В нём мы указываем название и автора. Позже появится еще изображение. Содержание статьи будет строиться на
   основе заголовков.

    В остальном — это самый обычный markdown.

    Так как сейчас подключен Netlify, то при создании PR автоматически собирается превью того, что было сделано.
    Рекомендую использовать эту возможность, создавать ветки из `develop` и делать PR на каждую ветку.
    После merge в `develop` или `main` на Github – автоматически происходит сборка проекта и его деплой.

    Чтобы получить доступ к превью каждого PR – запросите доступ к Netlify у Дарьи Данилюк или Анастасии Павловской.


5. **Документация к Gatsby**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
