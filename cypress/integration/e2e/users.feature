Feature: Users

  #User should be able to create a new user UD-T19

  Scenario: Create user
   
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I enter to user tab and fill required fields as "Maria" "Gimenez" "mariag@gmail.com" and "09786UYRET"
    Then I create a new user and obtain "User has been created successfully" message
    