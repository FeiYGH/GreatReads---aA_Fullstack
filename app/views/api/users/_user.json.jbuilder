# json.extract! user, :id, :username
json.extract! user, :id, :username, :email
# debugger;
if user.photo.attached?
    json.photoUrl url_for(user.photo)
end
json.bookshelves user.bookshelves

