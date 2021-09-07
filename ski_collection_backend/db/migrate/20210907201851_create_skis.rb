class CreateSkis < ActiveRecord::Migration[6.1]
  def change
    create_table :skis do |t|
      t.string :brand
      t.string :model
      t.text :description
      t.string :usage

      t.timestamps
    end
  end
end
