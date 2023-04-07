require "jwt"

class AnonUserController < ApplicationController
  include JWTAuthenticable

  def create
    id = AnonUserController.get_next_id
    token = generate_jwt id
    render json: { token: token, user_id: id }
  end

  def get
    render json: { user_id: header_jwt["id"], valid: header_token_valid? }
  end

  def self.get_next_id
    (DateTime.now.to_f * 1000).to_i.to_s
  end
end
