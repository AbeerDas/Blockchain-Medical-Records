const { ethers } = require("hardhat");
const config = require("../medical_records/src/config.json");
const wait = (seconds) => {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function main() {
  const { chainId } = await ethers.provider.getNetwork();
  console.log(`Using chainId ${chainId}`);
  const account = await ethers.getSigners();
  const medical = await ethers.getContractAt(
    "MedicalRecords",
    config[chainId].medical.address
  );
  console.log(`MedicalRecord smart contract fetched at ${medical.address}`);
  let transactionResponse;
  const user1 = account[0];
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Mia Clark",
      29,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Mia John",
      25,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Mia Clark",
      29,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O negative",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "AB positive",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Mia David",
      25,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B negative",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O positive",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "47 James Drive",
      "abeerdas647@gmail.com",
      "647 648 3323",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "24 James Drive",
      "abeerdas647@gmail.com",
      "647 123 3323",
      "O negative",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical.connect(user1).deleteRecord(23);
  await transactionResponse.wait();
  console.log(`Record deleted`);
  transactionResponse = await medical.connect(user1).deleteRecord(22);
  await transactionResponse.wait();
  console.log(`Record deleted`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });