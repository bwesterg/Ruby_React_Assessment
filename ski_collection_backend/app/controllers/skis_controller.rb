class SkisController < ApplicationController

    before_action :find_ski, only: [:update, :destroy]

    def index
        @skis = Ski.all
        render json: @skis
    end

    def create
        @ski = Ski.create(ski_params)

        render json: @ski, status: :created
    end
   
    def update
        # @ski = Ski.find(params[:id])  -- not needed b/c before_action
        @ski.update(ski_params)
        render json: @ski
    end

    def destroy 
        # @ski = Ski.find(params[:id]) -- not needed b/c before_action
        @ski.destroy
        render status: :no_content
    end

    private

    def find_ski
        @ski = Ski.find(params[:id])
    end

    def ski_params
        params.require(:ski).permit(:brand, :model, :description, :usage)
    end

end
