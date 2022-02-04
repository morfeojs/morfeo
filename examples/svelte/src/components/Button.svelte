<script>
	import { morfeoStyle } from "@morfeo/svelte";

	export let componentName = "Button";
	export let onClick = () => undefined;
</script>

<button on:click={onClick} use:morfeoStyle={{...$$restProps, componentName}}>
  <slot></slot>
</button>