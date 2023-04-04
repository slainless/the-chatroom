class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :cookie_id, index: { unique: true }
      t.string :display_id, index: { unique: true }

      t.timestamps
    end
  end
end
