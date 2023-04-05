module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # TODO: add jwt authentication process
    # need auth for user-sensitive action...
    def receive(data)
      puts data
      super data
    end
  end
end
