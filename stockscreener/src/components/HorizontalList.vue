<template>
  <div id="app">
    <div class="left">
      left
      <button id="left-button" @click="swipeLeft">swipe left</button>
    </div>
    <div class="center" id="content" ref="content">
      <div class="internal">div 1</div>
      <div class="internal">div 2</div>
      <div class="internal">div 3</div>
      <div class="internal">div 4</div>
      <div class="internal">div 5</div>
      <div class="internal">div 6</div>
      <div class="internal">div 7</div>
      <div class="internal">div 8</div>
      <div class="internal">div 9</div>
      <div class="internal">div 10</div>
      <div class="internal">div 11</div>
    </div>
    <div class="right">
      <button id="right-button" @click="swipeRight">swipe right</button>
      right
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app-hozList",
  methods: {
    /**
     * scrollTo - Horizontal Scrolling
     * @param {(HTMLElement ref)} element - Scroll Container
     * @param {number} scrollPixels - pixel to scroll
     * @param {number} duration -  Duration of scrolling animation in millisec
     */
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth ||
            scrollPixels < 0)
        )
      ) {
        // Get the start timestamp
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();

        function scroll(timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime;
          //Calculate progress
          const progress = Math.min(timeElapsed / duration, 1);
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress;
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }
        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -300, 800);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 300, 800);
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  font-size: 20px;
}

.left {
  float: left;
  width: 10%;
  height: 200px;
  border: 1px solid black;
}

.internal {
  width: 31.75%;
  height: 100%;
  border: 1px solid black;
  display: inline-block;
}

.center {
  float: left;
  width: 78.9%;
  height: 200px;
  border: 1px solid black;
  margin: 1px;
  overflow: hidden;
  white-space: nowrap;
}

.right {
  float: right;
  width: 10%;
  height: 200px;
  border: 1px solid black;
}
</style>
