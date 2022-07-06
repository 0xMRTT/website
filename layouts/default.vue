<template>
    <div>
        <div class="navbar bg-base-300 rounded-box">
            <div class="flex-1 px-2 lg:flex-none">
                <a class="text-lg font-bold">0xMRTT</a>
            </div>
            <div class="flex justify-end flex-1 px-2">
                <div class="flex items-stretch">
                    <a class="btn btn-ghost rounded-btn">Button</a>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost rounded-btn">Dropdown</label>
                        <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li v-for="theme of themes" :key="theme"><a>{{ theme }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li v-for="color of ['system', 'light', 'dark', 'sepia']" :key="color" :class="{
                    preferred: !$colorMode.unknown && color === $colorMode.preference,
                    selected: !$colorMode.unknown && color === $colorMode.value,
                }">
                    <component :is="`icon-${color}`" @click="$colorMode.preference = color" />
                </li>
            </ul>
            <p>
                <ColorScheme placeholder="..." tag="span">
                    Color mode: <b>{{ $colorMode.preference }}</b>
                    <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{ $colorMode.value }}</i> mode
                        detected)</span>
                </ColorScheme>
            </p>
        </div>

        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
];
console.log(colorMode.preference)
</script>

