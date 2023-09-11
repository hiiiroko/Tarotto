# Tarotto

Additional dependencies required for this project:
+ `yarn add sass react-router-dom react-responsive`

Todo:
+ ~~构建dnd-kit组件~~
+ ~~新增卡牌数据结构~~
+ ~~新增控制台开发者模式~~
+ ~~使用合适的SCSS~~
+ 尝试部署静态
+ 增加代码主题颜色套件
+ 优化代码风格

### 近期安装的新库

+ yarn add classnames
+ yarn add @dnd-kit/core
+ yarn add react-hot-toast
+ yarn add @dnd-kit/sortable

### ~~待解决的问题~~

```
(node:10768) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [TLSSocket]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
```

如果是由于使用了过多createContext导致的，可以考虑换用localStorage。

结论：这个警告可能和网络连接有关。有些人报告说，当他们的网络速度很慢或者不稳定时，yarn就会认为有网络问题，并重试下载依赖包。这可能导致事件监听器的堆积，从而触发这个警告。

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