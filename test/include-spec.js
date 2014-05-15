describe("ScriptInclude", function() {

  it("injects <script> tags", function() {
    include("foo.js", "bar.js");
    var $foo = $("script[src='foo.js']");
    var $bar = $("script[src='bar.js']");
    expect($foo).toBeInDOM();
    expect($bar).toBeInDOM();
  });

  it("runs a callback after successfully loading a script", function(done) {
    include("helpers/exists.js", function() {
      done();
    });
  });

  it("runs a callback after failing to load a script", function(done) {
    include("doesnt-exist.js", function() {
      done();
    });
  });

});
