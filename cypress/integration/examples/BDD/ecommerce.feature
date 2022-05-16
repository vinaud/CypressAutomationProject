Feature: End to end Ecommerce validation

    Application regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And validate the total price
    Then select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
        |name  | gender |
        |bobz  | Male   |
    Then Validate the forms behavior
    And select the shop page