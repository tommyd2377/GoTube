class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.string :uid
      t.string :username
      t.string :vid
      t.string :channel_title
      t.string :title
      t.string :thumbnail
      t.string :description

      t.timestamps
    end
  end
end
