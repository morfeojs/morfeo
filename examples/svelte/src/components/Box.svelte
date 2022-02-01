<script>
	import { morfeoStyle } from "@morfeo/svelte";

  const style = {
    display: 'flex',
    width: '100%',
    height: '100vh'
  }
</script>

<div use:morfeoStyle={{...style, ...$$restProps}}>
  <slot></slot>
</div>