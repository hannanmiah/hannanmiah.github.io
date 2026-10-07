<script setup lang="ts">
import { Shader, MeshGradient, Aurora, Swirl } from 'shaders/vue'

defineProps<{ variant: 'mesh' | 'aurora' | 'swirl' }>()
const available = ref(true)
const shader = ref<InstanceType<typeof Shader> | null>(null)
function onReady() {
  shader.value?.setFrameRateCap(30)
  shader.value?.setResolutionScale(0.75)
}
</script>

<template>
  <Shader
    v-if="available"
    ref="shader"
    class="effect-canvas"
    :disable-telemetry="true"
    aria-hidden="true"
    @ready="onReady"
    @unavailable="available = false"
  >
    <MeshGradient
      v-if="variant === 'mesh'"
      :stops="[{ color: '#111b12', position: 0 }, { color: '#4e641b', position: 0.35 }, { color: '#b5d467', position: 0.65 }, { color: '#dce9ad', position: 1 }]"
      :speed="0.35"
      :swirl="0.65"
      :smoothness="1.8"
      color-space="oklab"
    />
    <Aurora
      v-else-if="variant === 'aurora'"
      color-a="#577644"
      color-b="#c6ef7a"
      color-c="#8bb5a2"
      :speed="0.8"
      :intensity="45"
      :curtain-count="2"
    />
    <Swirl
      v-else
      color-a="#141c12"
      color-b="#64823a"
      :stops="null"
      :speed="0.25"
      :detail="0.6"
      color-space="oklab"
    />
  </Shader>
</template>
