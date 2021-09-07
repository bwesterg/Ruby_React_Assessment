class SkisController < ApplicationController

    def index
        @skis = Ski.all
        render json: @skis
    end

    def create
        @ski = Ski.create(
            brand: params[:brand],
            model: params[:model],
            description: params[:description],
            usage: params[:usage]
        )

        render json: @ski, status: :created
    end
end
