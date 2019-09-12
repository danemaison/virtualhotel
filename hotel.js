class Hotels {
  constructor() {
    this.rooms = [];
    this.customers[];

    this.checkOutCustomer = this.checkOutCustomer.bind(this);

  }
  createRooms(roomAmount) {
    for (roomIndex = 1 ; roomIndex <= roomAmount ; roomIndex++) {
      var newRoom = new Room(i, this.checkOutCustomer);
      this.rooms.push(newRoom);
    }
  }
  checkInCustomer() {
    //Check for available rooms
    for (var customerIndex = 0 ; i < this.rooms.length ; customerIndex++) {
      if (this.rooms[i].isVacant) {
        var newCustomer = new customer(i, this.checkOutCustomer);
        this.rooms[i].addCustomer(newCustomer);
      }
    }
  }
  checkOutCustomer(customer) {
    console.log('Rest in peace Customer');
  }


}
