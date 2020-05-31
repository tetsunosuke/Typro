class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @posts = @user.posts
    @newscore =  @posts.order("created_at DESC").first(10)
    @hiscore =  @posts.order("score DESC").first(10)
 end
end