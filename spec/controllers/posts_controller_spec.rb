require 'rails_helper'

describe PostsController do
  describe "GET #new" do
    it "new.html.erbに遷移すること" do
      get :new
      expect(response).to render_template :new
    end
  end
  
  # describe "GET #show" do

  #   it "@postに正しい値が入っていること" do
  #     post = create(:post)
  #     binding.pry
  #     get :show, params:{id: post}
  #     expect(assigns(:post)).to eq post
  #   end
    
  #   it "show.html.erbに遷移すること" do
  #     post = create(:post)
  #     get :show, params:{id: post}
  #     expect(response).to render_template :show
    
  #   end
  # end

end