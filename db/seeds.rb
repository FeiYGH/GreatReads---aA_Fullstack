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

    u1 = User.create(username: "user1", email: "user1@gmail.com", password: "password");

    memoirs = Book.create(title: "Memoirs of a Geisha", author: "Arthur Golden", description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

    In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: 1400096898, publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));


    guernsey = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.

    \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
        
    As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
        
    Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
        
    Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: 1984801813, publisher: "Dial Press", pub_date: Date.new(2018,07,10));


   memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/Memoirs.jpg")

    memoirs.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')

    guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/Guernsey.jpg")

    guernsey.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')
    