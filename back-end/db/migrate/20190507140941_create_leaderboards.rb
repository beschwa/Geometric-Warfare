class CreateLeaderboards < ActiveRecord::Migration[5.2]
  def change
    create_table :leaderboards do |t|
      t.string :name
      t.integer :score
      t.integer :ship_id
      t.integer :stage_id

      t.timestamps
    end
  end
end
