require "jwt"

module JWTAuthenticable
  extend ActiveSupport::Concern

  private

  # ------------------------------------------------------------------
  # Actions

  def validate_token!
    unless valid_token? header_token
      render plain: "No authentication data found or it is invalid", status: 401
    end
  end

  # ------------------------------------------------------------------
  # Helper

  def header_jwt
    decode_jwt header_token
  end

  def header_token_valid?
    valid_token? header_token
  end

  def secret_key
    Rails.application.config.jwt_secret_key
  end

  def header_token
    auth_header = request.headers["Authorization"]
    auth_header.present? ? auth_header.split(" ").last : nil
  end

  # ------------------------------------------------------------------
  # Token processing

  def valid_token?(token)
    begin
      decode_jwt token, true
      true
    rescue JWT::VerificationError, JWT::DecodeError
      false
    end
  end

  # ------------------------------------------------------------------
  # Token encoding/decoding logic

  def decode_jwt(token, throw = false)
    begin
      result = JWT.decode token, secret_key, throw, algorithm: "HS256"
      result[0]
    rescue JWT::DecodeError => e
      raise e if throw
      {}
    end
  end

  def generate_jwt(id)
    JWT.encode ({ id: id }), secret_key, "HS256"
  end
end
