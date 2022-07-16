actor App {

  var counter : Nat = 0;
  var last : Nat = 1;

  public func count() : async Nat {
    counter += 1;
    return counter;
  };

  public query func getCount() : async Nat {
    return counter;
  };

  public func reset() : async Nat {
    counter := 0;
    return counter;
  };

  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public func next() : async Nat {
    last *= await Counter.inc();
    return last;
  }
};

ignore await App.next();
ignor await App.next();
await App.next();
