class SkisController < ApplicationController

    def index
        @skis = Ski.all
        render json: @skis
    end
end
