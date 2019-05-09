require 'test_helper'

class StageControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get stage_show_url
    assert_response :success
  end

end
