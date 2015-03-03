require 'rails_helper'
require 'spec_helper'

describe 'todo' do

  before do
    visit '/'
  end

  it 'adds a todo to the page', js: true do
    find(:css, '#new-todo').set("first chore")
    press_enter
    expect(page).to have_content("first chore")
  end

  it 'deletes a todo from the page' do
  end

  it 'edits a todo in place' do
  end

  private

  def press_enter
    keypress = "var e = $.Event('keydown', { keyCode: 13 }); $('body').trigger(e);"
    page.driver.execute_script(keypress)
  end
end
