class CreateRecentSearches < ActiveRecord::Migration
  def change
    create_table :recent_searches do |t|
      t.string :hashtags

      t.timestamps null: false
    end
  end
end
