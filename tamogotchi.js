//1 
const tamogotchi = {
    name: 'Bob',
    meal: 3,
    energy: 3,
    mood: 3,
       getStatus: function () {
        if (this.meal <= 0 || this.mood <= 0 || this.mood <= 0) {
          return `[Имя] умер :(`
        }
        if (this.meal < 3) {
          this.meal = `Я голоден (${this.meal})`
        } else {
          this.meal = `Я не голоден (${this.meal})`
        }
        if (this.energy < 3) {
          this.energy = `Я хочу спать (${this.energy})`
        } else {
          this.energy = `Я не хочу спать (${this.energy})`
        }
        if (this.mood < 3) {
          this.mood = `Мне скучно (${this.mood})`
        } else {
          this.mood = `Мне весело (${this.mood})`
        }
          return `Имя:${this.name}, Еда:${this.meal}, Энергия:${this.energy}, Настроение:${this.mood}`
    },
       setName: function (newName) {
      this.name = newName
      return newName
    },
       eat: function () {
        if (this.meal < 5) {
          this.meal = this.meal + 1
          this.mood = this.mood -1
        } else {
          this.meal = this.meal
          this.mood = this.mood -1
        }
    },
       sleep: function () {
        if (this.energy < 5) {
          this.energy = this.energy + 1
          this.meal = this.meal -1
        } else {
          this.energy = this.energy
          this.meal = this.meal - 1
        }
    },
       play: function () {
        if (this.mood < 5) {
          this.mood = this.mood + 1
          this.energy = this.energy - 1
        } else {
          this.mood = this.mood
          this.energy = this.energy - 1
        }
       },
       dance: function () {
        this.meal = this.meal + 2
        this.energy = this.energy + 2
        this.mood = this.mood + 2
       }
  }

  console.log(tamogotchi.getStatus())
