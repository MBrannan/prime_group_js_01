function Person (name, number, salary, rating) {
  this.firstName = name;
  this.empNumber = number;
  this.empSalary = salary;
  this.empRating = rating;
  this.bonusPercent = 0;
}

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);
var robert = new Person("Robert", "26835", "66000", 1);
var mayella = new Person("Mayella", "89068", "35000", 2);

var employees = [atticus, jem, boo, scout, robert, mayella];

for (var i = 0; i < employees.length; i++) {
  calcBonus(employees[i]);
}

employees.forEach(function(employee) {
  console.log(employee.firstName, employee.bonusPercent, employee.totalComp, employee.bonusAmount);
});

function calcBonus(employee) {
  switch (employee.empRating) {
    case 1, 2:
      employee.bonusPercent = 0;
      break;
    case 3:
      employee.bonusPercent = .04;
      break;
    case 4:
      employee.bonusPercent = .06;
      break;
    case 5:
      employee.bonusPercent = .1;
      break;
    default:
      employee.bonusPercent = 0;
  };
  if (employee.empNumber.length === 4) {
    employee.bonusPercent += .05;
  }

  if (employee.empSalary > 65000) {
    employee.bonusPercent -= .01;
  }

  if (employee.bonusPercent > .13) {
    employee.bonusPercent = .13;
  } else if (employee.bonusPercent < 0) {
    employee.bonusPercent = 0;
  }

  employee.bonusPercent * 100;

  employee.totalComp = (Math.round(employee.empSalary * 100) * (1 + employee.bonusPercent) / 100);

  employee.bonusAmount = (Math.round(employee.bonusPercent * employee.empSalary));

  return employee.empBonus;
};

var bonusTable = "";

bonusTable += "<table><tr><th>Name</th><th>Bonus Percentage</th><th>Total Compensation</th><th>Total Bonus</th></tr>"
employees.forEach(function(employee) {
  var badBonus = "class=\"badBonus\"";
  badBonus = employee.bonusAmount === 0 ? "class=\"badBonus\"" : "class=\"goodBonus\"";
  bonusTable += "<tr " + badBonus + "><td>" + employee.firstName +
      "</td>" +
      "<td>" +
        employee.bonusPercent +
      "</td>" +
      "<td>" +
        employee.totalComp +
      "</td>" +
      "<td>" +
        employee.bonusAmount
      "</td>" +
    "</tr>"
});
bonusTable += "</table>";

document.getElementById('bonusTable').innerHTML = bonusTable;
