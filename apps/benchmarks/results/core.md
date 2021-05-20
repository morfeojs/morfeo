# @morfeo/core

## single property parser

```json
{
  "color": "primary"
}
```

**regular parsing**  1,763,585 ops/sec ±0.77% (91 runs sampled)

**with cache enabled**  3,327,487 ops/sec ±1.13% (95 runs sampled)

Fastest is **with cache enabled**


## single complex property parser

```json
{
  "shadow": "light"
}
```

**regular parsing**  822,458 ops/sec ±2.70% (90 runs sampled)

**with cache enabled**  1,703,082 ops/sec ±1.05% (88 runs sampled)

Fastest is **with cache enabled**


## parsing the style of a theme component

```json
{
  "componentName": "Box"
}
```

**regular parsing**  134,212 ops/sec ±1.09% (89 runs sampled)

**with cache enabled**  238,007 ops/sec ±1.02% (90 runs sampled)

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

**regular parsing**  58,249 ops/sec ±1.07% (89 runs sampled)

**with cache enabled**  94,102 ops/sec ±0.66% (94 runs sampled)

Fastest is **with cache enabled**
