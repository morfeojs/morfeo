<script>
  import { morfeo } from "@morfeo/web";
  import Button from "./Button.svelte";

  let darkMode = false;

  function handleClick() {
    morfeo.setCurrentTheme(darkMode ? 'light' : 'dark');
    darkMode = !darkMode;
  }
</script>

<Button onClick={handleClick} {...$$props}>
  {darkMode ? `🌙` : `☀️`}
</Button>