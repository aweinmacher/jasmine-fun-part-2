var { LinkedList, Node } = require('../modules/LinkedList');

var list = {
  _length: 5,
  head: {
    data: 0,
    next: {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
            next: null
          }
        }
      }
    }
  }
}

describe("CreateList", function () {
  it("Should create an object with an array inside", function () {
    var list = new LinkedList();

    expect(list._length).toBe(0);
    expect(list.head).toBe(null);
  });
});

describe("CreateNode", function () {
  it("Should create a node and append it to the list", function () {
    var element = 5;

    var node = new Node(element);

    expect(node.data).toBe(5);
    expect(node.next).toBe(null);
  });
});


describe('consoleLogAll', function () {
  it('Should console log every element in the list', function () {
    // adds a spy for console.log
    console.log = jasmine.createSpy('log');

    // array with data for building the Linked List
    var arr = [5, 13, 2, 8, 56];

    // creating new Linked List out of the array
    var list = new LinkedList();
    for (i = 0; i < arr.length; i++) {
      list.AddToTheEnd(arr[i]);
    }

    // invoking the tested function
    list.consoleLogAll();

    // we expect console.log of the array we initially used to build the Linked List to be the same as our function
    for (i = 0; i < arr.length; i++) {
      expect(console.log).toHaveBeenCalledWith(arr[i]);
    }

    // make sure we are not consol logging anything else
    expect(console.log).toHaveBeenCalledTimes(list._length);

  });
});