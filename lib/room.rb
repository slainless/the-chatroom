module Room
  extend ActiveSupport::Concern

  def room_valid?
    params[:room_id].in?(Rails.application.config.allowed_public_rooms)
  end

  def room
    params[:room_id]
  end
end
