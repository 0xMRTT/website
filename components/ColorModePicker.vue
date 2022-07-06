<template>
  <div>
    <ul>
      <li
        v-for="color of ['system', 'light', 'dark', 'sepia']"
        :key="color"
        :class="{
          preferred: !$colorMode.unknown && color === $colorMode.preference,
          selected: !$colorMode.unknown && color === $colorMode.value,
        }"
      >
      {{color}}
        <component
          :is="`icon-${color}`"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
    <p>
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'"
          >&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span
        >
      </ColorScheme>
    </p>
  </div>
</template>
