#### 主要知识点总结

##### HashTable:
 1. value + hash function => key
 2. 如果key值出现重复，则在key的位置拉出来一个链表。所以说，hash function 至关重要

在理想情况下，hashTable 的 增删查 都是 O(1)的
最坏的情况下，hashTable 的 增删查 都是 O(n)的（相当于链表）

##### 二叉树的遍历
前序遍历, 根左右
```
  preorder = root => {
    if (root) {
      traversPath.push(root.val)
      preorder(root.left)
      preorder(root.right)
    }
  }
```
中序遍历, 左根右
```
  inorder = root => {
    if (root) {
      preorder(root.left)
      traversPath.push(root.val)
      preorder(root.right)
    }
  }
```
后序遍历, 左右根
```
  postorder = root => {
    if (root) {
      preorder(root.left)
      preorder(root.right)
      traversPath.push(root.val)
    }
  }
```

##### 堆
Heap： 可以快速的找到一组数中的最大值或最小值。
根节点最大的叫大顶堆，根节点最小的叫小顶堆
常见操作：findMax，deleteMax，delete，insert

##### 二叉堆
通过完全二叉树来实现
二叉堆满足以下性质
  1. 是一个完全叔
  2. 树的任何一个节点，都大于（大顶堆）或小于（小顶堆）其子节点的值

二叉堆通过数组模拟实现
  1. 根节点是 a[0]
  2. 索引的父节点索引：Math.floor((i-1)/2)
  3. 索引的子节点: L: 2i + 1 ， R: 2i + 2

二叉堆的添加操作
  1. push到队尾
  2. heapifyUp
二叉堆的删除操作
  1. 将队尾元素放到a[0]
  2. heapifyDown



#### 思考感悟

在做滑动窗口的题目时，采用大顶堆的方法，第一次感受到了数据结构的神器，通过定义一个大顶堆的Class，将原本需要很多for loop的代码，变成了一种简单的，更加直观的代码。真的是有一种化繁为简神奇的感觉，也更坚定了要学好算法的想法。

另外还是有捕捉到一丝顿悟的感觉，之前一直不太明白数据结构到底是什么，只知道 new Object/Array/Set这种操作能够创建某些数据结构，但还是不知道其底层是什么，一直觉得是一些接触不到的高大上的东西。
在学习完堆这一章节以后，突然就意识到，数据结构其实就是一个Class，里面定义的方法是按照某种算法逻辑来进行数据的处理。而且这种数据结构我们也可以根据实际的业务进行改造或者创造。

先前认为高大上的东西，现在突然就有了一种能够触碰的感觉。 😁😁