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
        # @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        # updated so I could find by email instead of username
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        
        if @user 
            login(@user)
            render 'api/users/show' #not a route, just a path to a file'
        else
            # @user = User.new
            # debugger
            render json: ["Invalid username or password"], status: 401
        end 
    end

   
    def update
        @user = User.find_by(id: params[:id])
        if @user.update(session_params)
            render :show
        else
            render json: @user.errors.full_messages,status:422
        end
    end 

    private
    def session_params
        params.require(:user).permit(:username, :email, :photo)
    end


end
