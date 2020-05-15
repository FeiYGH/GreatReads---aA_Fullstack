
json.authorId comment.author.id
json.author comment.author
if comment.author.photo.attached?
    json.photoUrl url_for(comment.author.photo)
end 
json.extract! comment, :id, :comment, :user_id, :review_id, :created_at, :updated_at
# json.photoUrl url_for(comment.photo)
