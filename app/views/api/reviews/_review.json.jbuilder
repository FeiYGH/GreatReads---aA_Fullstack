json.authorId review.author.id
json.author review.author
if review.author.photo.attached?
    json.photoUrl url_for(review.author.photo)
end
json.comments review.comments
json.extract! review, :id, :title, :body, :rating, :user_id, :spoiler, :book_id, :created_at, :updated_at

