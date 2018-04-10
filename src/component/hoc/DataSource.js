export default class DataSource {

  static getUser() {
    return [
      {
        id: 1,
        name: 'name',
        sex: 1
      },
      {
        id: 2,
        name: 'jack',
        sex: 2
      }
    ]
  }

  static getTable() {
    return [
      {
        id: 1,
        name: 'book'
      },
      {
        id: 2,
        name: 'ace'
      }
    ]
  }

}