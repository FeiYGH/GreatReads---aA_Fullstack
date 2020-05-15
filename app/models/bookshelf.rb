# == Schema Information
#
# Table name: bookshelves
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  book_id    :integer          not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Bookshelf < ApplicationRecord
    validates :status, :user_id, :book_id, presence: true

    validates :status, inclusion: {in: ["Read", "Currently Reading", "Want to Read"]}
    validates_uniqueness_of :book_id, scope: :user_id

    belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

    belongs_to :book;
    has_many :bookshelves;

end
