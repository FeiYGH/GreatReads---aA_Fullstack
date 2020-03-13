# json.array! @reviews do |review|
#     json.set! review.id do 
#         json.partial! 'review', review:review
#     end 
# end 



#this way will give sent back to me a pojo
@reviews.each do |review|
    json.set! review.id do 
        json.partial! 'review', review: review
    end 
end 