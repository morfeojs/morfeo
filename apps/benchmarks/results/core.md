# @morfeo/core

## single property parser

```json
{
  "color": "primary"
}
```

**regular parsing**  1,560,270 ops/sec ±2.01% (84 runs sampled)

**with cache enabled**  2,950,728 ops/sec ±0.88% (89 runs sampled)

Fastest is **with cache enabled**


## single complex property parser

```json
{
  "shadow": "light"
}
```

**regular parsing**  822,836 ops/sec ±0.63% (93 runs sampled)

**with cache enabled**  1,763,224 ops/sec ±1.10% (85 runs sampled)

Fastest is **with cache enabled**


## parsing the style of a theme component

```json
{
  "componentName": "Box"
}
```

**regular parsing**  136,781 ops/sec ±1.19% (92 runs sampled)

**with cache enabled**  245,730 ops/sec ±0.96% (92 runs sampled)

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

**regular parsing**  58,332 ops/sec ±1.22% (85 runs sampled)

**with cache enabled**  96,209 ops/sec ±0.86% (91 runs sampled)

Fastest is **with cache enabled**
