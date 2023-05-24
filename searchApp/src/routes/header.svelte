<script lang="ts">
    export let headerButton: String;
    export let pageChange: string;
</script>

<main class=" w-full h-20 bg-slate-50">
    <div class=" absolute w-full h-20 mx-5 flex content-center"><img class=" self-center h-16 w-16" alt="Logo" src="https://images.squarespace-cdn.com/content/v1/60e72c08c046c32f420a2483/1640048515696-O1DAXBMKQ2SDY50OPVFR/Logo+Black.png"></div>
    <div class=" absolute w-full h-20 flex justify-end items-center"><button class=" h-20 w-44 ease-in-out duration-150 bg-transparent border-transparent text-lg text-slate-700 z-40 hover:bg-opacity-50 hover:bg-slate-700 hover:text-white">Sign in</button></div>
    <div class=" absolute w-[calc(100%-11rem)] h-20 flex justify-end items-center"><a href="{pageChange}" class=" h-20 w-44 ease-in-out duration-150 bg-transparent border-transparent text-lg text-slate-700 z-40 flex justify-center items-center hover:bg-opacity-50 hover:bg-slate-700 hover:text-white"><p>{headerButton}</p></a></div>
</main>