class Api::BookshelvesController < ApplicationController
    before_action :require_login

    def show
        @bookshelf = Bookshelf.find_by(id: params[:id]) 
        # debugger;
        render :show
    end 

    def index
        if params[:user_id]
            @user = User.find_by(id: params[:user_id])
            @bookshelves = @user.bookshelves
        end
        render :index
    end 

    def create
        # debugger;
        @bookshelf=Bookshelf.new(bookshelf_params)
        if @bookshelf.save
            render :show
        else
            render json: @bookshelf.errors.full_messages, status: 422
        end 
    end 

    def update
        @bookshelf = Bookshelf.find_by(id: params[:id])
        if @bookshelf.update(bookshelf_params)
            render :show
        else
            render json: @bookshelf.errors.full_messages, status: 422
        end 
    end 

    

    private
    def bookshelf_params
        params.require(:bookshelf).permit(:user_id, :book_id, :status, :created_at, :updated_at)
    end 
end
