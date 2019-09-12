class Hotel{
  constructor() {
    this.rooms = [];
    this.customers = [];

    this.checkOutCustomer = this.checkOutCustomer.bind(this);

  }
  createRooms(roomAmount) {
    for (var roomIndex = 1 ; roomIndex <= roomAmount ; roomIndex++) {
      var newRoom = new Room(roomIndex, this.checkOutCustomer);
      this.rooms.push(newRoom);
    }
  }
  checkInCustomer() {
    //Check for available rooms
    for (var customerIndex = 0 ; customerIndex < this.rooms.length ; customerIndex++) {
      if (this.rooms[customerIndex].isVacant) {
        var newCustomer = new Customer(customerIndex, this.checkOutCustomer);
        this.customers.push(newCustomer);
        this.rooms[customerIndex].addCustomer(newCustomer);
        break;
      }
    }
  }
  checkOutCustomer(customer) {
    for(var i = 0; i < this.customers; i++){
      if(this.customers[i] === customer){
        console.log('Rest in peace Customer');
        delete this.customers[i];
        break;
      }
    }
  }
}
