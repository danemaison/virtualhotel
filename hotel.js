class Hotels {
  constructor() {
    this.rooms = [];
    this.customers = [];

    this.checkOutCustomer = this.checkOutCustomer.bind(this);

  }
  createRooms(roomAmount) {
    for (roomIndex = 1 ; roomIndex <= roomAmount ; roomIndex++) {
      var newRoom = new Room(roomIndex, this.checkOutCustomer);
      this.rooms.push(newRoom);
    }
  }
  checkInCustomer() {
    //Check for available rooms
    for (var customerIndex = 0; customerIndex < this.rooms.length ; customerIndex++) {
      if (this.rooms[customerIndex].isVacant) {
        var newCustomer = new customer(customerIndex, this.checkOutCustomer);
        this.rooms[customerIndex].addCustomer(newCustomer);
      }
    }
  }
  checkOutCustomer(customer) {
    console.log('Rest in peace Customer');
  }

}
