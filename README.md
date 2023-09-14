# Tarotto

Additional dependencies required for this project:
+ `yarn add sass react-router-dom react-responsive`
+ `yarn add classnames`
+ `yarn add @dnd-kit/core`
+ `yarn add react-hot-toast`
+ `yarn add @dnd-kit/sortable`
+ `yarn react-icons`

# Todo

+ ~~新增控制台开发者模式~~
+ ~~使用合适的SCSS~~
+ 尝试部署静态
+ 增加代码主题颜色套件

### 项目文件结构

```
tarotto
├─ .eslintrc.cjs
├─ .gitignore
├─ ForGPT.txt
├─ README.md
├─ index.html
├─ package.json
├─ public
├─ src
│  ├─ assets
│  │  └─ defaultAvatar.png
│  ├─ components
│  │  ├─ Draggable.jsx
│  │  └─ Droppable.jsx
│  ├─ contexts
│  │  ├─ ContextInterface.jsx
│  │  ├─ DivinationInfoContext.jsx
│  │  ├─ InitialValue.jsx
│  │  ├─ ItemInfoContext.jsx
│  │  ├─ StaticValue.jsx
│  │  └─ UserInfoContext.jsx
│  ├─ displays
│  │  ├─ DivinationInfoDisplay.jsx
│  │  ├─ ItemInfoDisplay.jsx
│  │  └─ UserInfoDisplay.jsx
│  ├─ interfaces
│  ├─ main.jsx
│  ├─ routes
│  │  ├─ BASE.scss
│  │  ├─ CONSTANT.scss
│  │  ├─ Divination.jsx
│  │  ├─ Divination.scss
│  │  ├─ ErrorPage.jsx
│  │  ├─ Index.jsx
│  │  ├─ Root.jsx
│  │  └─ Root.scss
│  └─ utilities
└─ vite.config.js

```