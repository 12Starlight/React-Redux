class Api::TodosController < ApplicationController
  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def index
    @todo = Todo.all
    render json: @todo 
  end 

  def create
    # @todo = Todo.new({ title: params[:title], body: params[:body], done: params[:done]})
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created 
    else
      render json: @todo.errors.full_messages, status: 422 # Here we only want to display the single error as it happens
      # flash[:errors] = @todo.errors.full_messages
    end
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      flash[:errors] = @todo.errors.full_messages # Here we want to store an array of errors as they accumulate
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy 
    render json: @todo 
  end


  private 
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end







