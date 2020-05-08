#this way will give sent back to me a pojo
@comments.each do |comment|
    json.set! comment.id do 
        json.partial! 'comment', comment: comment
    end 
end 