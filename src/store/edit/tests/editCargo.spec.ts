import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, it, expect, describe } from 'vitest'
import { useEditCargoStore } from '../editCargo'

describe('edit cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should remove a cargo', () => {
    const { cargos, removeCargo, addCargo, createCargo } = useEditCargoStore()
    const cargo = createCargo({ x: 1, y: 1 })

    addCargo(cargo)

    removeCargo(cargo)

    expect(cargos.length).toBe(0)
  })
})


