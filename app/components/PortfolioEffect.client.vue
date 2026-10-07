<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'mesh' | 'aurora' | 'swirl' }>(), { variant: 'mesh' })
const enabled = ref(false)
let motion: MediaQueryList | undefined
function syncMotion() {
  enabled.value = !motion?.matches && 'gpu' in navigator
}
onMounted(() => {
  motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  syncMotion()
  motion.addEventListener('change', syncMotion)
})
onBeforeUnmount(() => motion?.removeEventListener('change', syncMotion))
</script>

<template>
  <LazyShaderSurface
    v-if="enabled"
    :variant="variant"
  />
</template>
