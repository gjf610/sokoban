import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, it, expect, describe, vi } from 'vitest'
import { useMapEditStore } from '../mapEdit'

describe('map edit', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should init map', () => {
    const { initMap, map } = useMapEditStore()
    const row = 8
    const col = 8

    initMap()

    expect(map.length).toBe(row)
    expect(map[0].length).toBe(col)

  })
})