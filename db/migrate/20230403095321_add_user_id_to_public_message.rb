class AddUserIdToPublicMessage < ActiveRecord::Migration[7.0]
  def change
    add_column :public_messages, :user_id, :bigint
    add_index :public_messages, :user_id

    # add_foreign_key :public_messages, :users
  end
end
