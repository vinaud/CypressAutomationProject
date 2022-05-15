Feature: End to end Ecommerce validation

    Application regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And validate the total price
    Then select the country submit and verify Thankyou