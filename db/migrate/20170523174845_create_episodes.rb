class CreateEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :episodes do |t|
      t.integer :episodeNumber
      t.string :name
      t.string :wikia
      t.string :wiki
      t.string :imdb

      t.references :season, index: true, foreign_key: true
    end
  end
end
