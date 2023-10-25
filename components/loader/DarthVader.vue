<script setup lang="ts">
import { ref, onMounted } from "vue";
import darth from "~/assets/img/darth.png";

const canvasRef = ref<HTMLCanvasElement | null>(null);
let currentColumn = 0;
let currentRow = 0;
let isResetting = false;
const totalColumns = 3;
const totalRows = 8;

onMounted(() => {
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const tileWidth = img.width / totalColumns;
      const tileHeight = img.height / totalRows;
      let lastRender = 0;
      const frameTime = 100;

      const draw = (timestamp: number) => {
        if (!lastRender) lastRender = timestamp;
        const elapsed = timestamp - lastRender;

        if (elapsed > frameTime && !isResetting && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(
            img,
            currentColumn * tileWidth,
            currentRow * tileHeight,
            tileWidth,
            tileHeight,
            -10,
            200,
            tileWidth,
            tileHeight,
          );
          currentColumn = (currentColumn + 1) % totalColumns;
          if (currentColumn === 0) {
            currentRow = (currentRow + 1) % totalRows;
            if (currentRow === 0) {
              isResetting = true;
            }
          }
          lastRender = timestamp - (elapsed % frameTime);
        }

        if (isResetting && currentRow === 0 && currentColumn === 0) {
          isResetting = false;
        }
        requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);
    };
    img.src = darth;
  }
});
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="flex items-center justify-center h-full">
      <canvas ref="canvasRef" class="pr-8" width="300" height="800"></canvas>
    </div>
  </div>
</template>
