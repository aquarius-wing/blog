```
root
  └ (4) heading  
    ├ (5) mark-text  
>   └ (3) text  "11111"
```
# 发现问题
MarkTextNode是一个继承LexicalNode的节点
`#11111`如果我现在让光标从第一个1的后面按一下左
在`packages/lexical/src/LexicalEvents.ts@onSelectionChange`中`$getSelection`获取到的是null
这是因为在调用这个方法时，`editor._pendingEditorState._selection`就已经是null了
然后在调用updateEditor的时候
`activeEditorState = pendingEditorState;`
所以`$getSelection`就是null了
# 探索问题
## `editor._pendingEditorState`的`_pendingEditorState`是怎么来的？
我们根据关键词`_pendingEditorState =`在`LexicalUpdates`没有找到答案
于是在`LexicalEditor`中也没有发现，这个时候我们转变思路
因为我们只是在打印的时候发现pendingEditorState.selection为null
也有可能是先赋值
最终是在这`pendingEditorState._selection = internalCreateSelection(editor);`
- internalCreateSelection
- internalCreateRangeSelection
- internalResolveSelectionPoints返回null
	- 如果是停靠的dom或聚焦的dom为null或他们不在editor内部时，返回null
	- 我们给每一个返回null的地方加上console.log
这个时候日志太多了
所以要在打印update的地方加上---------------和new Date()
按左右的时候触发的是`onSelectionChange`
最终初次`onSelectionChange`的时候出发的null为`Could not resolve anchor point`


# 111111
# 22222

### sssdsd
sdsd



