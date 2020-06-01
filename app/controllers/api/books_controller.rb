class Api::BooksController < ApplicationController
    
    def show
        @book = Book.find_by(id:params[:id])
        render :show
    end 

    def index
        @books = Book.all
        render :index

        # if I wanted to filter out books in the backend
        # if params[:filter]
        #     booksToFilter = Book.all
        #     @books = []
        #     booksToFilter.each do |book|
        #         words = book.title.split(" ")
        #         words.each do |word|
        #             if word.downcase.start_with?(params[:filter])
        #                 @books << book
        #                 break;
        #             end 
        #         end     
        #     end 
        #     render :index
        # end
    end 

    private
    def book_params
        params.require(:book).permit(:title,:author, :description, :num_pages,:isbn, :publisher, :pub_date,:created_at, :updated_at)
    end 
end
