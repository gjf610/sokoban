import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target'
import { useGameStore } from '../game';
import { createPinia, setActivePinia } from 'pinia';
import { useMapStore } from '../map';
import { usePlayerStore } from '../player';
import { LevelGameData } from '../../game/gameData';
const firstGameData = {
  player: {
    x: 1,
    y: 1
  },
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  cargos: [
    { x: 2, y: 2 },
    { x: 3, y: 3 }
  ],
  targets: [
    { x: 4, y: 3 },
    { x: 6, y: 3 }
  ]
}
const secondLevelGameData = {
  player: {
    x: 2,
    y: 1
  },
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  cargos: [
    { x: 2, y: 2 },
    { x: 3, y: 3 }
  ],
  targets: [
    { x: 4, y: 3 },
    { x: 6, y: 3 }
  ]
}
const gameData = [firstGameData, secondLevelGameData]
describe('game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    let map = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ]
    const { setupMap } = useMapStore()
    setupMap(map)

  })
  it('should the game completed', () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)

    const { addTarget, createTarget } = useTargetStore()
    addTarget(createTarget({ x: 3, y: 1 }))
    moveCargo(cargo, 1, 0)

    const { detectionGameCompleted, game } = useGameStore()

    detectionGameCompleted()
    expect(game.isGameCompleted).toBe(true)
  })
  it('should not the game completed', () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)

    const { addTarget, createTarget } = useTargetStore()
    addTarget(createTarget({ x: 3, y: 1 }))
    moveCargo(cargo, 1, 0)
    moveCargo(cargo, 1, 0)

    const { detectionGameCompleted, game } = useGameStore()

    detectionGameCompleted()
    expect(game.isGameCompleted).toBe(false)
  })
  it('should set up game', () => {
    const { setupGame } = useGameStore()

    setupGame(gameData)

    expectLevelGamed(firstGameData)
  })
  it('should to next level', () => {
    const { setupGame, toNextLevel, game } = useGameStore()

    setupGame(gameData)

    toNextLevel()

    expect(game.level).toBe(2)
    expectLevelGamed(secondLevelGameData)
  })
  it('should reset game completed when to next level', () => {
    const { setupGame, toNextLevel, game } = useGameStore()
    game.isGameCompleted = true

    setupGame(gameData)

    toNextLevel()

    expect(game.isGameCompleted).toBe(false)

  })
})

function expectLevelGamed(levelGameData: LevelGameData) {
  const { player } = usePlayerStore()
  const { map } = useMapStore()
  const { cargos } = useCargoStore()
  const { targets } = useTargetStore()

  expect(player.x).toBe(levelGameData.player.x)
  expect(player.y).toBe(levelGameData.player.y)
  expect(map).toEqual(levelGameData.map)
  expect(cargos.length).toBe(levelGameData.cargos.length)
  expect(targets.length).toBe(levelGameData.targets.length)
}