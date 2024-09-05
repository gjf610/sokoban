import { defineStore } from "pinia";

let isDrag = false
export const useDragStore = defineStore('drag', () => {
  function startDrag() {
    isDrag = true
  }
  function stopDrag() {
    isDrag = false
  }
  function isDragging() {
    return isDrag
  }
  return {
    startDrag,
    stopDrag,
    isDragging
  }
})