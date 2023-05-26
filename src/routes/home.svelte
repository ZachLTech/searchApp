<script lang="ts">
    import barIcon from "$lib/assets/searchBarIcon.png"

    import axios from "axios";



async function searchAPI(){
  try {
    const apiKey = "803658ef6d31763b5094e4c18d3d4a6604f4a311f68d63446afe91d102087142";
    const query = "coffee"; // Replace with your desired query
    const url = `https://serpapi.com/search.json?q=${query}&tbm=lcl&api_key=${apiKey}`;

    const response = await axios.get(url);
    const { organic_results } = response.data;

    organic_results.forEach((result: String) => {
      console.log(result.link);
    });
  } catch (error) {
    console.error("Error retrieving search results:", error);
  }
}

</script>
<main class="flex flex-col w-screen h-[calc(100vh-6rem)] justify-center items-center gap-4">
    <div class=" text-7xl font-monstreaf font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-600"><p>Search</p></div>
    <div class="h-16 w-3/4 relative flex justify-end items-center"><input class=" absolute h-16 w-full bg-white text-5xl font-monstreaf rounded-lg"><button on:click={() => searchAPI()} class=" absolute h-20 w-20" ><img alt="icon" src={barIcon} /></button></div>
</main>


