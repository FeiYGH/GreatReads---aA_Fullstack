class Review < ApplicationRecord
    validates :rating, inclusion: {in:(1..5)}
    validates :title, :body, :rating, :user_id, :book_id, presence: true

    belongs_to :book
    
    belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
     
    
end
