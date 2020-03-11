class RemoveColumnsFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :total_ratings
    remove_column :books, :ave_rating
    remove_column :books, :total_reviews
  end 
end
