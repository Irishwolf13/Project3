class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/users/:id/solutions" do
    { message: "Return a list of all solutions posted by user"}.to_json
  end

  get "/solutions/:id" do
    { message: "Returns individual solution"}.to_json
  end

  get "/problems/:id" do
    { message: "Returns an individual problem"}.to_json
  end

  get "/problems/:id/comments" do
    { message: "Returns all comments for individual problem"}.to_json
  end

  get "/problems/:id/likes" do
    { message: "Returns number of likes for individual problem"}.to_json
  end

  get "/comments/:id" do
    { message: "Returns individual comment_content"}.to_json
  end

end
