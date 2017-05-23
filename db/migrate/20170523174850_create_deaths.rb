class CreateDeaths < ActiveRecord::Migration[5.1]
  def change
    create_table :deaths do |t|
      t.string :name
      t.string :time
      t.string :link
      t.string :killedBy
      t.string :house
      t.string :status
      t.integer :importance
      t.references :episode, index: true, foreign_key: true
      
    end
  end
end
