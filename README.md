# jqueryFKdialog
## 肥客极简模式响应式jQuery对话框 - 高仿iOS7模态框

### 为什么要使用肥客极简模式jQuery对话框？
* 1.可定制弹出内容（标题、内容、按扭、样式...）
* 2.做到响应式布局能够所有设备屏幕（手机、PC、电视、平板...）
* 3.程序员能够简单的使用代码（绑定、API传参、回调...)
* 4.小体积无CSS样式文件加载
* 5.更加友好的用户体验


肥客联邦官网：
[http://fk68.net](http://fk68.net)

作者：肥客泉 - [https://github.com/feikeq/jqueryFKdialog](https://github.com/feikeq/jqueryFKdialog)



## 使用方法
### 1: 载入所需的文件
    ```html
    <!-- jQuery 公共资源库CDN -->
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <!-- 肥客极简模式响应式jQuery对话框 JS 文件 -->
    <script src="jqueryFKdialog.min.js"></script>
    ```

### 2. 通过事件响应 （一般常见的 按扭、图片、链接等...）
     ```javascript
     <a id="test1" href="javascript:;">alert()</a>
     $('#test1').jqueryFKdialog({title:'警告'});
     ```

### 3. 通过函数方法  (一般像 Ajax、在某一个过程里等....)
     ```javascript
     $.jqueryFKdialog({title:'警告'});
     ```


### 4. 结合以上两种 （预先绑定弹框事件需要某个操作后主动去显示这个弹框层）
## showFKDialog 方法
      ```javascript
      <a id="test2" href="javascript:;">confirm()</a>
      $('test2').jqueryFKdialog({tips:'({title:'警告'}).showFKDialog({tip:'自动弹出来吧不用点'});
      ```



## 配置选项
**title**
对话框标题（必须）
```
{title:'警告'}
```

**tips**
对话框内容（可选）
```
{tips:'这是对话框标题下的内容正文'}
```


**txt**
对话框用户交互的文本框默认值（可选）
```
默认值为空
{txt:''}

默认值为"这里有默认值"
{txt:'这里有默认值'}

```


**ok**
对话框确定按扭文本（可选）[确定]
```
把确定按扭默认文本“确定”修改为“好的”
{ok:'好的'}
```


**cancel**
对话框取消按扭文本（可选）
当没有设置这个按扭的文本时则对话框只有单个按扭
```
{cancel:'关闭'}
```

**callback**
回调:对话框点击按扭后返回操作结果的资源对象（可选）
```
{callback:function(res){
    //code...
}}
```


**htmls**
自定义对话框整个HTML结构和样式（可选）
```
{htmls:'警告'}
```




## 可以直接替换原生JS对话框alert、confirm、prompt这些函数，统一UI风格。




肥客联邦
自由无止境.自由的引领.自由的联盟.自由让你我腾飞!为了同一目标而奋斗，为了同一信念而聚一堂，为了网络事业的明天而烈火青春.
