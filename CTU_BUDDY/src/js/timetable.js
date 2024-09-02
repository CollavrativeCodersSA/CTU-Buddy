// Changing Course name
const course = {
  programming_foundation: {
    monday: [
      "RD412<br/><small>Practical</small>",
      "RD412<br/><small>Practical</small>",
      "ENA412<br /><small>Theory</small>",
      "Group Study",
      "Group Study",
      "CW412<br /><small>Practical</small>",
      "CW412<br /><small>Practical</small>",
      "CW412<br /><small>Practical</small>",
    ],
    tuesday: [
      "RD412<br /><small>Practical</small>",
      "RD412<br /><small>Practical</small>",
      "RD412<br /><small>Practical</small>",
      "Research",
      "",
      "ENA412<br /><small>Practical</small>",
      "ENA412<br /><small>Practical</small>",
      "ENA412<br /><small>Practical</small>",
    ],
    wednesday: [
      "ENA412<br /><small>Theory</small>",
      "ENA412<br /><small>Theory</small>",
      "ENA412<br /><small>Theory</small>",
      "ENA412<br /><small>Theory</small>",
      "",
      "ENA412<br /><small>Practical</small>",
      "ENA412<br /><small>Practical</small>",
      "ENA412<br /><small>Practical</small>",
    ],
    thursday: [
      "ENA412<br /><small>Theory</small>",
      "ENA412<br /><small>Practical</small>",
      "ENA412<br /><small>Practical</small>",
      "Research",
      "",
      "FDM<br /><small>Theory</small>",
      "FDM<br /><small>Theory</small>",
      "FDM<br /><small>Theory</small>",
    ],
    friday: [
      "Group Study",
      "CF412<br /><small>Theory</small>",
      "CF412<br /><small>Practical</small>",
      "CF412<br /><small>Practical</small>",
      "",
      "",
      "",
      "",
    ],
  },
  project_management: {
    monday: ["PMG511", "PMG511", "PMG511", "", "PCM611", "PCM611", "PCM611"],
    tuesday: ["", "", "", "", "MAC611", "MAC611", "MAC611"],
    wednesday: ["BMG511", "BMG611", "BMG611", "", "IPM511", "IPM511", "IPM511"],
    thursday: ["", "", "", "", "FPM511", "FPM511", "FPM511"],
    friday: ["", "", "", "SUPPORT", "SUPPORT", "", ""],
  },
  cyber_security: {
    monday: [
      "ADI632<br/><small>Practical</small>",
      "ADI632<br/><small>Practical</small>",
      "ADI632<br /><small>Theory</small>",
      "ADI632<br/><small>Practical</small>",
      "",
      "ADI632<br/><small>Practical</small>",
      "Group Study",
      "",
    ],
    tuesday: ["", "", "", "", "", "", "", ""],
    wednesday: [
      "AD632<br /><small>Practical</small>",
      "AD632<br /><small>Practical</small>",
      "AD632<br /><small>Practical</small>",
      "AD632<br /><small>Practical</small>",
      "",
      "AD632<br /><small>Practical</small>",
      "Group Study",
      "",
    ],
    thursday: [
      "AD632<br /><small>Practical</small>",
      "AD632<br /><small>Practical</small>",
      "AD632<br /><small>Practical</small>",
      "AD632<br /><small>Practical</small>",
      "",
      "AD632<br /><small>Practical</small>",
      "Group Study",
      "",
    ],
    friday: [
      "CSP632<br /><small>Theory</small>",
      "CSP632<br /><small>Theory</small>",
      "CSP632<br /><small>Practical</small>",
      "CSP632<br /><small>Practical</small>",
      "",
      "CSP632<br /><small>Practical</small>",
      "Research",
      "",
    ],
  },
  IT_technical_support: {
    monday: [
      "PS412<br /><small>Theory</small>",
      "PS412<br /><small>Theory</small>",
      "PS412<br /><small>Practical</small>",
      "Group study<br /><small>ML1</small>",
      "PS412<br /><small>Practical</small>",
      "PS412<br /><small>Theory</small>",
      "PS412<br /><small>Theory</small>",
      "Research",
    ],
    tuesday: [
      "FOCUS ON",
      "INTERNATIONAL",
      "PREPARATIONS<br />MD-102",
      "",
      "IBP412<br /><small>Practical</small>",
      "IBP412<br /><small>Practical</small>",
      "IBP412<br /><small>Practical</small>",
      "",
    ],
    wednesday: [
      "Group study<br /><small>ML1</small>",
      "IBP412<br /><small>Practical</small>",
      "IBP412<br /><small>Practical</small>",
      "IBP412<br /><small>Practical</small>",
      "Group study<br /><small>ML1</small>",
      "MDA412<br /><small>Theory</small>",
      "MDA412<br /><small>Theory</small>",
      "MDA412<br /><small>Practical</small>",
    ],
    thursday: [
      "MDA412<br /><small>Theory</small>",
      "MDA412<br /><small>Theory</small>",
      "MDA412<br /><small>Practical</small>",
      "Group study<br /><small>ML1</small>",
      "",
      "FDM411<br /><small>Theory</small>",
      "FDM411<br /><small>Theory</small>",
      "FDM411<br /><small>Theory</small>",
    ],
    friday: [
      "Group Study",
      "Lab Session",
      "Lab Session",
      "Lab Session",
      "",
      "Research",
      "Research",
      "Research",
    ],
  },
};
const mySelect = document.getElementById("mySelect");
const monday_courses = document.querySelectorAll(".monday-course");
const tuesday_courses = document.querySelectorAll(".tuesday-course");
const wednesday_courses = document.querySelectorAll(".wednesday-course");
const thursday_courses = document.querySelectorAll(".thursday-course");
const friday_courses = document.querySelectorAll(".friday-course");

