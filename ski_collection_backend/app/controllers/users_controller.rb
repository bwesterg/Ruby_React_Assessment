class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]


    def index
        @users = User.all
        render({ json: @users, include: [:ski] })
    end

    def show
        @user = User.find( params[:id] )
        render( json: @user, include: [:ski])
    end

    def profile
        render json: {user: current_user, skis: current_user.skis}
    end

    def create
        @user = User.new(user_params)

        if @user.valid?
            @user.save
            @token = JWT.encode({user_id: @user.id}, "hallo")
            render json: {user: @user, skis: @user.skis, token: @token}, status: :created
        else
            render json: {errors: @user.errors.full_messages}, status: :not_acceptable
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
