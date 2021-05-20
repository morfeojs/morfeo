<script>
  import { theme } from "@morfeo/web";
  import Button from "./Button.svelte";
  import { lightTheme, darkTheme } from "../theme";

  let darkMode = false;

  function handleClick() {
    if (darkMode) {
      theme.set(lightTheme);
    } else {
      theme.set(darkTheme);
    }
    darkMode = !darkMode;
  }
</script>

<Button onClick={handleClick} {...$$props}>
  {darkMode ? `🌙` : `☀️`}
</Button>