---
id: benchmarks-jss
title: JSS
description: Benchmarks > JSS
---

# @morfeo/jss

## @morfeo/jss speed compared to @morfeo/core

```json
{
  "button": {
    "color": "primary"
  }
}
```

**@morfeo/core**  511,000 ops/sec ±1.19% (86 runs sampled)

**@morfeo/jss**  6,652 ops/sec ±31.73% (16 runs sampled)

Fastest is **@morfeo/core**


:::info Notice
Tests are made using [benchmarkjs](https://benchmarkjs.com/) running on:

| OS     | VERSION  | CPU |
| :----- | :-------- | :------- |
| darwin | Darwin Kernel Version 21.1.0: Wed Oct 13 17:33:23 PDT 2021; root:xnu-8019.41.5~1/RELEASE_X86_64 | 12 cores, Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz |
:::