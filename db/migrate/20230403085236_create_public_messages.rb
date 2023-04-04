class CreatePublicMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :public_messages do |t|
      t.string :room_id
      t.text :body

      t.timestamps
    end
  end
end
