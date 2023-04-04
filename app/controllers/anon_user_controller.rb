require "jwt"
require_dependency "JWT_authenticable"

class AnonUserController < ApplicationController
  include JWTAuthenticable

  def create
    render json: generate_jwt(AnonUserController.get_next_id)
  end

  def get
    render json: header_jwt.merge({ valid: header_token_valid? })
  end

  def self.get_next_id
    (DateTime.now.to_f * 1000).to_i
  end
end
