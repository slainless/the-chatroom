class UserController < ApplicationController
  def create
    user = User.create_anon
    cookies[:user] = {
      value: user.cookie_id,
      path: "/",
      domain: "localhost",
      secure: true
    }

    render json: { id: user.display_id }
  end

  def get
    cookie_id = cookies[:user]&.value
    user = User.find_anon(cookie_id) if cookie_id

    render json: { id: user&.display_id }
  end

  private
end
