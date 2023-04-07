require "test_helper"

class JWTAuthenticableTest < ActionDispatch::IntegrationTest
  include JWTAuthenticable

  @@valid_token =
    "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2ODA4NTEyODA0NDIifQ.K6EdeCjJWAcQxc67AKDWlCB5hDKXiX4UiY07pDzy7-4"
  @@invalid_token =
    "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2ODA4NTEyODA0NDIifQ.cvlOX5qr4X_YxWPTtAADe4pC8tOXKXcflG1p7n8rbF4"
  @@malformed_token =
    "xxxhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2ODA4NTEyODA0NDIifQ.K6EdeCjJWAcQxc67AKDWlCB5hDKXiX4UiY07pDzy7-4"
  @@bearer_with_token = { "Authorization" => "Bearer #{@@valid_token}" }

  def request
    OpenStruct.new(headers: @bearer)
  end

  test "Should return token or nil when header_token called" do
    @bearer = @@bearer_with_token
    assert header_token == @@valid_token

    @bearer = {}
    assert header_token == nil
  end

  test "Should generate correct user JWT" do
    id = "My name is #{rand}"
    token = generate_jwt id

    assert_kind_of String, token
    assert valid_token? token

    jwt = decode_jwt token
    assert id == jwt["id"]
  end

  test "Should return correct jwt from parsed token with decode_jwt" do
    id = "1680851280442"
    jwt = decode_jwt @@valid_token
    assert id == jwt["id"]
    assert jwt.length == 1
  end

  test "Should return parsed jwt from invalid signature token with decode_jwt if throw = false" do
    id = "1680851280442"
    jwt = decode_jwt @@invalid_token, false
    assert id == jwt["id"]
  end

  test "Should return empty hash from malformed token with decode_jwt if throw = false" do
    jwt = decode_jwt @@malformed_token, false
    assert jwt == {}
  end

  test "Should return false for malformed or invalid token with valid_token?" do
    assert valid_token? @@valid_token
    assert_not valid_token? @@invalid_token
    assert_not valid_token? @@malformed_token
  end

  test "Should render plain error (status 401) with validate_token!" do
    get room_path "welcome"
    assert_response 401
    assert "No authentication data found or it is invalid" == @response.body
  end

  test "Should pass request with correct token with validate_token!" do
    get room_path("welcome"), headers: @@bearer_with_token

    assert_response :success
  end
end
