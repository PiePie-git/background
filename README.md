# 課程計畫

1. 建置React專案、工程目錄解說
2. BEM DESIGN PATTERN
3. Router應用配套Axios
4. useState, useReact對應生命週期
5. useContext模擬redux
6. Ant. Design（1） 簡介
7. Ant. Design (2) 登入頁結合Menu
8. Code review 6&7
9. 履歷健檢
10. 模擬面試

# 2024/06/06

1. 建立工程目錄
2. 是否需要Alias
3. 是否需要eslint, prettier
4. SSR(SSR + CSR), SSG, CSR
5. JSX
6. 配合ant.design, router, 依照上面做

# 2024/06/17

1. .nvmrc precommit prepush
2. css選擇器 BEM
3. constants(放置常量變數) hooks(鉤子函數，會自動重新渲染) util(簡單的小function放這裡)
4. 後台 router配置, seacrh form, list新刪修

# 2024/06/23

1. constants & util 檔案可小寫，其他大寫
2. RouteMapping 裡面只 import pages 裡的東西
3. suspense lazy
4. hashrouter browsingrouter htccess
5. login 登入用router帶token到下一頁
6. 把menu要做的項目先完成，下次上課可以用直接做右下
7. 把router加上auth

# 目錄架構

- `api/`：存放與後端 API 交互的代碼，比如 API 請求函數和相關的配置文件。(service)
- `assets/`：存放靜態資源文件，如圖片和樣式。
  - `images/`：存放項目中的圖片資源。
  - `styles/`：存放全局的樣式文件。
    - `index.scss`：主樣式文件，匯總和導入其他 SCSS 文件。
- `components/`：存放 React 組件。
  - `common/`：存放通用的、可重用的組件。
  - `Modules/`：存放特定功能模塊的組件。
- `constants/`：存放應用程序中的常量值，如配置參數、靜態數據等，變數以大寫為主。
- `hooks/`：存放自定義的 React hooks。
  - `options/`：特定選項的 hooks。
- `i18n/`：存放國際化相關的文件和配置，使用 i18n 進行多語言支持。
- `layout/`：存放佈局相關的組件，管理應用程序的佈局結構。
- `pages/`：存放各個頁面組件。(containers)
  - `Home.jsx`
  - `About.jsx`
- `router/`：存放路由設定文件。
  - `index.jsx`：應用程式的主要路由設定。
- `store/`：存放應用狀態管理相關的文件，通常與 Redux 或其他狀態管理庫一起使用。
- `utils/`：存放實用工具函數和輔助代碼，大小寫看團隊。

# prettier

1. printWidth: 設置每行的最大長度，默認是 80。
2. tabWidth: 設置每個 tab 的空格數，默認是 2。
3. useTabs: 使用 tab 替代空格縮進，默認是 false。
4. semi: 在語句末尾添加分號，默認是 true。
5. singleQuote: 使用單引號而不是雙引號，默認是 false。
6. trailingComma: 多行結構的尾隨逗號。選項包括 “none”、“es5”、“all”。
7. bracketSpacing: 在物件字面量的大括號之間加上空格，默認是 true。
8. jsxBracketSameLine: 把 JSX 的閉合括號放在最後一行的末尾，而不是單獨放在下一行，默認是 false。
9. arrowParens: 箭頭函數只有一個參數時是否使用括號。選項包括 “always” 和 “avoid”。
