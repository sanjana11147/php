<!DOCTYPE html>
<html>
  <head>
    <script src="scipt.js"></script>
    <title> Sign Up
    </title>
  </head>
  <body>

<?php
$name = $email = $gender = "";
if ($_SERVER["REQUEST_METHOD"] == "POST" ){
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>  


    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"  name="userRegForm" onsubmit="return validateForm(this);">
      Full name<br>
      <input type="text" name="name"><br>
      Email id<br>
      <input type="email" name="email" id="email" class="form-control"  autocomplete="false" required pattern="^.{0,64}$" title="Enter an email address with a maximum of 64 characters." oninput="validateEmail(this);" onchange="validateEmail(this);" ><br>
      Username<br>
      <input type="text" name="username"><br>
      Mobile no.<br>
      <input type="number" name="mobile"><br>
      Gender<br>
      <input type="checkbox" name="male" value="male">Male<br>
      <input type="checkbox" name="female" value="female">Female<br>
      <input type="checkbox" name="none" value="none">None<br>
      Password<br>
      <input type="password" name="password" id="password" class="form-control" autocomplete="false" required pattern="^((?=.*[0-9])(?=.*[a-zA-Z])).{6,12}$" title="Enter a password between 6 and 12 characters, containing at least one letter and one number." oninput="validatePassword(this);" onchange="validatePassword(this);" ><br>
      Confirm Password<br>
      <input type="password" name="passwordConfirm" id="passwordConfirm" class="form-control" autocomplete="false" required pattern="^((?=.*[0-9])(?=.*[a-zA-Z])).{6,12}$" title="Passwords must match." oninput="validatePassword(this);" onchange="validatePassword(this);"> <br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
