// 16.2. 리액트 없이 쓰는 리덕스
// 16.2.1 Parcel로 프로젝트 만들기
// 16.2.2 간단한 UI 구성하기
/**
 * index.css
 */
 .toggle {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    box-sizing: border-box;
}

.toggle.active {
    background: yellow;
}

/**
 * index.html
 */
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="index.css" />
    </head>
    <body>
        <div class="toggle"></div>
        <hr />
        <h1>0</h1>
        <button id="increase">+1</button>
        <button id="decrease">-1</button>
        <script src="./index.js"></script>
    </body>
</html>