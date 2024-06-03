function ReadAll(){
    let student=JSON.parse(localStorage.getItem('output'));
    console.log(student.name,student.uname,student.password);
    const {name,uname,password,date_picker,checks,phone,email,radios,country,state,Taluk,msg,pin}=student;
    
    document.getElementById('sname').innerHTML=student.name;
    document.getElementById('suname').innerHTML=student.uname;
    document.getElementById('spassword').innerHTML=student.password;
    document.getElementById('sdob').innerHTML=student.date_picker;
    document.getElementById('sskill').innerHTML=student.checks;
    document.getElementById('smobile').innerHTML=student.phone;
    document.getElementById('smail').innerHTML=student.email;
    document.getElementById('sgen').innerHTML=student.radios;
    document.getElementById('scountry').innerHTML=student.country;
    document.getElementById('sstate').innerHTML=student.state;
    document.getElementById('staluk').innerHTML=student.Taluk;
    document.getElementById('sadd').innerHTML=student.msg;
    document.getElementById('spin').innerHTML=student.pin;

    

    
}
     
     
     function send() {
        chat();
        special();
        pass();
        num();
        mail();

        var name=document.querySelector(".name").value;
        var uname=document.querySelector(".uname").value;
        var password=document.querySelector(".password").value;
        var date_picker=document.querySelector(".date_picker").value;
        var checks=document.querySelector(".checks").value;
        var phone=document.querySelector(".phone").value;
        var email=document.querySelector(".email").value;
        var radios=document.querySelector(".radios").value;
        var country=document.querySelector(".country").value;
        var state=document.querySelector(".state").value;
        var Taluk=document.querySelector(".Taluk").value;
        var msg=document.querySelector(".msg").value;
        var pin=document.querySelector(".pin").value;
    
    
        var newobj={id:3, name:name, uname:uname, password:password , date_picker:date_picker, checks:checks, phone:phone, email:email , radios:radios, country:country, state:state, Taluk:Taluk, msg:msg, pin:pin};
       
        localStorage.setItem('output',JSON.stringify(newobj));
        location.href='read.html'
      }

      function chat() {
        var letters = /^[A-Za-z]+$/;

        let name = document.getElementById("name").value;

        if (name.match(letters) && name.length > 5) {
          //document.getElementById('Name').innerHTML='Your name have accepted : you can try another';
          //console.log(document.getElementById('name').value);
          return true;
        } else {
          document.getElementById("Name").innerHTML =
            "Please input alphabet characters only and it should be in between 5-20";
          return false;
        }
      }
      function special() {
        var nospecial = /^[a-z]+$/;
        let uname = document.getElementById("uname").value;
        if (uname.match(nospecial)) {
          //alert('Your name have accepted : you can try another');
          //console.log(document.getElementById('uname').value);
          return true;
        } else {
          document.getElementById("UName").innerHTML =
            "Please note no special character are allowed";
          return false;
        }
      }

      function pass() {
        const password = document.getElementById("password").value;
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password)) {
          document.getElementById("pw").innerHTML =
            "Password must be strong: at least 8 characters, including one uppercase, one lowercase, one number, and one special character.";
          return false;
        } else {
          return true;
        }
      }
      const datePicker = document.getElementById("date_picker");
      const errorMsg = document.getElementById("error-msg");

      datePicker.max = getDate(0); // Today's date
      datePicker.min = getDate(-120 * 365); // 120 years ago

      // Borrowed from https://stackoverflow.com/a/29774197/7290573
      function getDate(days) {
        let date = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
        const offset = date.getTimezoneOffset();
        date = new Date(date.getTime() - offset * 60 * 1000);
        return date.toISOString().split("T")[0];
      }

      datePicker.addEventListener("change", function () {
        const selectedDate = new Date(datePicker.value);
        const minDate = new Date(datePicker.min);
        const maxDate = new Date(datePicker.max);

        if (selectedDate < minDate || selectedDate > maxDate) {
          errorMsg.style.display = "block";
          document.getElementById("error-msg").innerHTML =
            "Please select a valid date (not in the future and within the past 120 years).";
        } else {
          errorMsg.style.display = "none";
        }
      });
      getDate(document.getElementById("date_picker").value);

      const seatplan = document.querySelector(".seatplan");

      seatplan.addEventListener("change", (e) => {
        const checked = seatplan.querySelectorAll("input:checked");
        const unchecked = seatplan.querySelectorAll("input:not(:checked)");
        if (checked.length >= 5) {
          unchecked.forEach((el) => el.setAttribute("disabled", true));
        } else {
          unchecked.forEach((el) => el.removeAttribute("disabled"));
        }
      });

      function num() {
        var numbers = /^[0-9]+$/;
        let phoneno = document.getElementById("phone").value;

        if (phoneno.match(numbers) && phoneno.length <= 10) {
          //document.getElementById('Name').innerHTML='Your name have accepted : you can try another';
          //console.log(document.getElementById('name').value);
          return true;
        } else {
          document.getElementById("ph").innerHTML =
            "Phone number Should be 10 numbers";
          return false;
        }
      }

      function mail() {
        var mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
        let email = document.getElementById("email").value;

        if (email.match(mail)) {
          //document.getElementById('Name').innerHTML='Your name have accepted : you can try another';
          //console.log(document.getElementById('name').value);
          return true;
        } else {
          document.getElementById("em").innerHTML =
            "Mail should be end with .in/.com";
          return false;
        }
      }
    