json.extract! book, :id, :title, :author, :description, :num_pages, :isbn, :publisher, :pub_date
json.photoUrl url_for(book.photo)