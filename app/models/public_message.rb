class PublicMessage < ApplicationRecord
  belongs_to :user, optional: true

  # Create message
  def self.create_message(body, room_id:, user:)
    self.create(user_id: user.id, body: body, room_id: room_id)
  end

  # Simple query to select from start timestamp to end timestamp
  def self.select_by_timestamp_range(start, e)
    self.where(created_at: start..e).order(created_at: :asc)
  end

  # Custom query to select based on inputted cursor
  # where boundary timestamp first selected then used as parameter
  # to select the entire range between boundary
  def self.select_with_cursor(cursor, room_id, rows: 10, direction: :both)
    startTime = cursor
    endTime = cursor

    startTime =
      self.bound_timestamp(
        cursor,
        room_id,
        rows: rows,
        to: :floor
      ) unless direction == :after
    endTime =
      self.bound_timestamp(cursor, room_id, rows: rows) unless direction ==
      :before

    self.select_by_timestamp_range(startTime, endTime)
  end

  private

  def self.bound_timestamp(cursor, room_id, rows: 10, to: :ceil)
    self
      .where("created_at #{to == :ceil ? ">" : "<"} ?", cursor)
      .where(room_id: room_id)
      .order(created_at: to == :ceil ? :asc : :desc)
      .limit(rows)
      .offset(rows - 1)
      .select(:created_at)
      .take
      &.created_at
  end
end
