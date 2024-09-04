import { it, expect, describe, beforeEach } from 'vitest'
import { useTargetStore } from "../target";
import { createPinia, setActivePinia } from 'pinia';

describe('target', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should clean all the target', () => {
    const { targets, addTarget, createTarget, cleanAllTargets } = useTargetStore()
    addTarget(createTarget({ x: 3, y: 1 }))
    addTarget(createTarget({ x: 4, y: 1 }))

    cleanAllTargets()

    expect(targets.length).toBe(0)
  })
})