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
  set numberOfStudents(newNumber) {
    typeof newNumber === "number"
      ? (this._numberOfStudents = newNumber)
      : console.log("Invalid input: numberOfStudents must be set to a Number.");
  }
  //6.Under your getters, create a method named quickFacts that logs the following string to the console:
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

  //7.Under .quickFacts(), create a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings...
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNum = Math.floor(
      Math.random() * (substituteTeachers.length - 1)
    );
    return substituteTeachers[randomNum];
  }
}

//8. Next, we’ll build a PrimarySchool class that extends School. If you feel comfortable building the PrimarySchool class on your own, give it a shot. If not, use the steps below to help you along the way.
class PrimarySchool extends School {
  //9.Inside the PrimarySchool class, create a constructor() that accepts three arguments.
  constructor(name, numberOfStudents, pickupPolicy) {
    //10.Call super on the first line of the PrimarySchool‘s constructor(). Pass it any arguments that the parent constructor() uses.
    super(name, "primary", numberOfStudents);
    //11.Use the remaining argument to set the pickupPolicy property.
    this._pickupPolicy = pickupPolicy;
  }
  //12.Since our PrimarySchool class inherits Schools‘s properties and getters, we only need to create one new getter in the PrimarySchool class. Add this getter to the PrimarySchool class. Each getter should return the value saved to that property.
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//13. In this task, you will create a HighSchool class that extends the School class. In addition to the properties, getters, and methods in School, the HighSchool includes the following:
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
    console.log(this._sportsTeams);
  }
}

//19. Nice work! If you’ve made it this far, you have a strong understanding of class syntax and inheritance. If you would like to continue working on this project, we have listed some avenues to build on your progress...
class MiddleSchool extends School {
  constructor() {}
}

//14.Create a PrimarySchool instance with the following properties: Name: 'Lorraine Hansbury'
// Number of Students: 514 Pickup Policy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
// Save the instance to a constant variable named lorraineHansbury.
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
//15. Call .quickFacts() on the lorraineHansbury instance.
lorraineHansbury.quickFacts();
// 16. The principal of Lorraine Hansbury needs a substitute teacher for the day...
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

//17. Create a HighSchool instance with the following properties:
// Name: 'Al E. Smith' Number of Students: 415 Sports Teams: ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'] Save the instance to a constant variable named alSmith.
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
//18. Get the value saved to the sportsTeams property in alSmith.
console.log(alSmith.sportsTeams);
