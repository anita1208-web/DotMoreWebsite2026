# 達摩媒體 — 案例管理

## 資料夾結構

```
cases/
├── 01-爭鮮gogo/
│   ├── content.md          ← 案例內容（Markdown + frontmatter）
│   └── images/             ← 該案例的圖片（hero、gallery 等）
│       ├── hero.jpg
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       └── gallery-3.jpg
├── 02-下一個案例/
│   ├── content.md
│   └── images/
└── ...
```

## 新增案例步驟

1. 在 `cases/` 下建立新資料夾，格式：`編號-案例名稱/`
2. 建立 `content.md`，填寫 frontmatter（title, client, scope, hero_image）
3. 把圖片放進 `images/` 資料夾
4. 複製 `cases-detail1.html` 為新檔案（如 `cases-detail2.html`），替換內容
5. 在 `cases.html` 列表頁新增連結
