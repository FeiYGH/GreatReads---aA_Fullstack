# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string           default(""), not null
#  rating     :integer          not null
#  user_id    :integer          not null
#  spoiler    :boolean
#  book_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :rating, inclusion: {in:(0..5)}
    validates :title, :body, :rating, :user_id, :book_id, presence: true

    belongs_to :book
    
    belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    
end
