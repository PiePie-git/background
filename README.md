# 課程計畫
1. 建置React專案、工程目錄解說
2. BEM DESIGN PATTERN
3. useState, useReact對應生命週期
4. Router應用配套Axios
5. useContext模擬redux
6. Ant. Design （1） 簡介
7. Ant. Design (2) 登入頁結合Menu
8. Code review 6&7
9. 履歷健檢
10. 模擬面試


# 2024/06/06
1. 建立工程目錄

- src

-- assets
--- images
--- styles
---- .scss
---- .sass

-- components
--- common
--- Modules

-- containers(pages)
-- layout
-- constants (裡面變數以大寫為主)
-- utils (大小寫看團隊)
-- services (api)
-- router
-- store
-- i18n
-- hooks
--- options

2. 是否需要Alias
3. 是否需要esiint, prettier
4. SSR(SSR + CSR), SSG, CSR
5. JSX

6. 配合ant.design, router, 依照上面做



# prettier
1.	printWidth: 設置每行的最大長度，默認是 80。
2.	tabWidth: 設置每個 tab 的空格數，默認是 2。
3.	useTabs: 使用 tab 替代空格縮進，默認是 false。
4.	semi: 在語句末尾添加分號，默認是 true。
5.	singleQuote: 使用單引號而不是雙引號，默認是 false。
6.	trailingComma: 多行結構的尾隨逗號。選項包括 “none”、“es5”、“all”。
7.	bracketSpacing: 在物件字面量的大括號之間加上空格，默認是 true。
8.	jsxBracketSameLine: 把 JSX 的閉合括號放在最後一行的末尾，而不是單獨放在下一行，默認是 false。
9.	arrowParens: 箭頭函數只有一個參數時是否使用括號。選項包括 “always” 和 “avoid”。