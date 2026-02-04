const person = {
  species: "Human",
  breath() {
    return "Breathing...";
  },
};

const employee = Object.create(person);
employee.company = "Tech Corp";
employee.position = "Developer";

const manager = Object.create(employee);
manager.department = "Engineering";
manager.team = [];

manager.addTeamMember = function (name) {
  this.team.push(name);
  console.log(`${name} added to the team.`);
};

manager.addTeamMember("Eric");
console.log("Manager Dept:", manager.department);
console.log("Manager Company:", manager.company);
console.log("Manager Species:", manager.species);
console.log("Has team property?", manager.hasOwnProperty("team"));
