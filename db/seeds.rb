require "faker"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# users =
#   (1..10).map do |i|
#     User.create(
#       id: i,
#       cookie_id: "unique_cookie_#{i}",
#       display_id: "unique_id_#{i}"
#     )
#   end
#
#

user_ids = (1..10).map do
  Time.at(rand * Time.now.to_i).to_i * 1000
end

(1..100).each do |i|
  PublicMessage.create(
    user_id: user_ids.sample,
    room_id: Rails.application.config.allowed_public_rooms.sample,
    body: Faker::Lorem.__send__(%w[sentence word paragraph question].sample),
    created_at: DateTime.now - (100 - i + Random.rand).hour
  )
end
