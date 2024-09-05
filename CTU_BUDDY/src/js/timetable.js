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
      "Group Study",
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
      "Group Study",
      "IBP412<br /><small>Practical</small>",
      "IBP412<br /><small>Practical</small>",
      "IBP412<br /><small>Practical</small>",
      "Group Study",
      "MDA412<br /><small>Theory</small>",
      "MDA412<br /><small>Theory</small>",
      "MDA412<br /><small>Practical</small>",
    ],
    thursday: [
      "MDA412<br /><small>Theory</small>",
      "MDA412<br /><small>Theory</small>",
      "MDA412<br /><small>Practical</small>",
      "Group Study",
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
        let course = programming_found[currentday][currentcourse];
        module.innerHTML = course;
        if (course === "Group Study") {
          module.style.backgroundColor = "#feaf73";
        } else if (course == "Research") {
          module.style.backgroundColor = "#9ac2ff";
        }
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
        let course = proj_management[currentday][currentcourse];
        module.innerHTML = course;
        module.style.backgroundColor = "#ffffff";
        if (course === "SUPPORT") {
          module.style.backgroundColor = "#feaf73";
        }
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
        let course = cybersec[currentday][currentcourse];
        module.innerHTML = course;
        currentcourse++;
        module.style.backgroundColor = "#ffffff";
        if (course === "Group Study") {
          module.style.backgroundColor = "#feaf73";
        }
        if (course == "Research") {
          module.style.backgroundColor = "#9ac2ff";
        }
      }
      currentday++;
    }
  }

  if (mySelect.value === "IT Technical Support") {
    let currentday = 0;
    for (const courses of total_modules) {
      let currentcourse = 0;

      for (const module of courses) {
        let course = it_support[currentday][currentcourse];
        module.innerHTML = course;
        currentcourse++;
        module.style.backgroundColor = "#ffffff";
        if (course === "Group Study") {
          module.style.backgroundColor = "#feaf73";
        }
        if (course == "Research") {
          module.style.backgroundColor = "#9ac2ff";
        }
      }
      currentday++;
    }
  }
});
