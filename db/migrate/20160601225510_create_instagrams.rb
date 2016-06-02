# class CreateInstagrams < ActiveRecord::Migration
# 	enable_extension 'hstore' unless extension_enabled?('hstore')
#   def change
#     create_table :instagrams do |t|
#       t.hstore :location
#       t.string :tags, array: true
#       t.hstore :pictures

#       t.timestamps null: false
#     end
#   end
# end
