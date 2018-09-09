# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new
user.email = 'user1@bananas.com'
user.fullname = 'user1'
user.username = 'tester1'
user.password = 'bananaBro1'
user.password_confirmation = 'bananaBro1'
user.save

user = User.new
user.email = 'user2@bananas.com'
user.fullname = 'user2'
user.username = 'tester2'
user.password = 'bananaBro2'
user.password_confirmation = 'bananaBro2'
user.save

user = User.new
user.email = 'user3@bananas.com'
user.fullname = 'user3'
user.username = 'tester3'
user.password = 'bananaBro3'
user.password_confirmation = 'bananaBro3'
user.save

user = User.new
user.email = 'user4@bananas.com'
user.fullname = 'user4'
user.username = 'tester4'
user.password = 'bananaBro4'
user.password_confirmation = 'bananaBro4'
user.save