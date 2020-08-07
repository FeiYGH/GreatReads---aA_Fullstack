class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null:false
      t.integer :review_id, null:false
      t.integer :book_id, null:false
      t.boolean :like, null:false
      t.timestamps
    end
  end
end
