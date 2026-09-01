#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(process.cwd(), 'src/content/docs');

function walk(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = walk(docsRoot);
const total = files.length;

console.log(`Найдено документов: ${total}`);
for (const file of files) {
  const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');
  console.log(`- ${rel}`);
}

if (total === 0) {
  console.warn('Документы не найдены. Добавьте страницы в src/content/docs/.');
  process.exit(1);
}

console.log('Проверка структуры документации завершена.');
