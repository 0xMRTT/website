<template>
    <div>
        <div class="navbar bg-base-300 rounded-box">
            <div class="flex-1 px-2 lg:flex-none">
                <a class="text-lg font-bold">daisyUI</a>
            </div>
            <div class="flex justify-end flex-1 px-2">
                <div class="flex items-stretch">
                    <a class="btn btn-ghost rounded-btn">Button</a>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost rounded-btn">Dropdown</label>
                        <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li v-for="color of ['system', 'light', 'dark', 'sepia']" :key="color" :class="{
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

        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>
