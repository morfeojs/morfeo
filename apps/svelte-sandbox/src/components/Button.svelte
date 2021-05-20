<script>
	import { morfeo } from "@morfeo/svelte";

	export let componentName = "Button";
	export let onClick = () => undefined;
</script>

<button on:click={onClick} use:morfeo={{...$$restProps, componentName}}>
  <slot></slot>
</button>