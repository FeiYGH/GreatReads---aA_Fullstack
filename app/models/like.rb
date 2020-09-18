# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  review_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :user_id, :review_id, presence: true
    validates :user_id, uniqueness: {scope: :review_id, message: "user can like one review only once"}


    belongs_to :review
    belongs_to :user
end
