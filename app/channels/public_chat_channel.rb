class PublicChatChannel < ApplicationCable::Channel
  include Room

  def subscribed
    reject unless room_valid?
    stream_from "public_chat_#{room}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  private
end
