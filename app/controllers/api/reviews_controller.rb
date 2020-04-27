class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:destroy, :update, :create]
    
    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end 

    def index
        # debugger
        if params[:book_id]
            @book = Book.find_by(id: params[:book_id])
            @reviews = @book.reviews
        elsif params[:user_id]
            @user = User.find_by(id:params[:user_id])
            @reviews = @user.reviews
        else 
            @reviews = Review.all
        end
        # debugger 
        render :index
       
    end 

    


    def create
        # @review = current_user.reviews.new(review_params)
        @review = Review.new(review_params)
        # debugger;
        if @review.save
            render 'api/reviews/show'
            # render :show
        else
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end 
    end 

    def update
        @review =Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end 
    end 

    def destroy
        # debugger
        @review = Review.find_by(id: params[:id])
        if @review && @review.user_id == current_user.id
            # @review.destroy
            if @review.destroy
                render :show
            else
                render json: @review.errors.full_messages, status: 422
            end
        end 
        #check with Julia
        # render :show
    end 

    private

    def review_params
        params.require(:review).permit(:title, :rating, :body, :user_id, :book_id, :spoiler)
    end

end
