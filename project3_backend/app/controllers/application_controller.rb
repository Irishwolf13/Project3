class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/users/:id" do
    User.find(params[:id]).to_json
  end

  get "/users/:id/solutions" do
    User.find(params[:id]).solutions.to_json(include: :problem)
  end

  get "/solutions/:id" do
    Solution.find(params[:id]).to_json(include: {user: {only: [:user_name]}})
  end

  get "/problems/:id" do
    myProblem = Problem.find(params[:id])
    # myProblem.to_json
    # myProblem.to_json(include: :solutions)
    # myProblem.to_json(include: {solutions: {include: {user:{only: [:user_name]}}}})
    myProblem.to_json(include: {solutions: {include: :user}})
  end

  get "/problems/:id/solutions" do
    myProblem = Problem.find(params[:id])
    myProblem.to_json(include: {solutions: {include: :comments}})
  end

end
