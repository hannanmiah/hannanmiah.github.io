<script setup lang="ts">
import { Shader, MeshGradient, Aurora, Swirl, SimplexNoise } from 'shaders/vue'

defineProps<{ variant: 'mesh' | 'aurora' | 'swirl' }>()
const available = ref(true)
const shader = ref<InstanceType<typeof Shader> | null>(null)
const colorMode = useColorMode()

const meshStops = computed(() => colorMode.value === 'dark'
  ? [
      { color: '#0f1d38', position: 0 },
      { color: '#1a3668', position: 0.38 },
      { color: '#112242', position: 0.72 },
      { color: '#0a1224', position: 1 }
    ]
  : [
      { color: '#e6edf7', position: 0 },
      { color: '#b7cceb', position: 0.38 },
      { color: '#e2ebf8', position: 0.72 },
      { color: '#f5f8fd', position: 1 }
    ])

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
    <template v-if="variant === 'mesh'">
      <MeshGradient
        :stops="meshStops"
        :speed="0.32"
        :swirl="0.6"
        :smoothness="1.8"
        color-space="oklab"
      />
      <SimplexNoise
        :scale="3.2"
        :speed="0.25"
        :opacity="0.08"
        blend-mode="softLight"
      />
    </template>
    <Aurora
      v-else-if="variant === 'aurora'"
      color-a="#1d4ed8"
      color-b="#60a5fa"
      color-c="#38bdf8"
      :speed="0.6"
      :intensity="40"
      :curtain-count="2"
    />
    <template v-else>
      <Swirl
        color-a="#0b1f42"
        color-b="#1e4b94"
        :stops="null"
        :speed="0.24"
        :detail="0.6"
        color-space="oklab"
      />
      <SimplexNoise
        :scale="2.8"
        :speed="0.2"
        :opacity="0.1"
        blend-mode="softLight"
      />
    </template>
  </Shader>
</template>
