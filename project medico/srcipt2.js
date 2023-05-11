//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAH51iDnyEnx9Crc0kv_LRnpPYaMFzri2E",
    authDomain: "medclbkey-18b9e.firebaseapp.com",
    databaseURL: "https://medclbkey-18b9e-default-rtdb.firebaseio.com",
    projectId: "medclbkey-18b9e",
    storageBucket: "medclbkey-18b9e.appspot.com",
    messagingSenderId: "991841081525",
    appId: "1:991841081525:web:23bed856435aaafb1b46fc",
    measurementId: "G-3JL9M29ZJP"
  };

  //initializing
  firebase.initializeApp(firebaseConfig);
   
  bookDB = firebase.database().ref("booking");

  document.getElementById("booking").addEventListener("submit", submitForm);
  function submitForm(e) 
  { 
    e.preventDefault();
  var name = getElementVal("name"); var mail = getElementVal("mail"); 
  var number=getElementVal("number"); var dob=getElementVal("dob");
  saveMessages(name, mail, number,dob);
  // enable alert document.querySelector(".alert").style.display = "block";
  // remove the alert setTimeout(() => { document.querySelector(".alert").style.display = "none"; }, 3000);
  // reset the form document.getElementById("contactForm").reset();
}
  const saveMessages = (name, mail,number,dob) => { var book1 = bookDB.push();
  book1.set({ name: name, mail: mail, number:number,dob:dob, });};
  const getElementVal = (id) => { return document.getElementById(id).value;};
