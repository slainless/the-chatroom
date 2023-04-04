require "json"
require_dependency "JWT_authenticable"

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    include JWTAuthenticable
    identified_by :jwt

    # def connect
    #   reject_unauthorized_connection unless header_token_valid?
    #   self.jwt = header_jwt
    # end

    # AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA websocket why no custom header
    # me bang head think solution baka

    def receive(data)
      begin
        parsed = JSON.parse(data)
      rescue StandardError
        return nil
      end

      unless self.jwt
        unless token_valid? parsed["token"]
          transmit({ type: "auth", message: "fail" })
          return nil
        end

        self.jwt = decode_jwt parsed["token"]
        transmit({ type: "auth", message: "success" })
      end
    end

    private
  end
end
