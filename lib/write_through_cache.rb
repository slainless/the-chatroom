class WriteThroughCache
  def initialize(cache_store)
    @cache = cache_store
  end

  def read(key, options = nil)
    value = @cache.read(key, options)
    value.nil? ? nil : Marshal.load(value)
  end

  def write(key, value, options = nil)
    @cache.write(key, Marshal.dump(value), options)
  end

  def increment(key, amount = 1, options = nil)
    with_lock(key) do
      value = @cache.read(key, options)
      new_value = value.to_i + amount
      @cache.write(key, new_value.to_s, options)
      new_value
    end
  end

  private

  def with_lock(key)
    key = "lock_#{key}"
    @cache.fetch(key, raw: true) do
      yield
      true
    end
  end
end
