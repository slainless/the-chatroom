require "active_support/cache"
require_relative "../../lib/write_through_cache"

$stats =
  WriteThroughCache.new(
    ActiveSupport::Cache::MemoryStore.new
    # ActiveSupport::Cache::FileStore.new("/tmp/cache")
  )
