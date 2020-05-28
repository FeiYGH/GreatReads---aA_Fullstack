class DeleteIsbnColumnFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :isbn
  end
end
