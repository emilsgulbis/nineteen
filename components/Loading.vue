<template>
  <transition name="slide">
    <div class="fixed inset-0 flex bg-darkest z-20">
      <div class="slide-slower flex-1 flex items-center justify-center ">
        <div>
          <div class="text-center skew p-5">
            <span class="text-huge font-black text-lime leading-none">19</span>
            <span
              class="block px-10 py-3 bg-dark text-lime uppercase text-center font-bold text-xl pulse"
              >Loading</span
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.skew {
  transform: skew(-5deg, -5deg);
}
</style>
