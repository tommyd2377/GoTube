require 'test_helper'

class FollowsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @follow = follows(:one)
  end

  test "should get index" do
    get follows_url, as: :json
    assert_response :success
  end

  test "should create follow" do
    assert_difference('Follow.count') do
      post follows_url, params: { follow: { followee_uid: @follow.followee_uid, followee_username: @follow.followee_username, follower_uid: @follow.follower_uid, follower_username: @follow.follower_username } }, as: :json
    end

    assert_response 201
  end

  test "should show follow" do
    get follow_url(@follow), as: :json
    assert_response :success
  end

  test "should update follow" do
    patch follow_url(@follow), params: { follow: { followee_uid: @follow.followee_uid, followee_username: @follow.followee_username, follower_uid: @follow.follower_uid, follower_username: @follow.follower_username } }, as: :json
    assert_response 200
  end

  test "should destroy follow" do
    assert_difference('Follow.count', -1) do
      delete follow_url(@follow), as: :json
    end

    assert_response 204
  end
end
