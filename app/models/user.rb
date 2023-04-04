require "securerandom"

class User < ApplicationRecord
  has_many :public_messages

  def self.create_anon
    self.create(
      display_id: self.generate_display_id,
      cookie_id: self.generate_cookie_id
    )
  end

  def self.find_anon(cookie)
    self.find_by(cookie_id: cookie)
  end

  private

  def self.generate_cookie_id
    SecureRandom.urlsafe_base64(16)
  end

  def self.generate_display_id
    SecureRandom.urlsafe_base64(16)
  end
end
