json.author review.author
json.comments review.comments
json.extract! review, :id, :title, :body, :rating, :user_id, :spoiler, :book_id, :created_at, :updated_at

