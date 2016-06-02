class InstagramController < ApplicationController
  def index
  	@instagrams = Instagram.all
  end
  def show
  	@instagrams = Instagram.all
  end
end
