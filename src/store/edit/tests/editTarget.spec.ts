import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, it, expect, describe } from 'vitest'
import { useEditTargetStore } from '../editTarget'

describe('edit target', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should  remove a target', () => {
    const { addTarget, createTarget, targets, removeTarget } = useEditTargetStore()

    const target = createTarget({ x: 2, y: 2 })

    addTarget(target)

    removeTarget(target)

    expect(targets.length).toBe(0)
  })


})


