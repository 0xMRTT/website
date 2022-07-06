<template>
    <div>
        <div>
            COLOR
            <ColorModePicker />
            MODE
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

