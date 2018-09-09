class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.string :follower_uid
      t.string :follower_username
      t.string :followee_uid
      t.string :followee_username

      t.timestamps
    end
  end
end
