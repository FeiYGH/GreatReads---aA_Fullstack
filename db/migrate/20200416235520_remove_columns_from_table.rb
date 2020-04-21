class RemoveColumnsFromTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :title, null:false 
    remove_column :reviews, :body, default: "", null:false

  end
end
