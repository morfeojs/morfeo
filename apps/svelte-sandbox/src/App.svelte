<script>
  import Box from "./components/Box.svelte";
  import Button from "./components/Button.svelte";
  import ToggleTheme from "./components/ToggleTheme.svelte";
</script>

<Box bg="primary" flexDirection="row" justifyContent="space-evenly" alignItems="center">
  <ToggleTheme />
  <Button variant="primary">Primary</Button>
  <Button variant="round">Round</Button>
</Box>
