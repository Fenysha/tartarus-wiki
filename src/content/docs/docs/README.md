---
title: Документная база
description: Руководство по оформлению новых документов
---

[in development] Add your content via GitHub!
---
```

Далее в начале самого текста желательно указывать:

- уровень секретности;
- угрозу;
- путь документа;
- краткую сводку.

## Рекомендованный шаблон

```md
<div class="doc-header">
  <div class="doc-header-item">
    <span>Уровень секретности</span>
    <strong>Классификация D</strong>
  </div>
  <div class="doc-header-item">
    <span>Угроза</span>
    <strong>Низкая</strong>
  </div>
  <div class="doc-header-item">
    <span>Путь</span>
    <strong>/docs/example/</strong>
  </div>
</div>
```

## Принцип хранения

Пути хранятся в формате:

```text
/docs/some_docs/...
```

Это даёт гибкость для дальнейшей миграции в более сложную систему структуры данных.
