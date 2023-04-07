require "test_helper"

class PublicMessageTest < ActiveSupport::TestCase
  @@body = "This is body"
  @@user_id = "123"
  @@room_id = "room_1"

  test "Should at minimum require body, user, room ID to create message" do
    assert_raise ActiveRecord::NotNullViolation do
      PublicMessage.create(body: @@body)
    end

    assert_raise ActiveRecord::NotNullViolation do
      PublicMessage.create(body: @@body, user_id: @@user_id)
    end

    assert_nothing_raised do
      message =
        PublicMessage.new(body: @@body, user_id: @@user_id, room_id: @@room_id)
      assert message.save
    end
  end

  test "Should allow arbitrary room ID" do
    message =
      PublicMessage.new(body: @@body, user_id: @@user_id, room_id: rand.to_s)
    assert message.save
  end

  test "Should allow arbitrary user ID" do
    message =
      PublicMessage.new(body: @@body, user_id: rand.to_s, room_id: @@room_id)
    assert message.save
  end
end
