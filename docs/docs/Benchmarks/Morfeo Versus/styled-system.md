---
id: benchmarks-morfeo-vs-styled-system
title: Styled System
description: Benchmarks > Styled System
---

# @morfeo/core vs styled-system

## resolving a style

```json
{
  "p": "m",
  "m": "s",
  "bg": "secondary",
  "color": "primary"
}
```

**Morfeo**  415,656 ops/sec ±0.61% (91 runs sampled)

**styled system**  276,463 ops/sec ±0.97% (94 runs sampled)

Fastest is **Morfeo**


:::info Notice
Tests are made using [benchmarkjs](https://benchmarkjs.com/) running on:

| OS     | VERSION  | CPU |
| :----- | :-------- | :------- |
| darwin | Darwin Kernel Version 21.1.0: Wed Oct 13 17:33:23 PDT 2021; root:xnu-8019.41.5~1/RELEASE_X86_64 | 12 cores, Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz |
:::