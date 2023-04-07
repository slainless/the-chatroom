require "test_helper"

class AnonUserControllerTest < ActionDispatch::IntegrationTest
  include JWTAuthenticable

  test "Should generate a string ID" do
    id = AnonUserController.get_next_id
    assert_kind_of String, id
  end

  test "Should generate correct JWT response" do
    post user_path
    assert_response :success
    result = JSON.parse @response.body
    assert_kind_of String, result["token"]
    assert_kind_of String, result["user_id"]
    assert valid_token? result["token"]
    assert result.length == 2
  end
end
