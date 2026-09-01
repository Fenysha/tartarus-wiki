# Tartarus Wiki

Вики сервера Tartarus Project.
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🚀 Быстрый запуск

```bash
cd "..\tartarus-wiki"
npm install
npm run dev
```
Открой `http://localhost:3000` в браузере.

## 📝 Добавление документов

Любой может предложить изменения через GitHub:

1. Создай форк репозитория
2. Создай ветку с описанием изменений
3. Отправь Pull Request и ожидай принятия

Документы хранятся в `/src/content/docs/` в формате Markdown/MDX.

## 📁 Структура Вики

```
src/
├── content/docs/       # Все документы
├── components/         # Компоненты для отображения
├── assets/             # Изображения и медиа
└── styles/             # CSS стили
```


После этого откройте:

```text
http://localhost:3001/
```

## Схема хранения файлов

```text
/docs/
/docs/registry/
/docs/protocols/
/docs/some_docs/...
```
Так же, не забывайте создавать перевод файлов на английский язык. Перевода хранятся с тем же путем, но

```text
/docs/en/
/docs/en/registry/
/docs/en/protocols/
/docs/en/some_docs/...
```


## Команды для сборки

```bash
npm run dev
npm run build
npm run preview
npm run docs:new -- lore "Название" "Описание"
npm run docs:verify
npm run auth:demo
```
