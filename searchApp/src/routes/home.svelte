<script>
    import barIcon from "$lib/assets/searchBarIcon.png"
</script>
<main class="flex flex-col w-screen h-[calc(100vh-6rem)] justify-center items-center gap-4">
    <div class=" text-7xl font-monstreaf font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-600"><p>Search</p></div>
    <div class="h-16 w-3/4 relative flex justify-end items-center"><input class=" absolute h-16 w-full bg-white text-5xl font-monstreaf rounded-lg"><img class=" absolute h-20 w-20" alt="icon" src={barIcon} /></div>
</main>