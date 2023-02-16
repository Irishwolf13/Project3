class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/users" do
    User.all.to_json
  end
  
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
    myProblem.to_json(include: {solutions: {include: :comments}})
  end

  get "/problems/:id/solutions" do
    myProblem = Problem.find(params[:id])
    myProblem.to_json(include: {solutions: {include: :comments}})
  end

  delete "/comments/:id" do
    deleteMe = Comment.find(params[:id])
    deleteMe.destroy
    deleteMe.to_json
  end

  delete "/solutions/:id" do
    deleteMe = Solution.find(params[:id])
    deleteMe.destroy
    deleteMe.to_json
  end

  post "/users" do
    User.create(user_name: params[:name], password: params[:password]).to_json
  end

  post "/solutions" do
    Solution.create(
      user_id: params[:user_id],
      problem_id: params[:problem_id],
      language: params[:language],
      num_of_likes: params[:num_of_likes],
      solve: params[:solve]
    ).to_json(include: :comments)
  end

  post "/comments" do
    Comment.create(
      user_id: params[:user_id],
      solution_id: params[:solution_id],
      comment: params[:comment]
    ).to_json
  end

  patch "/solutions/:id" do
    Solution.find(params[:id]).update(solve: params[:solve]).to_json
  end

  patch "/solutions/:id/likes" do
    Solution.find(params[:id]).update(num_of_likes: params[:num_of_likes]).to_json
  end

  patch "/comments/:id" do
    Comment.find(params[:id]).update(comment: params[:comment]).to_json
  end

end
