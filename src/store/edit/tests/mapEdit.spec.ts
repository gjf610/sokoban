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
  describe('row', () => {
    it('should add a line when increase', () => {
      const { initMap, updateMapRow, setRow, map } = useMapEditStore()

      initMap(2, 2)

      setRow(4)

      updateMapRow()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })
    it('should remove a line when decrease', () => {
      const { initMap, updateMapRow, setRow, map } = useMapEditStore()

      initMap(3, 3)

      setRow(1)

      updateMapRow()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
        ]
      `)
    })
  })
  describe('col', () => {
    it('should add when increase', () => {
      const { initMap, updateMapCol, setCol, map } = useMapEditStore()

      initMap(2, 2)

      setCol(3)

      updateMapCol()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
          [
            2,
            2,
            2,
          ],
        ]
      `)
    })
    it('should remove when increase', () => {
      const { initMap, updateMapCol, setCol, map } = useMapEditStore()

      initMap(3, 3)

      setCol(2)

      updateMapCol()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })
  })
})