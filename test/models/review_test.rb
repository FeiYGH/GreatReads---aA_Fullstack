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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
