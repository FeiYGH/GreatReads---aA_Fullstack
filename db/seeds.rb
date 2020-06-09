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

    In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: "1400096898", publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));


    guernsey = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.

    \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
        
    As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
        
    Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
        
    Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: "1984801813", publisher: "Dial Press", pub_date: Date.new(2018,07,10));


   memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/MemoirsHigherRes.jpg")

    memoirs.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')

    guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/GuernseyHigherRes.jpg")

    guernsey.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')
    

    guernseyR1 = Review.create(title: "guernsey review 1", body:"This is review 1 for Guernsey Book. Liked this book! Giving it 4 stars", rating:4, user_id: u1.id, spoiler: false, book_id: guernsey.id);

    guernseyR2 = Review.create(title: "guernsey review 2", body:"This is review 2 for Guernsey Book. Hated this book! Giving it 2 stars", rating:2, user_id: u2.id, spoiler: true, book_id: guernsey.id);


    memoirsR1 = Review.create(title: "Memoirs of a Geisha review 1", body:"This is review 1 for Memoirs of a Geisha Book. Liked this book! Giving it 4 stars", rating:4, user_id: u1.id, spoiler: false, book_id: memoirs.id);

    memoirsR2 = Review.create(title: "Memoirs of a Geisha review 2", body:"This is review 2 for Memoirs of a Geisha Book. Hated this book! Giving it 2 stars", rating:2, user_id: u2.id, spoiler: true, book_id: memoirs.id);





    
    # memoirs1 = Book.create(title: "Memoirs of a Geisha1", author: "Arthur Golden", description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

    #     In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: "1400096899", publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));
    
    
    # guernsey1 = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society1", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.

    # \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
        
    # As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
        
    # Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
        
    # Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: "1984801814", publisher: "Dial Press", pub_date: Date.new(2018,07,10));
    
    
    # memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/MemoirsHigherRes.jpg")

    # memoirs1.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')

    # guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/GuernseyHigherRes.jpg")

    # guernsey1.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')

    # memoirs2 = Book.create(title: "Memoirs of a Geisha2", author: "Arthur Golden", description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

    # In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: "1400096890", publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));


    # guernsey2 = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society2", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.

    # \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
        
    # As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
        
    # Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
        
    # Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: "1984801815", publisher: "Dial Press", pub_date: Date.new(2018,07,10));


    # memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/MemoirsHigherRes.jpg")

    # memoirs2.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')

    # guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/GuernseyHigherRes.jpg")

    # guernsey2.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')


    # memoirs3 = Book.create(title: "Memoirs of a Geisha3", author: "Arthur Golden", description: "A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

    #     In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.", num_pages: 503, isbn: "1400096891", publisher: "Vintage Books USA", pub_date: Date.new(2005,11,22));
    
            
    #         guernsey3 = Book.create(title: "The Guernsey Literary and Potato Peel Pie Society3", author: "Mary Ann Shaffer, Annie Barrows", description: "#1 NEW YORK TIMES BESTSELLER - NOW A MAJOR MOTION PICTURE ON NETFLIX - A remarkable tale of the island of Guernsey during the German Occupation, and of a society as extraordinary as its name.
            
    #         \"I wonder how the book got to Guernsey? Perhaps there is some sort of secret homing instinct in books that brings them to their perfect readers.\" January 1946: London is emerging from the shadow of the Second World War, and writer Juliet Ashton is looking for her next book subject. Who could imagine that she would find it in a letter from a man she's never met, a native of the island of Guernsey, who has come across her name written inside a book by Charles Lamb...
                
    #         As Juliet and her new correspondent exchange letters, Juliet is drawn into the world of this man and his friends—and what a wonderfully eccentric world it is. The Guernsey Literary and Potato Peel Pie Society—born as a spur-of-the-moment alibi when its members were discovered breaking curfew by the Germans occupying their island—boasts a charming, funny, deeply human cast of characters, from pig farmers to phrenologists, literature lovers all.
                
    #         Juliet begins a remarkable correspondence with the society's members, learning about their island, their taste in books, and the impact the recent German occupation has had on their lives. Captivated by their stories, she sets sail for Guernsey, and what she finds will change her forever.
                
    #         Written with warmth and humor as a series of letters, this novel is a celebration of the written word in all its guises and of finding connection in the most surprising ways.", num_pages: 291, isbn: "1984801816", publisher: "Dial Press", pub_date: Date.new(2018,07,10));
        
            
    #         memoirs_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/MemoirsHigherRes.jpg")
        
    #         memoirs3.photo.attach(io: memoirs_photo, filename: 'Memoirs.jpg')
        
    #         guernsey_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/GuernseyHigherRes.jpg")
        
    #         guernsey3.photo.attach(io: guernsey_photo, filename: 'Guernsey.jpg')

            waterForElephants = Book.create(title:"Water for Elephants", author: "Sara Gruen", description: "Winner of the 2007 BookBrowse Award for Most Popular Book.

            An atmospheric, gritty, and compelling novel of star-crossed lovers, set in the circus world circa 1932, by the bestselling author of Riding Lessons.
            
            When Jacob Jankowski, recently orphaned and suddenly adrift, jumps onto a passing train, he enters a world of freaks, drifters, and misfits, a second-rate circus struggling to survive during the Great Depression, making one-night stands in town after endless town. A veterinary student who almost earned his degree, Jacob is put in charge of caring for the circus menagerie. It is there that he meets Marlena, the beautiful young star of the equestrian act, who is married to August, the charismatic but twisted animal trainer. He also meets Rosie, an elephant who seems untrainable until he discovers a way to reach her.
            
            Beautifully written, Water for Elephants is illuminated by a wonderful sense of time and place. It tells a story of a love between two people that overcomes incredible odds in a world in which even love is a luxury that few can afford.", num_pages:335, isbn: "1565125606", publisher: "Algonquin Books", pub_date: Date.new(2007,05,01) );

            water_for_elephants_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/WaterForElephants.jpg")
        
            waterForElephants.photo.attach(io: water_for_elephants_photo, filename: 'WaterForElephants.jpg')

            theHelp = Book.create(title:"The Help", author: "Kathryn Stockett", description: "Three ordinary women are about to take one extraordinary step.

            Twenty-two-year-old Skeeter has just returned home after graduating from Ole Miss. She may have a degree, but it is 1962, Mississippi, and her mother will not be happy till Skeeter has a ring on her finger. Skeeter would normally find solace with her beloved maid Constantine, the woman who raised her, but Constantine has disappeared and no one will tell Skeeter where she has gone.
            
            Aibileen is a black maid, a wise, regal woman raising her seventeenth white child. Something has shifted inside her after the loss of her own son, who died while his bosses looked the other way. She is devoted to the little girl she looks after, though she knows both their hearts may be broken.
            
            Minny, Aibileen's best friend, is short, fat, and perhaps the sassiest woman in Mississippi. She can cook like nobody's business, but she can't mind her tongue, so she's lost yet another job. Minny finally finds a position working for someone too new to town to know her reputation. But her new boss has secrets of her own.
            
            Seemingly as different from one another as can be, these women will nonetheless come together for a clandestine project that will put them all at risk. And why? Because they are suffocating within the lines that define their town and their times. And sometimes lines are made to be crossed.
            
            In pitch-perfect voices, Kathryn Stockett creates three extraordinary women whose determination to start a movement of their own forever changes a town, and the way women, mothers, daughters, caregivers, friends, view one another. A deeply moving novel filled with poignancy, humor, and hope, The Help is a timeless and universal story about the lines we abide by, and the ones we don't.
            (jacket flap)", num_pages:451, isbn:"0399585400", publisher: "Amy Einhorn Books", pub_date: Date.new(2009,02,10) );

            the_help_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/TheHelp.jpeg")
        
            theHelp.photo.attach(io: the_help_photo, filename: 'TheHelp.jpeg')


            molokai = Book.create(title:"Moloka'i", author: "Alan Brennert", description: "This richly imagined novel, set in Hawai'i more than a century ago, is an extraordinary epic of a little-known time and place---and a deeply moving testament to the resiliency of the human spirit.

            Rachel Kalama, a spirited seven-year-old Hawaiian girl, dreams of visiting far-off lands like her father, a merchant seaman. Then one day a rose-colored mark appears on her skin, and those dreams are stolen from her. Taken from her home and family, Rachel is sent to Kalaupapa, the quarantined leprosy settlement on the island of Moloka'i. Here her life is supposed to end---but instead she discovers it is only just beginning.", num_pages:405, isbn: "0312304358", publisher: "St. Martin's Griffin", pub_date: Date.new(2004,10,04) );

            moloka_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/Moloka'i.jpg")
        
            molokai.photo.attach(io: moloka_photo, filename: "Moloka'i.jpg")

            nudge =Book.create(title:"Nudge: Improving Decisions About Health, Wealth, and Happiness", author: "Richard H. Thaler, Cass R. Sunstein", description: "Every day, we make decisions on topics ranging from personal investments to schools for our children to the meals we eat to the causes we champion. Unfortunately, we often choose poorly. The reason, the authors explain, is that, being human, we all are susceptible to various biases that can lead us to blunder. Our mistakes make us poorer and less healthy; we often make bad decisions involving education, personal finance, health care, mortgages and credit cards, the family, and even the planet itself.

            Thaler and Sunstein invite us to enter an alternative world, one that takes our humanness as a given. They show that by knowing how people think, we can design choice environments that make it easier for people to choose what is best for themselves, their families, and their society. Using colorful examples from the most important aspects of life, Thaler and Sunstein demonstrate how thoughtful “choice architecture” can be established to nudge us in beneficial directions without restricting freedom of choice. Nudge offers a unique new take—from neither the left nor the right—on many hot-button issues, for individuals and governments alike. This is one of the most engaging and provocative books to come along in many years.", num_pages:304, isbn:"0300122233", publisher: "Yale University Press", pub_date: Date.new(2008,04,8) );

            nudge_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/Nudge2.jpg")
        
            nudge.photo.attach(io: nudge_photo, filename: "Nudge2.jpg")

            traffic = Book.create(title:"Traffic: Why We Drive the Way We Do and What It Says About Us", author: "Tom Vanderbilt", description: "Would you be surprised that road rage can be good for society? Or that most crashes happen on sunny, dry days? That our minds can trick us into thinking the next lane is moving faster? Or that you can gauge a nation s driving behavior by its levels of corruption? These are only a few of the remarkable dynamics that Tom Vanderbilt explores in this fascinating tour through the mysteries of the road.
            Based on exhaustive research and interviews with driving experts and traffic officials around the globe, Traffic gets under the hood of the everyday activity of driving to uncover the surprisingly complex web of physical, psychological, and technical factors that explain how traffic works, why we drive the way we do, and what our driving says about us. Vanderbilt examines the perceptual limits and cognitive underpinnings that make us worse drivers than we think we are. He demonstrates why plans to protect pedestrians from cars often lead to more accidents. He shows how roundabouts, which can feel dangerous and chaotic, actually make roads safer and reduce traffic in the bargain. He uncovers who is more likely to honk at whom, and why. He explains why traffic jams form, outlines the unintended consequences of our quest for safety, and even identifies the most common mistake drivers make in parking lots.
            The car has long been a central part of American life; whether we see it as a symbol of freedom or a symptom of sprawl, we define ourselves by what and how we drive. As Vanderbilt shows, driving is a provocatively revealing prism for examining how our minds work and the ways in which we interact with one another. Ultimately, Traffic is about more than driving: it s about human nature. This book will change the way we see ourselves and the world around us. And who knows? It may even make us better drivers.", num_pages:402, isbn:"0307264785", publisher: "Knopf Publishing Group", pub_date: Date.new(2008,07,29) )


            traffic_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/Traffic.jpg")
        
            traffic.photo.attach(io: traffic_photo, filename: "Traffic.jpg")


            predictably_irrat = Book.create(title:"Predictably Irrational: The Hidden Forces That Shape Our Decisions", author: "Dan Ariely", description: "Why do our headaches persist after taking a one-cent aspirin but disappear when we take a 50-cent aspirin?

                Why does recalling the Ten Commandments reduce our tendency to lie, even when we couldn't possibly be caught?
                
                Why do we splurge on a lavish meal but cut coupons to save twenty-five cents on a can of soup?
                
                Why do we go back for second helpings at the unlimited buffet, even when our stomachs are already full?
                
                And how did we ever start spending $4.15 on a cup of coffee when, just a few years ago, we used to pay less than a dollar?
                
                When it comes to making decisions in our lives, we think we're in control. We think we're making smart, rational choices. But are we?
                
                In a series of illuminating, often surprising experiments, MIT behavioral economist Dan Ariely refutes the common assumption that we behave in fundamentally rational ways. Blending everyday experience with groundbreaking research, Ariely explains how expectations, emotions, social norms, and other invisible, seemingly illogical forces skew our reasoning abilities.
                
                Not only do we make astonishingly simple mistakes every day, but we make the same \"types\" of mistakes, Ariely discovers. We consistently overpay, underestimate, and procrastinate. We fail to understand the profound effects of our emotions on what we want, and we overvalue what we already own. Yet these misguided behaviors are neither random nor senseless. They're systematic and predictable--making us \"predictably\" irrational.
                
                From drinking coffee to losing weight, from buying a car to choosing a romantic partner, Ariely explains how to break through these systematic patterns of thought to make better decisions. \"Predictably Irrational\" will change the way we interact with the world--one small decision at a time.", num_pages:400, isbn:"0061353248", publisher: "Harper Perennial", pub_date: Date.new(2008,02,19) )


                predictably_irrat_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/PredictablyIrrational.jpg")
        
                predictably_irrat.photo.attach(io: predictably_irrat_photo, filename: "PredictablyIrrational.jpg")



            curious_incid_dog = Book.create(title:"The Curious Incident of the Dog in the Night-Time", author: "Mark Haddon", description: "Christopher John Francis Boone knows all the countries of the world and their capitals and every prime number up to 7,057. He relates well to animals but has no understanding of human emotions. He cannot stand to be touched. And he detests the color yellow.

            Although gifted with a superbly logical brain, for fifteen-year-old Christopher everyday interactions and admonishments have little meaning. He lives on patterns, rules, and a diagram kept in his pocket. Then one day, a neighbor's dog, Wellington, is killed and his carefully constructive universe is threatened. Christopher sets out to solve the murder in the style of his favourite (logical) detective, Sherlock Holmes. What follows makes for a novel that is funny, poignant and fascinating in its portrayal of a person whose curse and blessing are a mind that perceives the world entirely literally.", num_pages:226, isbn:"1400032717", publisher: "Vintage Contemporaries", pub_date: Date.new(2004,05,18) )

            curious_incid_dog_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/curiousIncidentDog2.jpg")
        
            curious_incid_dog.photo.attach(io: curious_incid_dog_photo, filename: "curiousIncidentDog2.jpg")



            
            thinking_slow_fast = Book.create(title:"Thinking, Fast and Slow", author: "Daniel Kahneman", description: "In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities—and also the faults and biases—of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior. The impact of loss aversion and overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the challenges of properly framing risks at work and at home, the profound effect of cognitive biases on everything from playing the stock market to planning the next vacation—each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions.

            Engaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking. He offers practical and enlightening insights into how choices are made in both our business and our personal lives—and how we can use different techniques to guard against the mental glitches that often get us into trouble. Thinking, Fast and Slow will transform the way you think about thinking.", num_pages:499, isbn:"0374275637", publisher: "Straus and Giroux", pub_date: Date.new(2011,10,25) );

            thinking_fast_slow_photo = open("https://greatreads-aa-dev.s3-us-west-1.amazonaws.com/ThinkingFastAndSlow.jpg")
        
            thinking_slow_fast.photo.attach(io: thinking_fast_slow_photo, filename: "ThinkingFastAndSlow.jpg")