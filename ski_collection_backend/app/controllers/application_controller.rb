class ApplicationController < ActionController::API
    
    def current_user
        auth_header = request.headers["Authorization"]
        if auth_header
            token = auth_header.split(" ")[1]
            begin
                user_id = JWT.decode(token, 'hallo')[0][:user_id]
            rescue JWT::DecodeError
                nil
            end
        end
        @user = User.find(user_id)
    end

    def logged_in?
        !!current_user
    end


    def authorized
        render json: {message: "Please log in"}, status: :unauthorized unless logged_in?
    end
    
    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            @token = JWT.encode({user_id: @user.id}, "hallo")
            render json: {user: @user, skis: @user.skis, token: @token}, status: :accepted
        else
            render json: {errors: ['Invalid username or password']}, status: :unauthorized
        end
    end
end
