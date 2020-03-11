# == Schema Information
#
# Table name: books
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :string           not null
#  num_pages   :integer
#  isbn        :integer
#  publisher   :string
#  pub_date    :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Book < ApplicationRecord
    validates :title, :author, :description, presence:true
    validates :isbn, presence: true, uniqueness:true
    validates :title, uniqueness: {scope: :author, message: "one author can not have two books with same title"}


    has_one_attached :photo



    
end
