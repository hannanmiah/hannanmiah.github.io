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
      :stops="[{ color: '#e6edf7', position: 0 }, { color: '#bccfe8', position: 0.35 }, { color: '#e3ebf8', position: 0.65 }, { color: '#f4f7fc', position: 1 }]"
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
      color-a="#102d59"
      color-b="#234f89"
      :stops="null"
      :speed="0.25"
      :detail="0.6"
      color-space="oklab"
    />
  </Shader>
</template>
