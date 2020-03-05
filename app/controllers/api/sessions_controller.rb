class Api::SessionsController < ApplicationController
    #logout
    def destroy 
        if current_user
            logout
            # debugger;
            render json: {}
        else
            render json: ['no current user to log out'], status: 422
        end
    end 


    #login
    def create  
        # debugger;
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login(@user)
            render 'api/users/show' #not a route, just a path to a file'
        else
            # @user = User.new
            # debugger
            render json: ["Invalid username or password"], status: 401
        end 
    end

end
