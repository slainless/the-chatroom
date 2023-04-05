require_dependency "JWT_authenticable"
require_dependency "room"

class PublicMessageController < ApplicationController
  include JWTAuthenticable
  include Room
  before_action :validate_token!

  def find
    messages =
      PublicMessage.select_with_cursor(cursor!, room!, direction: direction!)
    render json: { messages: messages }
  end

  def create
    room_id = room!
    message =
      PublicMessage.create(
        body: body!,
        room_id: room_id,
        user_id: header_jwt["id"]
      )
    ActionCable.server.broadcast("public_chat_#{room_id}", message)
    render json: { message: message }
  end

  private

  def body!
    unless params[:body].respond_to?(:to_str) && params[:body].size < 200
      raise ActionController::BadRequest,
            "Message body unaccepted, must be a string and below 200 characters"
    end
    params[:body].to_str
  end

  @@accepted_direction = %w[before after both]
  def direction!
    return :before unless params[:direction].present?
    unless params[:direction].in?(@@accepted_direction)
      raise ActionController::BadRequest,
            "Invalid direction, only accept #{@@accepted_direction}"
    end
    params[:direction].to_sym
  end

  def cursor!
    return DateTime.now unless params[:cursor].present?
    begin
      time = DateTime.parse(params[:cursor])
    rescue Date::Error
      raise ActionController::BadRequest, "Bad cursor!"
    end
  end

  def room!
    raise ActionController::RoutingError, "Not Found" unless room_valid?
    params[:room_id]
  end
end
