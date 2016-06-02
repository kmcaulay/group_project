class CreateInstagrams < ActiveRecord::Migration
  def change
    create_table :instagrams do |t|
      t.string :image
      t.float :longitude
      t.float :latitude
      t.string :hashtags, array:true

      t.timestamps null: false
    end
  end
end
