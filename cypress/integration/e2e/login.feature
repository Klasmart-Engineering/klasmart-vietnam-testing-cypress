Feature: Login

  #User should be able to sing in without any problem and have access according permissions UD-T17

  @smoke
  Scenario: Login with custom credentials
    Given I click can't find your country or region
    When I enter custom email as "lorenab+custom@bluetrailsoft.com"
    Then I enter custom password as "Custom01!"
    And I should see custom welcome message


  # User should not being able to signin UD-T18
  @smoke
  Scenario: Login with invalid profile
    Given I click can't find your country or region
    When I enter invalid email as "lorenab+invalid@bluetrailsoft.com"
    Then I enter invalid password as "Invalid01!"
    And I should see the invalid message "Hi cadet!"


  #User should be able to sing in without any problem and have access according permissions UD-T16
  @smoke
  Scenario: Login with student credentials
    Given I click can't find your country or region
    When I enter student email as "lorenab+student@bluetrailsoft.com"
    Then I enter student password as "Student01!"
    And I should see student welcome message


  #User should be able to sing in without any problem and have access according permissions UD-T15
  @smoke
  Scenario: Login with parent credentials
    Given I click can't find your country or region
    When I enter parent email as "lorenab+parent@bluetrailsoft.com"
    Then I enter parent password as "Parent01!"
    And I should see parent welcome message "👋 Welcome Parent, how are you doing today?"


  #User should be able to sing in without any problem and have access according permissions UD-T14
  @smoke
  Scenario: Login with teacher credentials
    Given I click can't find your country or region
    When I enter teacher email as "lorenab+teacher@bluetrailsoft.com"
    Then I enter teacher password as "Teacher01!"
    And I should see teacher welcome message


  #User should be able to sing in without any problem and have access according permissions UD-T13
  @smoke
  Scenario: Login with school admin credentials
    Given I click can't find your country or region
    When I enter school admin email as "lorenab+schooladmin@bluetrailsoft.com"
    Then I enter school admin password as "Schooladmin01!"
    And I should see school admin welcome message "👋 Welcome School Admin, how are you doing today?"


  # User should be able to sing in without any problem and have access according permissions UD-T12
  @smoke
  Scenario: Login with organization admin credentials
    Given I click can't find your country or region
    When I enter organization admin email as "lorenab+organization@bluetrailsoft.com"
    Then I enter organization admin password as "Organization01!"
    #  And I should see organization admin welcome message "Good Evening, Organization Admin"
    And I should see organization admin welcome message "👋 Welcome Organization Admin, how are you doing today?"


  #User should be able to sing in without any problem and have access according permissions UD-T5
  Scenario: Login with valid credentials
    Given I click can't find your country or region
    When I enter a valid email as "lorenab+organization@bluetrailsoft.com"
    Then I enter a valid password as "Organization01!"
    And I should see the "Home" tab and "👋 Welcome Organization Admin, how are you doing today?" message


  #User should not be able to sing in with invalid credentials UD-T6
  @smoke
  Scenario: Login with invalid email/phone
    Given I click can't find your country or region
    When I enter an invalid email as "lo$#$%$!"
    Then I enter an invalid password as "ER34!$%/&()'¿.,0"
    And I should see the error message "Please enter a valid email address"


  #User should not be able to sing in with empty credentials UD-T9
  @smoke
  Scenario: Login with empty credentials
    Given I click can't find your country or region
    When I enter an invalid email as "   "
    Then I enter an invalid password as "   "
    And I should see the error message "Please enter a valid email address"


  #User should not be able to sing in with spaces on email credentials UD-T10
  @smoke
  Scenario: Login with email spaces
    Given I click can't find your country or region
    When I enter an invalid email as "   "
    Then I enter an invalid password as "Trabajo21!"
    And I should see the error message "Please enter a valid email address"


  # User should not be able to sing in with password spaces on credentials UD-T11
  Scenario: Login with password spaces
    Given I click can't find your country or region
    When I enter an invalid email as "lorenab+organization@bluetrailsoft.com"
    Then I enter an invalid password as "    "
    And I get the error message "Missing required element [Password]"


  # User should not be able to sing in with empty password credentials UD-T613
  Scenario: Login with password as empty
    Given I click can't find your country or region
    When I enter a valid email as "lorenab+organization@bluetrailsoft.com" with password as empty
    Then I should see a password error message "Cannot be empty"


  #User should not be able to sing in with empty email credentials UD-T612
  @smoke
  Scenario: Login with email as empty
    Given I click can't find your country or region
    Then I enter a valid password as "Trabajo21!" with email as empty
    And I should see a email error message "Cannot be empty"


  #User should be able to click on link and see the page for account creation UD-T8
  Scenario: Create an Account Page
    Given I click can't find your country or region
    Then I click on email or phone link
    And I should see the page for create a new account with title as "Create account"


  # User should be able to click on link forgot password and see the page UD-T7
  Scenario: Forgot Password Page
    Given I click can't find your country or region
    Then I click forgot password link
    And I should see the page with "Let's reset your password." as title to recovery it


  # User should be able to click on Privacy Notice link and see the information related UD-T3
  @smoke
  Scenario: Privacy Notice Page
    Given I click privacy link
    When I should see a popup window called "Privacy Notice"


  #User should be able to sign in even if the current location is not listed UD-T2
  Scenario: Selection of country or region not listed
    Given I click can't find your country or region
    Then I should be redirected to "Login"


  #User should be able to switch between accounts according level of permissions UD-T604
  @smoke
  Scenario: Switch between Roles - Organization Admin to other Organization Admin
    Given I click can't find your country or region
    When I enter a valid email as "lorenab+organization@bluetrailsoft.com"
    Then I enter a valid password as "Organization01!"
    And Change from "Organization Admin" profile and validate other "Organization Admin" account is present


  #User should be able to switch between accounts according level of permissions UD-T603
  @smoke
  Scenario: Switch between Roles - Organization Admin to Custom
    Given I click can't find your country or region
    When I enter a valid email as "lorenab+custom@bluetrailsoft.com"
    Then I enter a valid password as "Custom01!"
    And Change from "Teacher" profile and validate "Organization Admin" account is present


  #User should be able to switch between accounts according level of permissions UD-T468
  Scenario: Switch between Roles - Organization Admin to Student
    Given I click can't find your country or region
    When I enter a valid email as "lorenab+student@bluetrailsoft.com"
    Then I enter a valid password as "Student01!"
    And Change from "Student" profile and validate other "Organization Admin" account is present


  #User should be able to switch between accounts according level of permissions UD-T467
  Scenario: Switch between Roles - Organization Admin to Parent
    Given I click can't find your country or region
    When I enter a valid email as "lorenab+parent@bluetrailsoft.com"
    Then I enter a valid password as "Parent01!"
    And Change from "Parent" profile and validate other "Organization Admin" account is present

  #User should be able to switch between accounts according level of permissions UD-T466
  @smoke
  Scenario: Switch between Roles - Organization Admin to School Admin
    Given I click can't find your country or region
    When I enter a valid email as "lorenab+schooladmin@bluetrailsoft.com"
    Then I enter a valid password as "Schooladmin01!"
    And Change from "School Admin" profile and validate other "Organization Admin" account is present

  #User should be able to switch between accounts according level of permissions UD-T465
  @smoke
  Scenario: Switch between Roles - Organization Admin to Teacher
    Given I click can't find your country or region
    When I enter a valid email as "lorenab+teacher@bluetrailsoft.com"
    Then I enter a valid password as "Teacher01!"
    And Change from "Teacher" profile and validate other "Organization Admin" account is present


  #User should see the url and correct language selected for current flag  UD-T614
  @smoke
  Scenario: United Kingdom Flag
    Given auth United Kingdom page
    When verify the correct flag "Sign In" name

  #User should see the url and correct language selected for current flag  UD-T4
  @smoke
  Scenario: Sri Lanka Flag
    Given auth Sri Lanka page
    When verify the correct flag "Sign In" name


  #User should see the url and correct language selected for current flag  UD-T615

  Scenario: United States Flag
    Given auth United States page
    When verify the correct flag "Sign In" name

  #User should see the url and correct language selected for current flag  UD-T616

  Scenario: Korea Flag
    Given auth Korea page
    When verify the correct flag "로그인" name

  #User should see the url and correct language selected for current flag  UD-T617

  Scenario: Viet Nam Flag
    Given auth Viet Nam page
    When verify the correct flag "Đăng nhập" name

  #User should see the url and correct language selected for current flag  UD-T618

  Scenario: India Flag
    Given auth India page
    When verify the correct flag "Sign In" name

  #User should see the url and correct language selected for current flag  UD-T619
  @smoke
  Scenario: Pakistan Flag
    Given auth Pakistan page
    When verify the correct flag "Sign In" name

  #User should see the url and correct language selected for current flag  UD-T620

  Scenario: Indonesia Flag
    Given auth Indonesia page
    When verify the correct flag "Masuk" name

  #User should see the url and correct language selected for current flag  UD-T621
  
   Scenario: Tailand Flag
    Given auth Tailand page
    When verify the correct flag "เข้าสู่ระบบ" name