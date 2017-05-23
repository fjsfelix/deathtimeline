class CreateSeasons < ActiveRecord::Migration[5.1]
  def change
    create_table :seasons do |t|
      t.integer :seasonNumber
      t.string :name
    end
  end
end
