<script>
	import { morfeo } from "@morfeo/svelte";

	export let componentName = "Button";
	export let onClick = () => undefined;
</script>

<button on:click={onClick} use:morfeo={{...$$props, componentName}}>
  <slot></slot>
</button>