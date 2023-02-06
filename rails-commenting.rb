# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is creating a class called BlogPostsController that is inheriting data from ApplicationController.
class BlogPostsController < ApplicationController
  def index
    # ---2) This is creating the instance variable @posts to equal all of the available BlogPost entries.
    @posts = BlogPost.all
  end

  # ---3) This is defining the show method, used for displaying a single entry from BlogPost.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The defines the new method for making a new form for BlogPost.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This is setting up the instance variable @post in this create method to do the next part of the creation of a BlogPost. First was the form being made in the new method. Now it's creation will be completed after adhering to the parameters in the blog_post_params.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This is to identify where to retrieve the specific BlogPost to edit.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Similar to create, it's to permit updating.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) After the post is destroyed, return to the blog_posts_path.
      redirect_to blog_posts_path
    end
  end

  # ---9) This is to prevent users from altering your database beyond the basic user functionality. It sets strong parameters on the method to deny access to users based on what's below "private".
  private
  def blog_post_params
    # ---10) This means that users are only allowed to change title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
