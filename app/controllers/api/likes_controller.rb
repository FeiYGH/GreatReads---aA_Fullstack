class Api::LikesController < ApplicationController
    before_action :require_login, only: [:destroy, :create]
    def create
        @like = Like.new(like_params)
        if @like.save
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like && @like.user_id == current_user.id
            @like.destroy
        else
            render json: @like.errors.full_messages, status: :unprocessable_entity
        end 

    end
    
    def index        
        @review = Review.find_by(id: params[:review_id])
        @likes = @review.likes 
        render :index
    end
    
    private
    def like_params
        params.require(:like).permit(:user_id, :review_id, :book_id, :like)
    end 
end
 