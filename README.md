# Dingtalk for Franz
This is Franz dingtalk recipe

![Dark Dingtalk icon](https://github.com/mirzaakhena/recipe-dingtalk/blob/master/icon.png?raw=true)

Put this repo under

```
~/Library/ApplicationSupport/Franz/recipes/dev/dingtalk
```

You must have this folder
```
recipes/dev/dingtalk/
  - icon.svg
  - icon.png
  - index.js
  - package.json
  - README.md
  - style.css
  - webview.js
```

Reload the Franz, Open Custom Services, You will see the dark Dingtalk icon. 

icon is taken from
https://seekicon.com/free-icon/dingtalk-circle-icon_1

Currently number of unread chat message is read from this element
```
<span 
  class="unread-num ng-scope" 
  ng-if="$ctrl.unreadMsgCount > 0">
<em class="ng-binding"5</em>
</span>
```

Some style is overriden for maximize the view
