# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model? 

Your answer: Perhaps a db:migrate can resolve the issue? I don't fully recall.

Researched answer: The foreign key comes from the belongs_to side--Student model in this scenario--and is typically the modelname_id with an integer data type. Create a new column for the foreign id and run a rails db:migrate.

2. Which RESTful routes must always be passed params? Why?

Your answer: Any route with an associated id?

Researched answer: I maintain that it's routes associated with an id.

3. Name three rails generator commands. What is created by each?

Your answer: examples: $ rails g model Cabinet --> this would create an empty model named Cabinet.

Researched answer: $ rails g model Cabinet wood:string finish:string --> generates a model with two columns, wood and finish, that receive string data types as inputs.
$ rails g migration AddItemToLIst --> generates a new file in the migration directory named AddItemToList.
$ rails g rspec:install --> generates a spec folder for rspec testing files

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Index is the name of this controller method and it lists items in the model.

action: "POST" location: /students
Create is the name of this controller method and it adds information to the database.

action: "GET" location: /students/new
New is the name of this controller method which routes the user to a form in the UI.

action: "GET" location: /students/2
Show is the name of this controller method and it displays one entry from a model.

action: "GET" location: /students/2/edit
Edit is the name of this controller method. It display a form for editing.

action: "PATCH" location: /students/2
Update is the name of this controller method and it is used to modify existing data in the database.

action: "DELETE" location: /students/2
Destroy is the name of this controller method. It is used to remove a database entry.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user, I want to see a landing page that says "Get things done!" and includes a login form/card for username and password.
- As a user when I click the "login" button on the login form, it should bring me to the To-Do list page.
- As a user I should be able to setup a new user account by clicking on a "create account" hyperlink under the login forms that brings me to a new user account form.
- As a user, I should be able to click a submit button for a new user account, that congratulates me for creating a new account and opens up to the To-Do list page.
- As a user, I should see a lined blank list with check boxes indented from the left side of the list to mark when tasks are completed.
- As a user, when I click on a check box, it should fill with a check mark and the text should have a strikethrough throughout the completed task.
- As a user, I should have the option to move a specific task up or down the list.
- As a user, I should be able to move a task to a new to do list.
- As a user, I want to see a navigation bar/pane on the left side of the screen with tabs for current, new, and old. The current to do list should be the default page after logging in.
- As a user, when I complete my tasks, I should be prompted with a message that says, "Great job completing your tasks!!! Keep it here or move it?" It should give me the option to keep it on the current page, archive it in old, or delete it.