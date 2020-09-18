class RemoveBookIdFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :book_id, :integer
  end
end
