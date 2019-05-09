class CreateShips < ActiveRecord::Migration[5.2]
  def change
    create_table :ships do |t|
      t.string :name
      t.string :image_url
      t.string :bullet_url

      t.timestamps
    end
  end
end
