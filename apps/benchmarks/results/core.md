# @morfeo/core

## single property parser

```json
{
  "color": "primary"
}
```

**regular parsing**  1,674,079 ops/sec ±1.28% (92 runs sampled)

**with cache enabled**  3,336,631 ops/sec ±0.36% (91 runs sampled)

Fastest is **with cache enabled**


## single complex property parser

```json
{
  "shadow": "light"
}
```

**regular parsing**  875,625 ops/sec ±0.87% (92 runs sampled)

**with cache enabled**  1,735,908 ops/sec ±0.43% (90 runs sampled)

Fastest is **with cache enabled**


## parsing the style of a theme component

```json
{
  "componentName": "Box"
}
```

**regular parsing**  238,443 ops/sec ±0.67% (91 runs sampled)

**with cache enabled**  241,772 ops/sec ±0.59% (90 runs sampled)

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

**regular parsing**  71,908 ops/sec ±0.51% (92 runs sampled)

**with cache enabled**  94,384 ops/sec ±0.90% (88 runs sampled)

Fastest is **with cache enabled**
