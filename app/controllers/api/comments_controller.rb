class Api::CommentsController < ApplicationController
    before_action :require_login, only: [:destroy, :update, :create]

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end 

    def index
        if params[:review_id]
            @review = Review.find_by(id: params[:review_id])
            @comments = @review.comments; 
            # debugger;
        elsif params[:user_id]
            @user = User.find_by(id: params[:user_id])
            @comments = @user.comments;
        else
            @comments = Comment.all
        end 
        render :index
    end 

    def create
        @comment = Comment.new(comment_params)
        # debugger;
        if @comment.save
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end 
    end 


    private

    def comment_params
        params.require(:comment).permit(:comment, :user_id, :review_id)
    end

end
