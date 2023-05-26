<script>
    import "../app.css";
    import Header from "./header.svelte";
    let headerButton = "About";
    let pageChange = "/about"
    import Home from "./home.svelte";
  </script>

  <Header {headerButton} {pageChange}/>

  <Home />