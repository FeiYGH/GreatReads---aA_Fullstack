# debugger;
json.author bookshelf.author
json.book bookshelf.book
if bookshelf.book.photo.attached?
    json.photoUrl url_for(bookshelf.book.photo)
end 
json.extract! bookshelf, :id, :user_id, :book_id, :status, :created_at, :updated_at