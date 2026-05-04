# 達摩媒體 — 文章管理

## 資料夾結構

```
articles/
├── 01-脆行銷有效的原因/
│   ├── content.md          ← 文章內容（Markdown + frontmatter）
│   └── images/             ← 該篇文章的圖片
│       └── hero.jpg
├── 02-下一篇文章標題/
│   ├── content.md
│   └── images/
└── ...
```

## 新增文章步驟

1. 在 `articles/` 下建立新資料夾，格式：`編號-文章標題/`
2. 建立 `content.md`，填寫 frontmatter（title, date, author, reading_time, hero_image）
3. 把圖片放進 `images/` 資料夾
4. 複製 `article-detail1.html` 作為模板，替換內容
