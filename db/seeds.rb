# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

require 'open-uri'
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    User.delete_all;
    Book.delete_all;
    Review.delete_all;

    u1 = User.create(username: "user1", email: "user1@gmail.com", password: "password");

    u2 = User.create(username: "user2", email: "user2@gmail.com", password: "password");

    memoirs = Book.create(title: "Memoirs of a Geisha", author: "Arthur Golden", description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

    In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: 1400096898, publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));


    guernsey = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.

    \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
        
    As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
        
    Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
        
    Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: 1984801813, publisher: "Dial Press", pub_date: Date.new(2018,07,10));


   memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/MemoirsHigherRes.jpg")

    memoirs.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')

    guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/GuernseyHigherRes.jpg")

    guernsey.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')
    

    guernseyR1 = Review.create(title: "guernsey review 1", body:"This is review 1 for Guernsey Book. Liked this book! Giving it 4 stars", rating:4, user_id: u1.id, spoiler: false, book_id: guernsey.id);

    guernseyR2 = Review.create(title: "guernsey review 2", body:"This is review 2 for Guernsey Book. Hated this book! Giving it 2 stars", rating:2, user_id: u2.id, spoiler: true, book_id: guernsey.id);


    memoirsR1 = Review.create(title: "Memoirs of a Geisha review 1", body:"This is review 1 for Memoirs of a Geisha Book. Liked this book! Giving it 4 stars", rating:4, user_id: u1.id, spoiler: false, book_id: memoirs.id);

    memoirsR2 = Review.create(title: "Memoirs of a Geisha review 2", body:"This is review 2 for Memoirs of a Geisha Book. Hated this book! Giving it 2 stars", rating:2, user_id: u2.id, spoiler: true, book_id: memoirs.id);





    
    memoirs1 = Book.create(title: "Memoirs of a Geisha1", author: "Arthur Golden", description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

        In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: 1400096899, publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));
    
    
        guernsey1 = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society1", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.
    
        \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
            
        As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
            
        Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
            
        Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: 1984801814, publisher: "Dial Press", pub_date: Date.new(2018,07,10));
    
    
       memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/MemoirsHigherRes.jpg")
    
        memoirs1.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')
    
        guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/GuernseyHigherRes.jpg")
    
        guernsey1.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')

        memoirs2 = Book.create(title: "Memoirs of a Geisha2", author: "Arthur Golden", description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

            In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: 1400096890, publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));
        
        
            guernsey2 = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society2", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.
        
            \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
                
            As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
                
            Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
                
            Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: 1984801815, publisher: "Dial Press", pub_date: Date.new(2018,07,10));
        
        
           memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/MemoirsHigherRes.jpg")
        
            memoirs2.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')
        
            guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/GuernseyHigherRes.jpg")
        
            guernsey2.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')


            memoirs3 = Book.create(title: "Memoirs of a Geisha3", author: "Arthur Golden", description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

                In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: 1400096891, publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));
            
            
            guernsey3 = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society3", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.
            
            \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
                
            As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
                
            Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
                
            Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: 1984801816, publisher: "Dial Press", pub_date: Date.new(2018,07,10));
        
            
            memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/MemoirsHigherRes.jpg")
        
            memoirs3.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')
        
            guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/GuernseyHigherRes.jpg")
        
            guernsey3.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')