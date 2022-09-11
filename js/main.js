(() => {

  personInfo = "",
  employeeBox = document.querySelector(".employeeBox"),
  hiddenEmployees = document.querySelector(".hiddenEmployees"),
  buttonEvan = document.querySelector("#Evan"),
  buttonDoyeon = document.querySelector("#Doyeon"),
  buttonCarson = document.querySelector("#Carson"),
  buttonAbram = document.querySelector("#Abram");
  toggleState = 0;
  descNumber = 0;

  // Arrays
  const EvanData = [
      0,
      "Evan Hansen is the Chief Creative Director at Apeiron and frequently spearheads projects that clients commission.",
  ]

  const DoyeonData = [
      1,
      // put your life story here
      "Doyeon Kim is the Digital Director at Apeiron and tries to meet the needs of our clients.",
  ]

  const CarsonData = [
      2,
      // put your life story here
      "Carson Fitzgeorge is a 2D Graphics Artist and Wireframe Developer at Apeiron and excels when working with clients in need of website wireframes.",
  ]

  const AbramData = [
      3,
      "Abram Kouwen is a Motion Graphics Designer with years of experience working with major brands. He aspires to convey your message in the best way possible.",
  ]

  // A conversion function that will take the name from the button and return an array based on that name
  function nameConverter(name) {
      if (name === "Evan") {
          return EvanData;
      }
      else if (name === "Doyeon") {
          return DoyeonData;
      }
      else if (name === "Carson") {
          return CarsonData;
      }
      else if (name === "Abram") {
          return AbramData;
      }
  }

  function showEmployee(event, name) {

      // converts the passed in name to an array we can use here
      let employeeData = nameConverter(name);

      // the current info is the documentation we want to use on the page
      let currentInfo = document.createTextNode(employeeData[1]);

      // set the ID of the Div we want to move and make it so that it's visible
      let nameBox = document.querySelector(`#${name}Desc`);


      employeeInfo = nameBox.getElementsByClassName("employeeInfo")[0];

    //If the button hasn't been clicked yet, then add the relative data. When closed, will wipe the data
      if (toggleState == 0) {
        //the button is currently off

        // make it so the box is now visible
        nameBox.classList.remove("hidden");

        // add the info to the webpage
        employeeInfo.append(currentInfo);

        // the button is now on
        toggleState = 1;
      } else if (toggleState == 1) {
        // the button is currently on

        // clean the text
        employeeInfo.innerText = "";
        // make the box invisible. Pretty simple, huh?
        nameBox.classList.add("hidden");

        toggleState = 0;
      }
  }

  
// Button listeners that are connected to the variables up to. Will listen for the click and then do the action
  buttonEvan.addEventListener("click", (event)=>showEmployee(event,"Evan"));
  buttonDoyeon.addEventListener("click", (event)=>showEmployee(event,"Doyeon"));
  buttonCarson.addEventListener("click", (event)=>showEmployee(event,"Carson"));
  buttonAbram.addEventListener("click", (event)=>showEmployee(event,"Abram"));
  
})();

