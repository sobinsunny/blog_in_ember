class V1::UsersController < ApplicationController
	def index
		users = User.all
		render json: users
	end
	def show
		user = User.find(params[:id])
		render json: user
	end

	def create
		user = User.create(user_params)
		render json: user , status: 200
	end
	def destroy
		user = User.find(params[:id])
		user.destroy
		render json: nil, status: 200
	end

private
	def user_params
		 params.require(:user).permit(:name, :email)
	end
end
