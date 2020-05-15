# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  comment    :string           not null
#  user_id    :integer          not null
#  review_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :comment, :user_id, :review_id, presence: true

    belongs_to :review
    
    belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    
end
