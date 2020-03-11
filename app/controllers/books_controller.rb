class BooksController < ApplicationController
    
    debugger;
    def show
        @book = Book.find(params[:id])
        render :show
    end 
end     