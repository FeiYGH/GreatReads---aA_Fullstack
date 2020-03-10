class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null:false
      t.string :author, null:false
      t.string :description, null: false
      t.integer :total_ratings
      t.float :ave_rating
      t.integer :total_reviews
      t.integer :num_pages
      t.integer :isbn
      t.string :publisher
      t.date :pub_date
      t.timestamps
    end
    add_index :books, :isbn, unique:true
  
  end
end
