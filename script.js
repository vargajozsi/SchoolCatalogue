// School
// Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
// Getters: all properties have getters
// Setters: the numberOfStudents property has a setter
// Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

//1. Let’s start by making a parent class for Primary, Middle, and High classes.
// Create an empty class named School.
class School {
  //2. Inside the School class, create an empty constructor() that accepts three parameters. The names of these parameters should match the properties listed in the narrative above.
  constructor(name, level, numberOfStudents) {
    // 3. Inside the constructor(), set the School properties. Prepend all of the properties with an underscore (_).
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  //4. Create getters for the name, level, and numberOfStudents properties. Each getter should return the value saved to the property.
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  // 5.Create a setter for numberOfStudents. The method should first check if the input (newNumberOfStudents) is a number...
  set numberOfStudents(numStud) {
    typeof numStud === "number"
      ? (this._numberOfStudents = numStud)
      : console.log("Invalid input: numberOfStudents must be set to a Number.");
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
}