const total_modules = [
  monday_courses,
  tuesday_courses,
  wednesday_courses,
  thursday_courses,
  friday_courses,
];

const programming_found = Object.values(course.programming_foundation);
const proj_management = Object.values(course.project_management);
const cybersec = Object.values(course.cyber_security);
const it_support = Object.values(course.IT_technical_support);

mySelect.addEventListener("change", () => {
  if (mySelect.value === "Programming Foundation") {
    let currentday = 0;
    for (const courses of total_modules) {
      let currentcourse = 0;
      for (const module of courses) {
        module.innerHTML = programming_found[currentday][currentcourse];
        currentcourse++;
      }
      currentday++;
    }
  }
  if (mySelect.value === "Project Management") {
    let currentday = 0;
    for (const courses of total_modules) {
      let currentcourse = 0;

      for (const module of courses) {
        module.innerHTML = proj_management[currentday][currentcourse];
        currentcourse++;
      }
      currentday++;
    }
  }
  if (mySelect.value === "Cyber Security") {
    let currentday = 0;
    for (const courses of total_modules) {
      let currentcourse = 0;

      for (const module of courses) {
        module.innerHTML = cybersec[currentday][currentcourse];
        currentcourse++;
      }
      currentday++;
    }
  }

  if (mySelect.value === "IT Technical Support") {
    let currentday = 0;
    for (const courses of total_modules) {
      let currentcourse = 0;

      for (const module of courses) {
        module.innerHTML = it_support[currentday][currentcourse];
        currentcourse++;
      }
      currentday++;
    }
  }
  // for (const x of monday_courses) {
  //   x.innerHTML = programming_found.monday[index];
  //   index++;
  // }
  // for (const x of tuesday_courses) {
  //   x.innerHTML = programming_found.tuesday[index];
  //   index++;
  // }
  // for (const x of wednesday_courses) {
  //   x.innerHTML = programming_found.wednesday[index];
  //   index++;
  // }

  // if (mySelect.value === "Project Management") {
  //   for (const x of monday_courses) {
  //     console.log(x);
  //     x.innerHTML = proj_management.monday[index];
  //     index++;
  //   }
  // }
});
