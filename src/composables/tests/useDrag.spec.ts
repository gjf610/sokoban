import { it, expect, describe, beforeEach } from 'vitest'
import { useDragStore } from '../useDrag'
import { createPinia, setActivePinia } from 'pinia'


describe('useDrag', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should start drag', () => {
    const { startDrag, isDragging } = useDragStore()

    startDrag()

    expect(isDragging()).toBe(true)
  })

  it('should stop drag', () => {
    const { stopDrag, isDragging } = useDragStore()

    stopDrag()

    expect(isDragging()).toBe(false)
  })
})