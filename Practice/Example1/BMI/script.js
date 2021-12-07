function pound2kg(pound) {
  const POUND_TO_KG = 0.453592;
  return pound * POUND_TO_KG;
}

function inch2meter(inch) {
  const INCH_TO_METER = 0.0254;
  return inch * INCH_TO_METER;
}

function getBMI(user) {
  let kg = pound2kg(user.weight);
  let meter = inch2meter(user.height);
  return kg / Math.pow(meter, 2);
}

users = [
  { id: 1, weight: 40.25, height: 40.75 },
  { id: 2, weight: 36.5, height: 39 },
  { id: 3, weight: 51, height: 32 }
];

for (const user of users) {
  console.log(`${user.id}, BMI = ${getBMI(user)}`);
}





