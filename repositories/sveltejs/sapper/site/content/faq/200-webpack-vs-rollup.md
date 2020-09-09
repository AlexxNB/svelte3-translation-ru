---
question: С Sapper лучше использовать Webpack или Rollup?
---

Для Sapper мы предлагаем как шаблоны на основе Rollup, так и на Webpack. Если у вас нет веских причин предпочитать одно другому, мы рекомендуем использовать шаблон Rollup. Реализация Rollup поддерживает дополнительные функции, такие как улучшенный tree-shaking для небольших пакетов, возможность собирать [бандл для старых браузеров](../docs#Browser_support), а также автоматически перечисляет все ваши `.js` и`. css` в [заголовке `Link`](https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Link) для их [предзагрузки](https://developer.mozilla.org/ru/docs/Web/HTML/Link_types/preload).
