![Deploy status](https://github.com/d-rusakov-wp/perf/actions/workflows/deploy.yml/badge.svg?branch=main&event=push)

<img src="./themes/tw/images/logo.png" width="100" height="100" alt="Логотип" title="Логотип">

# Доклад: «Семь раз отмерь, один раз оптимизируй»

📖 [Структура](./docs/structure.md)

## 🐱‍💻 Команды

> Все команды запускаются из корня проекта

| Наименование                   | Действие                                  |
| :----------------------------- | :---------------------------------------- |
| `npm ci`                       | Установить зависимости                    |
| `npm run dev`                  | Запустить локальный сервер                |
| `npm run format`               | Отформатировать файлы по style-гайду      |
| `npm run build`                | Собрать bundle                            |
| `npm run publish`              | Опубликовать код в GithubPages            |
| `npm run tw:watch`             | Запустить отслеживание стилей TailwindCSS |
| `npm run tw:build`             | Собрать bundle для стилей TailwindCSS     |
| `npm run search-unused-images` | Найти неиспользованные изображения        |

## 🌿 Ветки

| Имя        | Описание                                                             |
| :--------- | :------------------------------------------------------------------- |
| `main`     | основная                                                             |
| `gh-pages` | для публикации в `GithubPages` (обновляется через `npm run publish`) |

### Powered by [Shower](https://github.com/shower/shower)
