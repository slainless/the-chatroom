require_relative "boot"

require "rails/all"
require "securerandom"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MyApi
  class Application < Rails::Application
    config.action_cable.mount_path = "/ws"
    config.action_cable.disable_request_forgery_protection = true
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
    config.middleware.use ActionDispatch::Cookies

    config.autoload_paths << "#{Rails.root}/lib"
    config.jwt_secret_key = "anon.user.go.brrrrr.v1"
    config.allowed_public_rooms = %w[general ask fixed_room_id]
  end
end
