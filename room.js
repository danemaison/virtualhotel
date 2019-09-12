class Room {
  constructor (number, checkout) {
    this.roomNumber = number;
    this.isVacant = true;
    this.customer = null;

    this.checkout = checkout;
    this.removeCustomer = this.removeCustomer.bind(this);
  }

  addCustomer (customer) {
    this.isVacant = false;
    this.customer = customer;
    this.customer.roomNumber = this.roomNumber;
    this.customer.leaveRoom = this.removeCustomer;
  }

  removeCustomer (checkout) {
    this.isVacant = true;
    this.customer.roomNumber = null;

    if (checkout) {
      console.log('Customer is checking out');
      this.checkout(this.customer);
    } else {
      console.log('Customer leaving room');
    }
    this.customer = null;
  }

  toString () {
    return `Room #${this.roomNumber} is ${(this.isVacant) ? 'vacant' : 'occupied'}`;
  }
}
