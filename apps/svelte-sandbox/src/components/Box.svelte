<script>
	import { morfeo } from "@morfeo/svelte";

  const style = {
    display: 'flex',
    width: '100%',
    height: '100vh'
  }
</script>

<div use:morfeo={{...style, ...$$props}}>
  <slot></slot>
</div>