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

like = Like.new
like.uid = '1'
like.username = 'tom'
like.vid = '22373dd29'
like.channel_title = '123'
like.title = 'title1'
like.description = 'des1'
like.thumbnail = 'thumb1'
like.save

like = Like.new
like.uid = '2'
like.username = 'tom2'
like.vid = '22373dd292'
like.channel_title = '1232'
like.title = 'title12'
like.description = 'des12'
like.thumbnail = 'thumb12'

like = Like.new
like.uid = '3'
like.username = 'tom3'
like.vid = '22373dd293'
like.channel_title = '1233'
like.title = 'title13'
like.description = 'des13'
like.thumbnail = 'thumb13'
like.save

like = Like.new
like.uid = '5'
like.username = 'tom5'
like.vid = '22373dd294'
like.channel_title = '1234'
like.title = 'title14'
like.description = 'des14'
like.thumbnail = 'thumb14'
like.save

follow = Follow.new
follow.follower_uid = 'uid1'
follow.follower_username = 'username1'
follow.followee_uid = 'uid2'
follow.followee_username = 'username2'
follow.save

follow = Follow.new
follow.follower_uid = 'uid3'
follow.follower_username = 'username3'
follow.followee_uid = 'uid4'
follow.followee_username = 'username4'
follow.save

follow = Follow.new
follow.follower_uid = 'uid5'
follow.follower_username = 'username5'
follow.followee_uid = 'uid6'
follow.followee_username = 'username6'
follow.save

follow = Follow.new
follow.follower_uid = 'uid7'
follow.follower_username = 'username7'
follow.followee_uid = 'uid8'
follow.followee_username = 'username8'
follow.save