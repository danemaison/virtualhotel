class Customer{
  constructor(roomNumber, leave){
    this.roomNumber = roomNumber;
    this.leave = leave;
  }
  orderRoomService(){
    //
  }
  leaveRoom(){
    console.log("Customer leaving room  ", this.roomNumber)
    this.leave();
  }
}
