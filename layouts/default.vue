<template>
    <div>
        <div class="navbar bg-base-300 rounded-box">
            <div class="navbar-start">
                <div class="dropdown">
                    <div class="flex-1 px-2 lg:flex-none">
                        <NuxtLink to="/">
                            <div class="avatar">
                                <div class="w-11 rounded-full">
                                    <img src="https://avatars.githubusercontent.com/0xMRTT" alt="0xMRTT" />
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>

            </div>

            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Blog</a></li>
                    <li tabindex="0">
                        <a>
                            Projects
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul class="p-2">
                            <li><a>CRS</a></li>
                            <li><a>Others</a></li>
                        </ul>
                    </li>
                    <li><a>About</a></li>
                </ul>
            </div>

            <div class="navbar-end">

                <div class="flex justify-end flex-1 px-2">
                    <div class="flex items-stretch">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost rounded-btn">
                                <p v-if="$colorMode.preference == 'system'"><svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg></p>
                                <p v-if="$colorMode.preference == 'dark'"><svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg></p>
                                <p v-if="$colorMode.preference == 'light'"><svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg></p>
                            </label>
                            <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li v-for="color of ['system', 'light', 'dark']" :key="color" :class="{
                                    preferred: !$colorMode.unknown && color === $colorMode.preference,
                                    selected: !$colorMode.unknown && color === $colorMode.value,
                                }">
                                    <p @click="$colorMode.preference = color">{{ color }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>
