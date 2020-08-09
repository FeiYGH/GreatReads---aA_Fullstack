# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer          not null
#  user_id    :integer          not null
#  spoiler    :boolean
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#  body       :string
#
class Review < ApplicationRecord
    validates :rating, inclusion: {in:(0..5)}
    validates :rating, :user_id, :book_id, presence: true
    
    # validates :title, :body, :rating, :user_id, :book_id, presence: true

    belongs_to :book
    
    belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :comments
    has_many :likes
    
    
end
