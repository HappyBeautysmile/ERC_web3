actor {

  var counter : Nat = 0;

  public func count() : async Nat {
    counter += 1;
    return counter;
  }

  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
