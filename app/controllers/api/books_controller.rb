class Api::BooksController < ApplicationController
    
    def show
        @book = Book.find_by(id:params[:id])
        render :show
    end 

    def index
        # debugger;
        @books = Book.all
        # debugger;
        render :index
    end 

    # private
    # def book_params
    #     params.require(:book).permit(:title,:author, :description, :num_pages,:isbn, :publisher, :pub_date,:created_at, :updated_at)
    # end 
end
