# @morfeo/core

## single property parser

```json
{
  "color": "primary"
}
```

**regular parsing**  1,700,240 ops/sec ±0.55% (89 runs sampled)

**with cache enabled**  3,028,686 ops/sec ±0.55% (83 runs sampled)

Fastest is **with cache enabled**


## single complex property parser

```json
{
  "shadow": "light"
}
```

**regular parsing**  811,351 ops/sec ±0.51% (92 runs sampled)

**with cache enabled**  1,830,709 ops/sec ±0.60% (94 runs sampled)

Fastest is **with cache enabled**


## parsing the style of a theme component

```json
{
  "componentName": "Box"
}
```

**regular parsing**  137,115 ops/sec ±0.87% (97 runs sampled)

**with cache enabled**  261,709 ops/sec ±0.42% (93 runs sampled)

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

**regular parsing**  59,261 ops/sec ±0.37% (96 runs sampled)

**with cache enabled**  98,657 ops/sec ±0.33% (96 runs sampled)

Fastest is **with cache enabled**
