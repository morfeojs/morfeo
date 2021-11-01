---
id: benchmarks-core
title: Core
description: Benchmarks > Core
---

# @morfeo/core

## single property parser

```json
{
  "color": "primary"
}
```

**regular parsing**  1,151,862 ops/sec ±0.95% (89 runs sampled)

**with cache enabled**  1,966,573 ops/sec ±3.46% (85 runs sampled)

Fastest is **with cache enabled**


## single complex property parser

```json
{
  "shadow": "light"
}
```

**regular parsing**  760,170 ops/sec ±1.03% (92 runs sampled)

**with cache enabled**  1,839,411 ops/sec ±0.93% (90 runs sampled)

Fastest is **with cache enabled**


## parsing the style of a theme component

```json
{
  "componentName": "Box"
}
```

**regular parsing**  133,481 ops/sec ±0.99% (90 runs sampled)

**with cache enabled**  254,159 ops/sec ±0.82% (92 runs sampled)

Fastest is **with cache enabled**


## parsing a complete style

```json
{
  "px": "m",
  "py": "s",
  "color": "primary",
  "bg": "secondary",
  "shadow": "light",
  "componentName": "Box"
}
```

**regular parsing**  57,767 ops/sec ±0.88% (93 runs sampled)

**with cache enabled**  97,447 ops/sec ±0.73% (91 runs sampled)

Fastest is **with cache enabled**


:::info Notice
Tests are made using [benchmarkjs](https://benchmarkjs.com/) running on:

| OS     | VERSION  | CPU |
| :----- | :-------- | :------- |
| darwin | Darwin Kernel Version 21.1.0: Wed Oct 13 17:33:23 PDT 2021; root:xnu-8019.41.5~1/RELEASE_X86_64 | 12 cores, Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz |
:::