# ykt-helper

一个雨课堂辅助工具。

如果浏览器已经安装了 Tampermonkey 插件，可以 [点此安装](https://raw.githubusercontent.com/hotwords123/yuketang-helper/gh-pages/yuketang-helper.user.js)。

目前已经迁移到 [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) 框架，旧版脚本在 [legacy](https://github.com/hotwords123/yuketang-helper/tree/legacy) 分支。

## 功能介绍

加载成功时，进入课堂后页面左下角会出现一个工具栏。

### 1. 课堂习题提示

在有新的习题时自动弹出通知提示，防止上课摸鱼错过习题。

若要查看这堂课的所有习题信息，可以点击工具栏的「显示习题列表」图标。

### 2. 习题答案提示

对于有标准答案的选择题和填空题，点击工具栏的「查看习题答案」图标可以显示最后发布的习题的答案。投票题和主观题没有标准答案，因此无法显示。

### 3. 自动作答习题

默认关闭，点击工具栏的「切换自动作答」图标可以切换自动作答功能的开启状态。功能开启时，将在习题发布后几秒内自动提交答案。

对于选择题和填空题，默认提交正确答案；对于投票题，默认提交随机答案；对于主观题，默认不提交答案，需要用户设置提交内容才能自动作答。

### 4. 习题列表界面

点击工具栏的「显示习题列表」图标可以打开课件浏览窗口，查看这堂课的所有习题。

左侧是课件的缩略图浏览视图，点击缩略图可以查看对应页面。默认只显示习题页面，若选择「显示全部页面」则会展示课件的全部页面。页面边框默认为灰色，蓝色代表当前浏览的页面，黄色代表已经发出的习题，绿色代表已经作答的习题。

右侧是课件的页面浏览视图，可以查看课件大图、查看题目答案。若要设置作答内容，首先在文本框中输入作答内容，然后点击「自动作答」按钮。对于选择题和投票题，直接输入选项字母；对于填空题，一行输入一个空的答案（空行会被自动忽略）；对于主观题，直接输入作答内容，暂时不支持图片上传。

实验性功能：如果你不慎错过了习题作答时间，可以输入作答内容后点击「重试作答」按钮，或许能够补救成功。

### 5. 自动进入课堂

打开课程列表页面，脚本将定期进行检查，如果有课程正在上课会自动在后台打开课堂页面。如果你不想上这门课，可以手动关闭。

## 注意事项

1. 自动作答执行后会弹出通知提示。即使作答成功，网页端显示的作答状态也是未作答，但在网页端提交答案会提示题目已经作答过。可以打开题目列表检查边框是不是绿色的判断作答是否成功。
