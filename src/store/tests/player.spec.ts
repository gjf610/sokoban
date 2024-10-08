import { it, expect, describe, beforeEach } from 'vitest'
import { usePlayerStore } from '../player'
import { createPinia, setActivePinia } from 'pinia'
import { useMapStore } from '../map'
import { useCargoStore } from '../cargo'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('normal move', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    })

    it('should move to left', () => {
      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(0)
    })
    it('should move to right', () => {
      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(2)
    })
    it('should move to up', () => {
      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToUp()

      expect(player.y).toBe(0)
    })
    it('should move to down', () => {
      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToDown()

      expect(player.y).toBe(2)
    })
  })
  describe('collision wall', () => {
    beforeEach(() => {
      let map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ]
      const { setupMap } = useMapStore()
      setupMap(map)
    })
    it('should not move to left when collision a wall', () => {
      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(1)
    })
    it('should not move to right when collision a wall', () => {
      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 3
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(3)
    })
    it('should not move to up when collision a wall', () => {
      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToUp()

      expect(player.y).toBe(1)
    })
    it('should not move to down when collision a wall', () => {
      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 1
      player.y = 3

      movePlayerToDown()

      expect(player.y).toBe(3)
    })
  })
  describe('push a cargo', () => {
    beforeEach(() => {
      let map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ]
      const { setupMap } = useMapStore()
      setupMap(map)
    })
    it('should push a cargo to left', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)


      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 3
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(1)

    })
    it('should push a cargo to right', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)


      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(3)

    })

    it('should push a cargo to up', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)


      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 1
      player.y = 3

      movePlayerToUp()

      expect(player.y).toBe(2)
      expect(cargo.y).toBe(1)

    })

    it('should push a cargo to down', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)


      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToDown()

      expect(player.y).toBe(2)
      expect(cargo.y).toBe(3)

    })
    it('fix square map', () => {
      let map = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ]
      const { setupMap } = useMapStore()
      setupMap(map)

      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 3
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(4)
    })
    it('should not push cargo when the cargo hits wall', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 1 })
      addCargo(cargo)


      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 2
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(1)
    })
    it('should not push cargo when the cargo hits other cargo', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)
      addCargo(createCargo({ x: 3, y: 1 }))

      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(1)
      expect(cargo.x).toBe(2)
    })
  })
})