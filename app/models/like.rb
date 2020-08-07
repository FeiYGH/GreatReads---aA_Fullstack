# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  review_id  :integer          not null
#  book_id    :integer          not null
#  like       :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :user_id, :review_id, :book_id, :like, presence: true
    
    belongs_to :book
    belongs_to :review
    belongs_to :user

end
