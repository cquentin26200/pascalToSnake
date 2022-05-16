import assert from "assert";
import {pascalToSnake} from '../js/app.js';

describe("pascalToSnake", function () {
  it("should return test_controller", function () {
    assert.equal(pascalToSnake('TestController'), "test_controller");
  });
  it("should return movie_and_book", function () {
    assert.equal(pascalToSnake("MovieAndBook"), "movie_and_book");
  });
  it("should return app7_test", function () {
    assert.equal(pascalToSnake("App7_Test"), "app7_test");
  });
  it("should return home", function () {
    assert.equal(pascalToSnake("Home"), "home");
  });
  it("should return play-movie", function () {
    assert.equal(pascalToSnake("Play5Movie"), "play5-movie");
  });
  it("should return 1", function () {
    assert.equal(pascalToSnake([1, 9]), "1");
  });
});
