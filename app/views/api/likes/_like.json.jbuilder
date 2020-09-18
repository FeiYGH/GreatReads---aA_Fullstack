json.authorId like.user.id
json.author like.user
# json.extract! like, :id, :user_id, :review_id, :book_id, :like
json.extract! like, :id, :user_id, :review_id


