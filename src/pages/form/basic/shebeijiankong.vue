<template>
  <div class="container">
    <div class="left">
      <div>项目列表</div>
      <a href="#">万事如意隧道项目</a>
      <a href="#">心想事成隧道项目</a>
      <a href="#">心想事成隧道项目</a>
      <a href="#">心想事成隧道项目</a>
      <a href="#">心想事成隧道项目</a>
      <a href="#">心想事成隧道项目</a>
    </div>
    <div class="right">
      <div class="项目监控">
        <div class="项目监控fl">项目监控</div>
        <div class="详细参数fr"><a href="#">详细参数</a> </div>
      </div>
      <div class="温度">
        <div class="温度fl">温度</div>
        <div class="数值fr">15℃</div>
      </div>
      <div class="湿度">
        <div class="湿度fl">湿度</div>
        <div class="数值fr">50%RH</div>
      </div>
    </div>
  </div>
</template>

<style>
/*方法一： BFC(块级格式化上下文)*/

.container {
  width: 100%;
  height: 100%;
}
/*左侧区域开始*/
.left {
  float: left;
  width: 240px;
  height: 100%;
  background:#fafafa;
  margin-right:24px;
}
.left div{
  height: 60px;
  background-color: #fafafa;
  border-bottom: solid 1px #f0f2f5;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #575757;
  margin-bottom: 0;
}
.left a{
  display: block;
  width:240px;
  height:60px;
  background: #fafafa;
  line-height: 60px;
  text-align: center;
  color: #1f1f1f;
}
.left a:hover{
  background-color: #1890ff;
}
/*左侧区域end*/
/*右侧区域开始*/
.right {
  height: 100%;
  overflow: hidden; /* 触发bfc */
  background: green;
}

.right .项目监控{
  height: 60px;
  line-height: 60px;
  background-color: #fafafa;
  border-bottom: solid 1px #f0f2f5;
}
.right .项目监控 .项目监控fl{
  float: left;
  padding-left: 24px;
  font-size: 20px;
  font-weight: bold;
}
.right .项目监控 .详细参数fr{
  float: right;
  padding-right: 24px;
}
.right .温度{
  height: 120px;
  line-height: 120px;
  background-color: #fafafa;
  border-bottom: solid 1px #f0f2f5;
}
.right .温度 .温度fl{
  float: left;
  padding-left: 24px;
  font-size: 20px;
}
.right .温度 .数值fr{
  float: right;
  padding-right: 24px;
  font-size: 32px;
  font-weight: bold;
  color: #60bd90;
}
.right .湿度{
  height: 120px;
  line-height: 120px;
  background-color: #fafafa;
}
.right .湿度 .湿度fl{
  float: left;
  padding-left: 24px;
  font-size: 20px;
}
.right .湿度 .数值fr{
  float: right;
  padding-right: 24px;
  font-size: 32px;
  font-weight: bold;
  color: #2a82e4;
}
</style>












<!--<template>-->
<!--  <div class="big">-->
<!--    <ul>-->
<!--      <li class="equipment">设备列表</li>-->
<!--      <li class="monitor">设备监控</li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->


<!--<style>-->
<!--*{-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->
<!--li{-->
<!--  list-style: none;-->
<!--}-->
<!--.big{-->
<!--  background: #fafafa;-->
<!--}-->
<!--.big .equipment{-->
<!--  float: left;-->
<!--  width: 240px;-->
<!--  background: #fafafa;-->
<!--}-->
<!--.big .monitor{-->
<!--  float: left;-->
<!--  width:240px;-->
<!--  background: #fafafa;-->
<!--  magrgin-left:24px;-->
<!--  margin-right:0;-->
<!--}-->
<!--</style>-->


<!--<template>-->
<!--  <div>-->
<!--    <a-card class="projetctname">-->
<!--      <h2>项目列表</h2>-->
<!--      <a-list item-layout="horizontal" :data-source="data">-->
<!--        <a-list-item slot="renderItem" slot-scope="item">-->
<!--          <a-list-item-meta-->
<!--              description=""-->
<!--          >-->
<!--            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>-->
<!--            &lt;!&ndash;        <a-avatar&ndash;&gt;-->
<!--            &lt;!&ndash;            slot="avatar"&ndash;&gt;-->
<!--            &lt;!&ndash;            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"&ndash;&gt;-->
<!--            &lt;!&ndash;        />&ndash;&gt;-->
<!--          </a-list-item-meta>-->
<!--        </a-list-item>-->
<!--      </a-list>-->
<!--    </a-card>-->
<!--    <a-card class="temperature" :bordered="false" >-->
<!--      <h2>隧道名称</h2>-->
<!--      <div>-->
<!--        <a-list item-layout="horizontal">-->

<!--        </a-list>-->
<!--      </div>-->
<!--    </a-card>-->
<!--  </div>-->

<!--</template>-->
<!--<script>-->
<!--const data = [-->
<!--  {-->
<!--    title: 'Ant Design Title 1',-->
<!--  },-->
<!--  {-->
<!--    title: 'Ant Design Title 2',-->
<!--  },-->
<!--  {-->
<!--    title: 'Ant Design Title 3',-->
<!--  },-->
<!--  {-->
<!--    title: 'Ant Design Title 4',-->
<!--  },-->
<!--];-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      data,-->
<!--    };-->
<!--  },-->
<!--};-->


<!--<!-->
<!--&lt;!&ndash;.projetctname{&ndash;&gt;&#45;&#45;</script>&ndash;&gt;-->
<!--<style>-->
<!--  float:left;-->
<!--  width:240px;-->
<!--}-->
<!--.temperature{-->
<!--  float:left;-->
<!--  width:80%;-->
<!--  margin-left:24px;-->
<!--}-->
<!--</style>-->




