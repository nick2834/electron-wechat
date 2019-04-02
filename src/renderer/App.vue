<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "wechat"
};
</script>

<style lang="scss">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

a {
    color: #7e8c8d;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
}

li {
    list-style: none;
}


html, body {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    font-family: "Apple LiGothic Medium";
}
body {
    -webkit-text-size-adjust: none;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 8px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(0,0,0,0.1);
}
.dragable{
   -webkit-app-region:drag;
   user-select:none
}
.main_content{
  display: flex;
  width: 910px;
  .chat_left{
    width: 260px;
    background: rgb(230,230,230)
  }
  .chat_right{
    flex: 1;
    position: relative;
  }
}
</style>