# == Schema Information
#
# Table name: books
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :string           not null
#  num_pages   :integer
#  publisher   :string
#  pub_date    :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  isbn        :string
#
require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
