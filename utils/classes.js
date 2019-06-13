export class GameNumber {
  constructor(value, index, items) {
    this.value = Number(value)
    this.index = index // TODO: remove index

    this.visible = true
    this.selected = false
  }

  toggle() {
    if (this.visible) {
      this.selected = !this.selected
    }
  }

  hide() {
    this.visible = false
    this.selected = false
  }

  get siblings() {
    return 'test'
  }
}

export class Game {
  constructor(numbers = []) {
    this.items = []
    this.addNumbers(numbers)
  }

  addNumbers(numbers = []) {
    numbers.forEach(number => {
      this.items.push(new GameNumber(number, this.items.length))
    })
  }

  addNumber(number) {
    this.items.push(new GameNumber(number))
  }

  select({ index }) {
    this.items[index].toggle()

    const [first, second] = this.selected

    if (first && second) {
      if (this.check()) {
        first.hide()
        second.hide()
      } else {
        first.toggle()
        second.toggle()
      }
    }
  }

  check() {
    const [first, second] = this.selected
    if (this.isSiblings()) {
      if (first.value === second.value) {
        return true
      } else if (first.value + second.value === 10) {
        return true
      }
    } else {
      return false
    }
  }

  isSiblings() {
    const [first, second] = this.selected
    const visibleIndex = [
      this.visible.indexOf(first),
      this.visible.indexOf(second)
    ]

    if (Math.abs(visibleIndex[0] - visibleIndex[1]) === 1) {
      return true
    } else if (
      this.upperNumberIndex(first) === second.index ||
      this.lowerNumberIndex(first) === second.index
    ) {
      return true
    } else {
      return false
    }
  }

  upperNumberIndex(number) {
    let index = this.items.indexOf(number)

    do {
      index = index - 9
    } while (this.items[index] && !this.items[index].visible)

    return index
  }

  lowerNumberIndex(number) {
    let index = this.items.indexOf(number)

    do {
      index = index + 9
    } while (this.items[index] && !this.items[index].visible)

    return index
  }

  get selected() {
    return this.items.filter(item => item.selected)
  }

  get visible() {
    return this.items.filter(item => item.visible)
  }

  duplicate() {
    this.addNumbers(this.visible.map(item => item.value))
  }
}
