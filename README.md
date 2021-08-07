# 開始專案

## 執行專案:
```npm start```

## 建置專案:
```npm run build```

---

# 專案學習

## 前置作業

### NodeJS: [GO](https://nodejs.org/en/)
### VSCode: [GO](https://code.visualstudio.com/)
### 建立基本React專案套件create-react-app:
***<font color=red>指令部分都是使用VSCode的Terminal操作</font>***
```
npm install -g create-react-app
```
### Router react-router-dom: 
```
npm install react-router-dom
```
### 讀取Router設定檔套件 react-router-config: 
```
npm install react-router-config
```

---

## 開始使用

### 建置專案:
```
create-react-app react-side
```

 ### ***<font color=red>若出現因為這個系統上已停用指令碼執行:</font>***
1. 對windows點擊右鍵Windows PowerShell(系統管理員)
2. 輸入: 
```
Set-ExecutionPolicy RemoteSigned
```

### 進入專案:
```
cd 你的專案路徑
```

### 開始執行專案
```
npm start
```

---

## ReactDOM

### **Hello World:**
原始的index.js
```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
     document.getElementById('root')
);
```

更改過的index.js
```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <h1>Hello World</h1>, // 如有一句以上語法需要使用","隔開，否則會噴錯
     document.getElementById('root')
);
```

```ReactDOM.render()```為React的virtual DOM也可說是程式的切入點，負責將()內的參數做渲染，有別於以往純HTML改一個指令一個動作，而是會使用JS做一個模擬DOM，當畫面改變時，React會把更改的地方放入virtual DOM，和原本的DOM比較，並更改有改變的地方。

官方對於virtual DOM的定義:
>The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

```js
ReactDOM.render()
```

指定將內容渲染於```public/index.html```裡ID為root的DOM裡
```js
document.getElementById('root')
```

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">ReactDOM.render()渲染的內容</div> <!-- 此處 -->
  </body>
</html>
```

---

## **JSX:**
JSX為React所使用的特殊Javascript語言，可傳遞HTML語法。

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const test = () => {
    return (<h1>Hello World!</h1>)
}

ReactDOM.render(
    test(),
    document.getElementById('root')
);
```

### **如果今天要傳入兩個以上的HTML DOM:**  
<font color=red>錯誤的方法:</font>

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const test = () => {
    return (
        <h1>Hello World!</h1>
        <h1>Hello World!</h1>
    )
}

ReactDOM.render(
    test(),
    document.getElementById('root')
);
```

<font color=green>正確的方法:</font>  
JSX規定如果要傳出1個以上的HTML DOM時需要使用一個container包起來。

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const test = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <h1>Hello World!</h1>
        </div>
    )
}

ReactDOM.render(
    test(),
    document.getElementById('root')
);
```

### **傳入非HTML DOM單純變數:**  
如需要使用宣告的變數則需要使用"{}"才能正確使用。

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const test = true;

ReactDOM.render(
    <h1>{ (test === true) ? 100 : 0}</h1>,
    document.getElementById('root')
);
```

class及style代入變數，需要注意的是在class的地方需要使用`className`而非`class`。

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const test = { color: 'red' };
const testClass = "abc";

ReactDOM.render(
    <h1 style={ test } className={ testClass }>Hello World!</h1>,
    document.getElementById('root')
);
```

JSX結合運算

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const test = () => {
    const outputDom = [];
    // 如使用for迴圈產生HTML DOM需要加上key否則會噴錯
    for(let i = 0; i < 5; i++) {
        outputDom.push(<h1 key={i}>Hello {i}!</h1>);
    }
}

ReactDOM.render(
    { test() },
    document.getElementById('root')
);
```

## 未完待續...