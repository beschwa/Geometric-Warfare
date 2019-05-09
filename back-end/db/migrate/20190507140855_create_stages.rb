class CreateStages < ActiveRecord::Migration[5.2]
  def change
    create_table :stages do |t|
      t.string :name
      t.string :image_url
      t.string :resized_image_url
      t.string :enemy_url

      t.timestamps
    end
  end
end
