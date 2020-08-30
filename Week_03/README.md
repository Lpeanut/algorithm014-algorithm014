#### 递归模板
```
var recursion = level => {
  // recursion terminator 
  if (level > MAX_LEVEL) {
    return
  }
  // current logic

  // drill down

  // revert state
}
```

#### 分治模板
```
var recursion = (probel, p1, p2) => {
  // recursion terminator 

  if (!problem) {
    // some logic
    return
  }

  // prepare data

  data = prepareData(problem)
  subProblem = splitProblem(data, problem)

  // conquer problem

  result1 = self.divideConquer(subProblem[0], p1, p2)
  result2 = self.divideConquer(subProblem[1], p1, p2)
  ...

  // process result and return final result

  result = processResult(result1, result2, ...)

  // revert state
}
```