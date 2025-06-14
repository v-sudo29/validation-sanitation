class UsersStorage {
  storage: {}
  id: number

  constructor() {
    this.storage = {}
    this.id = 0
  }

  addUser({ firstName, lastName }) {
    const id = this.id
    this.storage[id] = { id, firstName, lastName }
    this.id++
  }

  getUsers() {
    return Object.values(this.storage)
  }

  getUser(id) {
    return this.storage[id]
  }

  updateUser(id, { firstName, lastName }) {
    this.storage[id] = { id, firstName, lastName }
  }

  deleteUser(id) {
    delete this.storage[id]
  }
}

// Rather than exporting the class, we can export an instances of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern
export default new UsersStorage()
