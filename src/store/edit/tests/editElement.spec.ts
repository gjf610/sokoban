import { it, expect, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import { floorEditElement, useEditElementStore, wallEditElement } from '../editElement';
import { useMapEditStore } from '../mapEdit';
import { MapTile } from '@/store/map';

describe('editElement', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const { initMap } = useMapEditStore()

    initMap()
  })
  it('should change to the wall element when current selector element is wall', () => {
    const { map } = useMapEditStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    setCurrentSelectedEditElement(wallEditElement)

    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.WALL)
  })
  it('should change to the floor element when current selector element is wall', () => {
    const { map } = useMapEditStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    setCurrentSelectedEditElement(floorEditElement)

    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.FLOOR)
  })
})