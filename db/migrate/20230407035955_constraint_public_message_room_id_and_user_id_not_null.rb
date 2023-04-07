class ConstraintPublicMessageRoomIdAndUserIdNotNull < ActiveRecord::Migration[
  7.0
]
  def change
    change_column :public_messages, :room_id, :string, null: false
    change_column :public_messages, :user_id, :integer, null: false
  end
end
