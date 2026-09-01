#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const [, , sectionArg, titleArg, descriptionArg] = process.argv;
const section = sectionArg || 'guides';
const title = titleArg || 'Новый документ';
const description = descriptionArg || 'Краткое описание документа.';

const docsRoot = path.resolve(process.cwd(), 'src/content/docs');
const targetDir = path.join(docsRoot, section);

fs.mkdirSync(targetDir, { recursive: true });

const slug = title
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

const filePath = path.join(targetDir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`Файл уже существует: ${path.relative(process.cwd(), filePath)}`);
  process.exit(1);
}

const content = `---
title: ${title}
description: ${description}
---

# ${title}

Здесь можно быстро описать важную информацию, лор-деталь, сюжетный момент или правила сервера.

## Введение

Опишите контекст страницы и то, зачем она нужна читателю.

## Основные пункты

- Первый пункт
- Второй пункт
- Третий пункт

## Дополнительно

Добавьте ссылки, цитаты, тайные детали или заметки по геймплейной логике.
`;

fs.writeFileSync(filePath, content, 'utf-8');

console.log(`Создан документ: ${path.relative(process.cwd(), filePath)}`);
console.log('Использование: npm run docs:new -- <section> "<title>" "<description>"');
console.log('Пример: npm run docs:new -- lore "Новая эпоха" "Описание новой эпохи мира"');
