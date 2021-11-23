// class Dispositivo

class InputDevice {
  constructor(entraceType, mark) {
    this.entraceType = entraceType;
    this.mark = mark;
  }
  get _entraceType() {
    return this.entraceType;
  }
  set _entraceType(entraceType) {
    this.entraceType = entraceType;
  }
  get _mark() {
    return this.mark;
  }
  set _mark(mark) {
    this.mark = mark;
  }
}

// class mouse

class Mouse extends InputDevice {
  static counterMice = 0;
  constructor(entraceType, mark) {
    super(entraceType, mark);
    this.idMouse = ++Mouse.counterMice;
  }
  get _idMouse() {
    return this.idMouse;
  }
  toString() {
    return `Mouse:[idMouse ${this.idMouse}, EntraceType: ${this.entraceType}, Mark: ${this.mark}] \n`;
  }
}

// class keyboard

class Keyboard extends InputDevice {
  static keyboardCounter = 0;
  constructor(entraceType, mark) {
    super(entraceType, mark);
    this.idKeyBoard = ++Keyboard.keyboardCounter;
  }
  get _idKeyBoard() {
    return this.idKeyBoard;
  }
  toString() {
    return `KeyBoard:[idKeyBoard  ${this.idKeyBoard} , EntraceType: ${this.entraceType}, Mark: ${this.mark}]`;
  }
}

// class independent monitor

class Monitor {
  static counterMonitors = 0;
  constructor(mark, size) {
    this.idMonitor = ++Monitor.counterMonitors;
    this.mark = mark;
    this.size = size;
  }
  get _idMonitor() {
    return this.idMonitor;
  }
  set _mark(mark) {
    this.mark = mark;
  }
  get _mark() {
    return this.mark;
  }
  set _size(size) {
    this.size = size;
  }
  get _size() {
    return this.size;
  }
  toString() {
    return `Monitor: [idMonitor ${this.idMonitor} Mark: ${this.mark} Size: ${this.size}]`;
  }
}

class Computer {
  static computerCounter = 0;

  constructor(name, monitor, mouse, keyboard) {
    this.idComputer = ++Computer.computerCounter;
    this.name = name;
    this.monitor = monitor;
    this.keyboard = keyboard;
    this.mouse = mouse;
  }
  get _idComputer() {
    return this.idComputer;
  }
  set _name(name) {
    this.name = name;
  }
  get _name() {
    return this.name;
  }
  set _monitor(monitor) {
    this.monitor = monitor;
  }
  get _monitor() {
    return this.monitor;
  }
  set _keyboard(keyboard) {
    this.keyboard = keyboard;
  }
  get _keyboard() {
    return this.keyboard;
  }
  set _mouse(mouse) {
    this.mouse = mouse;
  }
  get _mouse() {
    return this.mouse;
  }

  toString() {
    return `\n Computer: ${this._idComputer} ${this._name} \n
 ${this._monitor} \n ${this._keyboard} \n ${this._mouse}`;
  }
}

// Class Orden
class Order {
  static orderCounter = 0;

  constructor() {
    this.idOrder = ++Order.orderCounter;
    this.computers = [];
  }
  get _orderCounter() {
    return this.orderCounter;
  }
  set _computers(computers) {
    this.computers = computers;
  }
  agregarComputadora(computer) {
    this.computers.push(computer);
  }
  mostrarOrden() {
    let mostrarComputer = "";
    for (let computer of this.computers) {
      mostrarComputer += computer.toString();
    }
    return ` Order: ${this.idOrder} \n${mostrarComputer}`;
  }
}


// Create object class
// object mouse
let mouse1 = new Mouse("USB", "HP");
let mouse2 = new Mouse("Bluetooth", "Dell");

console.log(`${mouse1}`);
console.log(`${mouse2}`);

// object keyboard
let keyboard1 = new Keyboard("Bluetooth", "MSI");
let keyboard2 = new Keyboard("USB", "Acer");

console.log(`${keyboard1}`);
console.log(`${keyboard2}`);


// object monitor 
let monitor1 = new Monitor("Dell", 28);
let monitor2 = new Monitor("Hp", 27);

console.log(`${monitor1}`);

// Object Computer
let computer1 = new Computer("HP", monitor1, mouse1, keyboard1);
let computer2 = new Computer("Armada", monitor2, mouse2, keyboard2);

console.log(`${computer1}`);
console.log(`${computer2}`);


// Object order
let order1 = new Order();
order1.agregarComputadora(computer1);
order1.agregarComputadora(computer2);

console.log(order1.mostrarOrden());
