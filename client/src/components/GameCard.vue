<script setup lang="ts">
const props = defineProps(['value']);
</script>

<template>
    <div>
        <span>{{ props.value }}</span>
        <slot></slot>
    </div>
</template>